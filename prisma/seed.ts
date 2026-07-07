import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

import { PrismaClient } from "../src/generated/prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const now = new Date();
const enrollmentStart = new Date(now.getFullYear(), now.getMonth() - 1, 15);
const enrollmentEnd = new Date(now.getFullYear(), now.getMonth() + 1, 15);

async function getOrCreateSupabaseUser(email: string): Promise<string> {
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn("Supabase credentials not found in env, using hardcoded demo user ID");
    return "user-demo-001";
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  try {
    const { data, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) {
      console.error("Failed to list users from Supabase Auth", listError);
      return "user-demo-001";
    }

    const existingUser = data.users.find((u) => u.email === email);
    if (existingUser) {
      console.log(`User ${email} already exists in Supabase Auth: ${existingUser.id}`);
      return existingUser.id;
    }

    console.log(`Creating user ${email} in Supabase Auth...`);
    const { data: userData, error: createError } = await supabase.auth.admin.createUser({
      email,
      password: "password123",
      email_confirm: true,
      user_metadata: {
        first_name: "آرمین",
        last_name: "محمدی",
      },
    });

    if (createError || !userData.user) {
      console.error("Failed to create user in Supabase Auth", createError);
      return "user-demo-001";
    }

    console.log(`User created successfully with ID: ${userData.user.id}`);
    return userData.user.id;
  } catch (err) {
    console.error("Error communicating with Supabase Admin API", err);
    return "user-demo-001";
  }
}

async function main() {
  console.log("Seeding database...");

  const academy = await prisma.academy.upsert({
    where: { slug: "oper-academy" },
    update: {},
    create: {
      slug: "oper-academy",
      name: "Oper Academy",
      description: "آکادمی تخصصی DevOps و زیرساخت",
    },
  });

  await prisma.academy.upsert({
    where: { slug: "stack-academy" },
    update: {},
    create: {
      slug: "stack-academy",
      name: "Stack Academy",
      description: "آکادمی تخصصی مهندسی نرم‌افزار و برنامه‌نویسی",
    },
  });

  await prisma.academy.upsert({
    where: { slug: "designlab-academy" },
    update: {},
    create: {
      slug: "designlab-academy",
      name: "DesignLab Academy",
      description: "آکادمی تخصصی طراحی رابط و تجربه کاربری (UI/UX)",
    },
  });

  await prisma.academy.upsert({
    where: { slug: "basseo-academy" },
    update: {},
    create: {
      slug: "basseo-academy",
      name: "Basseo Academy",
      description: "آکادمی تخصصی مدیریت محصول و کسب‌وکار",
    },
  });

  await prisma.academy.upsert({
    where: { slug: "froma-academy" },
    update: {},
    create: {
      slug: "froma-academy",
      name: "Froma Academy",
      description: "آکادمی تخصصی هنرهای بصری و گرافیک خلاق",
    },
  });

  const [lpDevops, lpLinux] = await Promise.all([
    prisma.learningPath.upsert({
      where: { academyId_slug: { academyId: academy.id, slug: "devops" } },
      update: {},
      create: {
        slug: "devops",
        name: "مسیر DevOps",
        description: "یادگیری زیرساخت، CI/CD و مدیریت سرور",
        academyId: academy.id,
      },
    }),
    prisma.learningPath.upsert({
      where: { academyId_slug: { academyId: academy.id, slug: "linux" } },
      update: {},
      create: {
        slug: "linux",
        name: "مسیر Linux",
        description: "مدیریت سیستم‌عامل لینوکس و شبکه",
        academyId: academy.id,
      },
    }),
  ]);

  const semester = await prisma.semester.upsert({
    where: { id: "seed-semester-1404-1" },
    update: {
      isActive: true,
      enrollmentStart,
      enrollmentEnd,
    },
    create: {
      id: "seed-semester-1404-1",
      name: "نیمسال اول ۱۴۰۴",
      isActive: true,
      enrollmentStart,
      enrollmentEnd,
    },
  });

  const studentUserId = await getOrCreateSupabaseUser("armin@example.com");

  let student = await prisma.student.findUnique({
    where: { email: "armin@example.com" },
  });

  if (student) {
    student = await prisma.student.update({
      where: { id: student.id },
      data: {
        userId: studentUserId,
        firstName: "آرمین",
        lastName: "محمدی",
      },
    });
  } else {
    student = await prisma.student.create({
      data: {
        userId: studentUserId,
        firstName: "آرمین",
        lastName: "محمدی",
        email: "armin@example.com",
        academyId: academy.id,
      },
    });
  }

  type CourseSeed = {
    code: string;
    name: string;
    description: string;
    units: number;
    learningPathId: string;
    prerequisites: string[];
    sections: {
      sectionNumber: string;
      instructor: string;
      capacity: number;
      enrolledCount: number;
      schedules: { day: "SATURDAY" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY"; startTime: string; endTime: string }[];
    }[];
  };

  const courses: CourseSeed[] = [
    {
      code: "LINUX-101",
      name: "مبانی لینوکس",
      description: "آشنایی با خط فرمان، فایل‌سیستم و مدیریت کاربران",
      units: 3,
      learningPathId: lpLinux.id,
      prerequisites: [],
      sections: [
        {
          sectionNumber: "01",
          instructor: "دکتر رضایی",
          capacity: 30,
          enrolledCount: 22,
          schedules: [
            { day: "SATURDAY", startTime: "08:00", endTime: "10:00" },
            { day: "MONDAY", startTime: "08:00", endTime: "10:00" },
          ],
        },
        {
          sectionNumber: "02",
          instructor: "مهندس کریمی",
          capacity: 25,
          enrolledCount: 25,
          schedules: [
            { day: "SUNDAY", startTime: "14:00", endTime: "16:00" },
            { day: "TUESDAY", startTime: "14:00", endTime: "16:00" },
          ],
        },
      ],
    },
    {
      code: "LINUX-201",
      name: "مدیریت پیشرفته لینوکس",
      description: "Systemd، شبکه، فایروال و مانیتورینگ",
      units: 3,
      learningPathId: lpLinux.id,
      prerequisites: ["LINUX-101"],
      sections: [
        {
          sectionNumber: "01",
          instructor: "دکتر رضایی",
          capacity: 20,
          enrolledCount: 12,
          schedules: [
            { day: "SATURDAY", startTime: "10:00", endTime: "12:00" },
            { day: "MONDAY", startTime: "10:00", endTime: "12:00" },
          ],
        },
      ],
    },
    {
      code: "DOCKER-101",
      name: "Docker و کانتینرها",
      description: "ساخت و مدیریت کانتینر، Docker Compose",
      units: 3,
      learningPathId: lpDevops.id,
      prerequisites: ["LINUX-101"],
      sections: [
        {
          sectionNumber: "01",
          instructor: "مهندس احمدی",
          capacity: 25,
          enrolledCount: 18,
          schedules: [
            { day: "SUNDAY", startTime: "08:00", endTime: "10:30" },
            { day: "WEDNESDAY", startTime: "08:00", endTime: "10:30" },
          ],
        },
      ],
    },
    {
      code: "K8S-101",
      name: "Kubernetes مقدماتی",
      description: "Pod، Deployment، Service و Helm",
      units: 4,
      learningPathId: lpDevops.id,
      prerequisites: ["DOCKER-101"],
      sections: [
        {
          sectionNumber: "01",
          instructor: "مهندس احمدی",
          capacity: 20,
          enrolledCount: 15,
          schedules: [{ day: "SATURDAY", startTime: "14:00", endTime: "17:00" }],
        },
      ],
    },
    {
      code: "CICD-101",
      name: "CI/CD Pipeline",
      description: "GitHub Actions، GitLab CI و اتوماسیون deploy",
      units: 3,
      learningPathId: lpDevops.id,
      prerequisites: ["DOCKER-101"],
      sections: [
        {
          sectionNumber: "01",
          instructor: "مهندس نوری",
          capacity: 25,
          enrolledCount: 10,
          schedules: [
            { day: "TUESDAY", startTime: "10:00", endTime: "12:30" },
            { day: "THURSDAY", startTime: "10:00", endTime: "12:30" },
          ],
        },
      ],
    },
    {
      code: "TF-101",
      name: "Infrastructure as Code",
      description: "Terraform، Ansible و مدیریت زیرساخت",
      units: 3,
      learningPathId: lpDevops.id,
      prerequisites: ["LINUX-201"],
      sections: [
        {
          sectionNumber: "01",
          instructor: "مهندس نوری",
          capacity: 20,
          enrolledCount: 8,
          schedules: [
            { day: "WEDNESDAY", startTime: "14:00", endTime: "16:30" },
            { day: "FRIDAY", startTime: "14:00", endTime: "16:30" },
          ],
        },
      ],
    },
    {
      code: "NET-101",
      name: "شبکه‌های کامپیوتری",
      description: "TCP/IP، DNS، Load Balancing و VPN",
      units: 3,
      learningPathId: lpLinux.id,
      prerequisites: [],
      sections: [
        {
          sectionNumber: "01",
          instructor: "دکتر موسوی",
          capacity: 30,
          enrolledCount: 20,
          schedules: [
            { day: "MONDAY", startTime: "14:00", endTime: "16:00" },
            { day: "WEDNESDAY", startTime: "14:00", endTime: "16:00" },
          ],
        },
      ],
    },
    {
      code: "GIT-101",
      name: "Git و Version Control",
      description: "Branching، Merge، Rebase و Git Flow",
      units: 2,
      learningPathId: lpDevops.id,
      prerequisites: [],
      sections: [
        {
          sectionNumber: "01",
          instructor: "مهندس کریمی",
          capacity: 35,
          enrolledCount: 28,
          schedules: [{ day: "THURSDAY", startTime: "16:00", endTime: "17:30" }],
        },
      ],
    },
  ];

  const courseIdByCode = new Map<string, string>();

  for (const courseData of courses) {
    const course = await prisma.course.upsert({
      where: {
        academyId_code: { academyId: academy.id, code: courseData.code },
      },
      update: {
        name: courseData.name,
        description: courseData.description,
        units: courseData.units,
        learningPathId: courseData.learningPathId,
      },
      create: {
        code: courseData.code,
        name: courseData.name,
        description: courseData.description,
        units: courseData.units,
        academyId: academy.id,
        learningPathId: courseData.learningPathId,
      },
    });

    courseIdByCode.set(courseData.code, course.id);

    for (const sectionData of courseData.sections) {
      const section = await prisma.courseSection.upsert({
        where: {
          courseId_sectionNumber_semesterId: {
            courseId: course.id,
            sectionNumber: sectionData.sectionNumber,
            semesterId: semester.id,
          },
        },
        update: {
          instructor: sectionData.instructor,
          capacity: sectionData.capacity,
          enrolledCount: sectionData.enrolledCount,
        },
        create: {
          courseId: course.id,
          sectionNumber: sectionData.sectionNumber,
          instructor: sectionData.instructor,
          capacity: sectionData.capacity,
          enrolledCount: sectionData.enrolledCount,
          semesterId: semester.id,
        },
      });

      await prisma.schedule.deleteMany({ where: { sectionId: section.id } });
      await prisma.schedule.createMany({
        data: sectionData.schedules.map((schedule) => ({
          sectionId: section.id,
          day: schedule.day,
          startTime: schedule.startTime,
          endTime: schedule.endTime,
        })),
      });
    }
  }

  for (const courseData of courses) {
    const courseId = courseIdByCode.get(courseData.code)!;
    await prisma.prerequisite.deleteMany({ where: { courseId } });

    if (courseData.prerequisites.length > 0) {
      await prisma.prerequisite.createMany({
        data: courseData.prerequisites.map((code) => ({
          courseId,
          requiredCourseId: courseIdByCode.get(code)!,
        })),
      });
    }
  }

  const linux101Id = courseIdByCode.get("LINUX-101")!;
  await prisma.completedCourse.upsert({
    where: {
      studentId_courseId: { studentId: student.id, courseId: linux101Id },
    },
    update: {},
    create: { studentId: student.id, courseId: linux101Id },
  });

  const linux201Section = await prisma.courseSection.findFirst({
    where: {
      courseId: courseIdByCode.get("LINUX-201")!,
      semesterId: semester.id,
      sectionNumber: "01",
    },
  });

  if (linux201Section) {
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        studentId_sectionId_semesterId: {
          studentId: student.id,
          sectionId: linux201Section.id,
          semesterId: semester.id,
        },
      },
    });

    if (!existingEnrollment) {
      await prisma.enrollment.create({
        data: {
          studentId: student.id,
          sectionId: linux201Section.id,
          semesterId: semester.id,
          status: "CONFIRMED",
        },
      });
    }
  }

  console.log("Seed completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
