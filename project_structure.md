# 📁 joinly-app - Project Structure

*Generated on: 8/30/2026, 12:19:58 PM*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 57 |
| 📁 Total Folders | 14 |
| 🌳 Max Depth | 5 levels |
| 🛠️ Tech Stack | React, Next.js, TypeScript, CSS, Node.js |

## ⭐ Important Files

- 🔴 📖 **README.md** - Project documentation
- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔴 📖 **README.md** - Project documentation
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🔴 📦 **package.json** - Package configuration
- 🟡 🔷 **tsconfig.json** - TypeScript config
- 🟡 🚫 **.gitignore** - Git ignore rules
- 🔴 📖 **README.md** - Project documentation
- 🔵 🔍 **eslint.config.mjs** - ESLint config
- 🟡 ▲ **next.config.ts** - Next.js config
- 🟡 🔒 **package-lock.json** - Dependency lock
- 🔴 📦 **package.json** - Package configuration
- 🟡 🔷 **tsconfig.json** - TypeScript config
- 🔵 ▲ **vercel.json** - Vercel config

## 📊 File Statistics

### By File Type

- ⚛️ **.tsx** (React TypeScript files): 12 files (21.1%)
- ⚙️ **.json** (JSON files): 9 files (15.8%)
- 🔤 **.ttf** (TrueType fonts): 9 files (15.8%)
- 🔷 **.ts** (TypeScript files): 8 files (14.0%)
- 📖 **.md** (Markdown files): 6 files (10.5%)
- 🎨 **.svg** (SVG images): 5 files (8.8%)
- 📄 **.mjs** (Other files): 3 files (5.3%)
- 🚫 **.gitignore** (Git ignore): 2 files (3.5%)
- 📄 **.** (Other files): 1 files (1.8%)
- 🖼️ **.ico** (Icon files): 1 files (1.8%)
- 🎨 **.css** (Stylesheets): 1 files (1.8%)

### By Category

- **Assets**: 15 files (26.3%)
- **React**: 12 files (21.1%)
- **Config**: 9 files (15.8%)
- **TypeScript**: 8 files (14.0%)
- **Docs**: 6 files (10.5%)
- **Other**: 4 files (7.0%)
- **DevOps**: 2 files (3.5%)
- **Styles**: 1 files (1.8%)

### 📁 Largest Directories

- **root**: 57 files
- **frontend**: 39 files
- **backend**: 15 files
- **frontend/app**: 14 files
- **frontend/public**: 14 files

## 🌳 Directory Structure

```
joinly-app/
├── 📂 backend/
│   ├── 🟡 🚫 **.gitignore**
│   ├── 📄 .prettierrc
│   ├── 🔵 🔍 **eslint.config.mjs**
│   ├── ⚙️ nest-cli.json
│   ├── 🔴 📦 **package.json**
│   ├── 🔴 📖 **README.md**
│   ├── 📁 src/
│   │   ├── 🔷 app.controller.spec.ts
│   │   ├── 🔷 app.controller.ts
│   │   ├── 🔷 app.module.ts
│   │   ├── 🔷 app.service.ts
│   │   └── 🔷 main.ts
│   ├── 📂 test/
│   │   ├── 🔷 app.e2e-spec.ts
│   │   └── ⚙️ jest-e2e.json
│   ├── ⚙️ tsconfig.build.json
│   └── 🟡 🔷 **tsconfig.json**
├── 📂 frontend/
│   ├── 🟡 🚫 **.gitignore**
│   ├── 📖 AGENTS.md
│   ├── 🚀 app/
│   │   ├── 🧩 components/
│   │   │   └── 📂 learning/
│   │   │   │   ├── ⚛️ LearningFooter.tsx
│   │   │   │   ├── ⚛️ LearningHeader.tsx
│   │   │   │   ├── ⚛️ LessonLayout.tsx
│   │   │   │   ├── ⚛️ LessonNavigation.tsx
│   │   │   │   └── ⚛️ LessonSidebar.tsx
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🎨 globals.css
│   │   ├── ⚛️ layout.tsx
│   │   ├── 📂 learn/
│   │   │   ├── ⚛️ page.tsx
│   │   │   └── 📂 statistics-probability/
│   │   │   │   ├── 📂 basics-of-probability/
│   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   ├── 📂 bayes-theorem/
│   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   ├── 📂 conditional-probability/
│   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   └── ⚛️ page.tsx
│   │   └── ⚛️ page.tsx
│   ├── 📖 CLAUDE.md
│   ├── 🔵 🔍 **eslint.config.mjs**
│   ├── 🔷 next-env.d.ts
│   ├── 🟡 ▲ **next.config.ts**
│   ├── 🟡 🔒 **package-lock.json**
│   ├── 🔴 📦 **package.json**
│   ├── 📄 postcss.config.mjs
│   ├── 🌐 public/
│   │   ├── 🎨 file.svg
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
│   │   ├── 🎨 globe.svg
│   │   ├── 🎨 next.svg
│   │   ├── 🎨 vercel.svg
│   │   └── 🎨 window.svg
│   ├── 🔴 📖 **README.md**
│   └── 🟡 🔷 **tsconfig.json**
├── 📖 project_structure.md
├── 🔴 📖 **README.md**
└── 🔵 ▲ **vercel.json**
```

## 📖 Legend

### File Types
- 📖 Docs: Markdown files
- 🚫 DevOps: Git ignore
- 📄 Other: Other files
- ⚙️ Config: JSON files
- 🔷 TypeScript: TypeScript files
- ⚛️ React: React TypeScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- 🎨 Assets: SVG images
- 🔤 Assets: TrueType fonts

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
