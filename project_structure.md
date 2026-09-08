# 📁 joinly-app - Project Structure

*Generated on: 9/8/2026, 7:36:26 PM*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 69 |
| 📁 Total Folders | 26 |
| 🌳 Max Depth | 7 levels |
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

- 🔷 **.ts** (TypeScript files): 15 files (21.7%)
- ⚛️ **.tsx** (React TypeScript files): 14 files (20.3%)
- ⚙️ **.json** (JSON files): 10 files (14.5%)
- 🔤 **.ttf** (TrueType fonts): 9 files (13.0%)
- 📖 **.md** (Markdown files): 6 files (8.7%)
- 🎨 **.svg** (SVG images): 5 files (7.2%)
- 📄 **.mjs** (Other files): 3 files (4.3%)
- 🚫 **.gitignore** (Git ignore): 2 files (2.9%)
- 📄 **.** (Other files): 1 files (1.4%)
- 📜 **.js** (JavaScript files): 1 files (1.4%)
- 🖼️ **.ico** (Icon files): 1 files (1.4%)
- 🎨 **.css** (Stylesheets): 1 files (1.4%)
- 📄 **.mdx** (Other files): 1 files (1.4%)

### By Category

- **TypeScript**: 15 files (21.7%)
- **Assets**: 15 files (21.7%)
- **React**: 14 files (20.3%)
- **Config**: 10 files (14.5%)
- **Docs**: 6 files (8.7%)
- **Other**: 5 files (7.2%)
- **DevOps**: 2 files (2.9%)
- **JavaScript**: 1 files (1.4%)
- **Styles**: 1 files (1.4%)

### 📁 Largest Directories

- **root**: 69 files
- **frontend**: 51 files
- **frontend/app**: 19 files
- **backend**: 15 files
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
│   │   ├── 📂 (frontend)/
│   │   │   ├── ⚛️ layout.tsx
│   │   │   ├── 📂 learn/
│   │   │   │   ├── 📂 engineering-probability/
│   │   │   │   │   ├── 📂 axioms-of-probability/
│   │   │   │   │   │   ├── 📂 introduction/
│   │   │   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   │   │   └── 📂 sample-space-and-events/
│   │   │   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   └── ⚛️ page.tsx
│   │   │   ├── ⚛️ page.tsx
│   │   │   └── 📂 projects/
│   │   ├── 📂 (payload)/
│   │   │   ├── 📂 admin/
│   │   │   │   ├── 📂 [[...segments]]/
│   │   │   │   │   ├── ⚛️ not-found.tsx
│   │   │   │   │   └── ⚛️ page.tsx
│   │   │   │   ├── 📜 importMap.js
│   │   │   │   └── 🔷 importMap.ts
│   │   │   ├── 🔌 api/
│   │   │   │   └── 📂 [...slug]/
│   │   │   │   │   └── 🔷 route.ts
│   │   │   └── ⚛️ layout.tsx
│   │   ├── 🧩 components/
│   │   │   └── 📂 learning/
│   │   │   │   ├── ⚛️ LearningFooter.tsx
│   │   │   │   ├── ⚛️ LearningHeader.tsx
│   │   │   │   ├── ⚛️ LessonLayout.tsx
│   │   │   │   ├── ⚛️ LessonNavigation.tsx
│   │   │   │   └── ⚛️ LessonSidebar.tsx
│   │   ├── 🖼️ favicon.ico
│   │   └── 🎨 globals.css
│   ├── 📖 CLAUDE.md
│   ├── 📂 collections/
│   │   └── 🔷 Users.ts
│   ├── 📂 content/
│   │   └── 📂 probability/
│   │   │   └── 📂 combinatorial-analysis/
│   │   │   │   └── 📄 basic-counting-principle.mdx
│   ├── 🔵 🔍 **eslint.config.mjs**
│   ├── 📂 migrations/
│   │   ├── ⚙️ 20260908_153939_init.json
│   │   ├── 🔷 20260908_153939_init.ts
│   │   └── 🔷 index.ts
│   ├── 🔷 next-env.d.ts
│   ├── 🟡 ▲ **next.config.ts**
│   ├── 🟡 🔒 **package-lock.json**
│   ├── 🔴 📦 **package.json**
│   ├── 🔷 payload-types.ts
│   ├── 🔷 payload.config.ts
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
- 📜 JavaScript: JavaScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- 🎨 Assets: SVG images
- 🔤 Assets: TrueType fonts

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
