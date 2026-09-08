import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Joinly | یاد بگیر، بساز، به اشتراک بگذار",
  description:
    "Joinly پلتفرمی برای یادگیری مفاهیم، ساخت پروژه‌های واقعی و به اشتراک گذاشتن دانش کاربردی.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}