# 📁 joinly-app - Project Structure

*Generated on: 7/7/2026, 6:34:15 PM*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 106 |
| 📁 Total Folders | 83 |
| 🌳 Max Depth | 4 levels |
| 🛠️ Tech Stack | React, Next.js, TypeScript, CSS, Node.js |

## ⭐ Important Files

- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔴 📖 **README.md** - Project documentation
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🟡 ▲ **next.config.ts** - Next.js config
- 🟡 🔒 **package-lock.json** - Dependency lock
- 🔴 📦 **package.json** - Package configuration
- 🟡 🔷 **tsconfig.json** - TypeScript config

## 📊 File Statistics

### By File Type

- 🔷 **.ts** (TypeScript files): 64 files (60.4%)
- ⚛️ **.tsx** (React TypeScript files): 17 files (16.0%)
- 🔤 **.ttf** (TrueType fonts): 9 files (8.5%)
- ⚙️ **.json** (JSON files): 4 files (3.8%)
- 📖 **.md** (Markdown files): 2 files (1.9%)
- 📄 **.mjs** (Other files): 2 files (1.9%)
- 📄 **.example** (Other files): 1 files (0.9%)
- 📄 **.** (Other files): 1 files (0.9%)
- 🚫 **.gitignore** (Git ignore): 1 files (0.9%)
- 📄 **.sql** (Other files): 1 files (0.9%)
- 📄 **.prisma** (Other files): 1 files (0.9%)
- 🖼️ **.jpg** (JPEG images): 1 files (0.9%)
- 🖼️ **.ico** (Icon files): 1 files (0.9%)
- 🎨 **.css** (Stylesheets): 1 files (0.9%)

### By Category

- **TypeScript**: 64 files (60.4%)
- **React**: 17 files (16.0%)
- **Assets**: 11 files (10.4%)
- **Other**: 6 files (5.7%)
- **Config**: 4 files (3.8%)
- **Docs**: 2 files (1.9%)
- **DevOps**: 1 files (0.9%)
- **Styles**: 1 files (0.9%)

### 📁 Largest Directories

- **root**: 106 files
- **src**: 87 files
- **src/modules**: 34 files
- **src/generated/prisma**: 18 files
- **src/generated**: 18 files

## 🌳 Directory Structure

```
joinly-app/
├── 📄 .env.example
├── 📄 .gitattributes
├── 🟡 🚫 **.gitignore**
├── ⚙️ components.json
├── 🔵 🔍 **eslint.config.mjs**
├── 🔷 middleware.ts
├── 🔷 next-env.d.ts
├── 🟡 ▲ **next.config.ts**
├── 🟡 🔒 **package-lock.json**
├── 🔴 📦 **package.json**
├── 📄 postcss.config.mjs
├── 📂 prisma/
│   ├── 📂 migrations/
│   │   └── 📂 20260707063000_init/
│   │   │   └── 📄 migration.sql
│   ├── 📄 schema.prisma
│   └── 🔷 seed.ts
├── 🔷 prisma.config.ts
├── 📖 project_structure.md
├── 🌐 public/
│   └── 🖼️ hero.jpg
├── 🔴 📖 **README.md**
├── 📁 src/
│   ├── 🚀 app/
│   │   ├── 📂 auth/
│   │   │   ├── 📂 login/
│   │   │   │   └── ⚛️ page.tsx
│   │   │   └── 📂 signup/
│   │   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 dashboard/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 📂 enrollment/
│   │   │   └── ⚛️ page.tsx
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🎨 globals.css
│   │   ├── ⚛️ layout.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📦 assets/
│   │   ├── 📂 fonts/
│   │   │   ├── 🔤 Kalameh-Black.ttf
│   │   │   ├── 🔤 Kalameh-Bold.ttf
│   │   │   ├── 🔤 Kalameh-ExtraBold.ttf
│   │   │   ├── 🔤 Kalameh-ExtraLight.ttf
│   │   │   ├── 🔤 Kalameh-Light.ttf
│   │   │   ├── 🔤 Kalameh-Medium.ttf
│   │   │   ├── 🔤 Kalameh-Regular.ttf
│   │   │   ├── 🔤 Kalameh-SemiBold.ttf
│   │   │   └── 🔤 Kalameh-Thin.ttf
│   │   ├── 📂 icons/
│   │   └── 🖼️ images/
│   ├── 🧩 components/
│   │   ├── 📂 common/
│   │   ├── 📂 layout/
│   │   │   ├── ⚛️ app-header.tsx
│   │   │   └── ⚛️ app-shell.tsx
│   │   └── 🎨 ui/
│   │   │   ├── ⚛️ button.tsx
│   │   │   ├── ⚛️ card.tsx
│   │   │   └── ⚛️ input.tsx
│   ├── ⚙️ config/
│   │   ├── 🔷 colors.ts
│   │   ├── 🔷 index.ts
│   │   ├── 🔷 radius.ts
│   │   ├── 🔷 shadow.ts
│   │   ├── 🔷 spacing.ts
│   │   └── 🔷 typography.ts
│   ├── 📂 constants/
│   ├── 📂 generated/
│   │   └── 📂 prisma/
│   │   │   ├── 🔷 browser.ts
│   │   │   ├── 🔷 client.ts
│   │   │   ├── 🔷 commonInputTypes.ts
│   │   │   ├── 🔷 enums.ts
│   │   │   ├── 📂 internal/
│   │   │   │   ├── 🔷 class.ts
│   │   │   │   ├── 🔷 prismaNamespace.ts
│   │   │   │   └── 🔷 prismaNamespaceBrowser.ts
│   │   │   ├── 📂 models/
│   │   │   │   ├── 🔷 Academy.ts
│   │   │   │   ├── 🔷 CompletedCourse.ts
│   │   │   │   ├── 🔷 Course.ts
│   │   │   │   ├── 🔷 CourseSection.ts
│   │   │   │   ├── 🔷 Enrollment.ts
│   │   │   │   ├── 🔷 LearningPath.ts
│   │   │   │   ├── 🔷 Prerequisite.ts
│   │   │   │   ├── 🔷 Schedule.ts
│   │   │   │   ├── 🔷 Semester.ts
│   │   │   │   └── 🔷 Student.ts
│   │   │   └── 🔷 models.ts
│   ├── 🎣 hooks/
│   ├── 📚 lib/
│   │   ├── 🔷 db.ts
│   │   ├── 🔷 errors.ts
│   │   ├── 🔷 logger.ts
│   │   ├── 📂 supabase/
│   │   │   ├── 🔷 client.ts
│   │   │   └── 🔷 server.ts
│   │   └── 🔷 utils.ts
│   ├── 📂 modules/
│   │   ├── 📂 academy/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 academy.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 academy.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 academy.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   └── 📂 validation/
│   │   ├── 📂 auth/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 auth.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   │   ├── ⚛️ login-form.tsx
│   │   │   │   └── ⚛️ signup-form.tsx
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 auth.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 auth.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   └── 📂 validation/
│   │   │   │   └── 🔷 index.ts
│   │   ├── 📂 course/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 course.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 course.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 course.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   └── 📂 validation/
│   │   ├── 📂 dashboard/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 dashboard.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 dashboard.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 dashboard.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   └── 📂 validation/
│   │   ├── 📂 enrollment/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 enrollment.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   │   ├── ⚛️ course-catalog.tsx
│   │   │   │   ├── ⚛️ enrollment-page.tsx
│   │   │   │   ├── ⚛️ selected-courses.tsx
│   │   │   │   └── ⚛️ unit-progress.tsx
│   │   │   ├── 📂 constants/
│   │   │   │   └── 🔷 index.ts
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 enrollment.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 enrollment.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   ├── 🔧 utils/
│   │   │   │   └── 🔷 enrollment-rules.ts
│   │   │   └── 📂 validation/
│   │   │   │   └── 🔷 index.ts
│   │   └── 📂 learning-path/
│   │   │   ├── 📂 actions/
│   │   │   │   └── 🔷 learning-path.actions.ts
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   │   └── 🔷 learning-path.repository.ts
│   │   │   ├── 📂 services/
│   │   │   │   └── 🔷 learning-path.service.ts
│   │   │   ├── 📂 types/
│   │   │   │   └── 🔷 index.ts
│   │   │   └── 📂 validation/
│   ├── 📂 providers/
│   ├── 📂 services/
│   ├── 🎨 styles/
│   ├── 📂 types/
│   │   └── 🔷 api.ts
│   └── 🔧 utils/
└── 🟡 🔷 **tsconfig.json**
```

## 📖 Legend

### File Types
- 📄 Other: Other files
- 🚫 DevOps: Git ignore
- 📖 Docs: Markdown files
- ⚙️ Config: JSON files
- 🔷 TypeScript: TypeScript files
- 🖼️ Assets: JPEG images
- ⚛️ React: React TypeScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- 🔤 Assets: TrueType fonts

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
