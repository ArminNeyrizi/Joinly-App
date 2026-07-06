# 📁 Joinly-App - Project Structure

*Generated on: 7/6/2026, 10:19:31 PM*

## 📋 Quick Overview

| Metric | Value |
|--------|-------|
| 📄 Total Files | 30 |
| 📁 Total Folders | 71 |
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

- 🔤 **.ttf** (TrueType fonts): 9 files (30.0%)
- 🔷 **.ts** (TypeScript files): 5 files (16.7%)
- ⚙️ **.json** (JSON files): 4 files (13.3%)
- ⚛️ **.tsx** (React TypeScript files): 4 files (13.3%)
- 📖 **.md** (Markdown files): 2 files (6.7%)
- 📄 **.mjs** (Other files): 2 files (6.7%)
- 📄 **.** (Other files): 1 files (3.3%)
- 🚫 **.gitignore** (Git ignore): 1 files (3.3%)
- 🖼️ **.ico** (Icon files): 1 files (3.3%)
- 🎨 **.css** (Stylesheets): 1 files (3.3%)

### By Category

- **Assets**: 10 files (33.3%)
- **TypeScript**: 5 files (16.7%)
- **Config**: 4 files (13.3%)
- **React**: 4 files (13.3%)
- **Other**: 3 files (10.0%)
- **Docs**: 2 files (6.7%)
- **DevOps**: 1 files (3.3%)
- **Styles**: 1 files (3.3%)

### 📁 Largest Directories

- **root**: 30 files
- **src**: 18 files
- **src/assets/fonts**: 9 files
- **src/assets**: 9 files
- **src/app**: 4 files

## 🌳 Directory Structure

```
Joinly-App/
├── 📄 .gitattributes
├── 🟡 🚫 **.gitignore**
├── ⚙️ components.json
├── 🔵 🔍 **eslint.config.mjs**
├── 🔷 next-env.d.ts
├── 🟡 ▲ **next.config.ts**
├── 🟡 🔒 **package-lock.json**
├── 🔴 📦 **package.json**
├── 📄 postcss.config.mjs
├── 📖 project_structure.md
├── 🌐 public/
├── 🔴 📖 **README.md**
├── 📁 src/
│   ├── 🚀 app/
│   │   ├── 📂 [locale]/
│   │   │   ├── ⚛️ layout.tsx
│   │   │   └── ⚛️ page.tsx
│   │   ├── 🖼️ favicon.ico
│   │   └── 🎨 globals.css
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
│   │   └── 🎨 ui/
│   │   │   ├── ⚛️ button.tsx
│   │   │   └── ⚛️ card.tsx
│   ├── ⚙️ config/
│   ├── 🎣 hooks/
│   ├── 📂 i18n/
│   │   ├── 🔷 config.ts
│   │   ├── 📂 dictionaries/
│   │   │   ├── 📂 en/
│   │   │   └── 📂 fa/
│   │   └── 🔷 index.ts
│   ├── 📚 lib/
│   │   └── 🔷 utils.ts
│   ├── 📂 modules/
│   │   ├── 📂 academy/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   │   ├── 📂 auth/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   │   ├── 📂 course/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   │   ├── 📂 dashboard/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   │   ├── 📂 enrollment/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   │   └── 📂 learning-path/
│   │   │   ├── 📂 actions/
│   │   │   ├── 🧩 components/
│   │   │   ├── 📂 constants/
│   │   │   ├── 📂 repository/
│   │   │   ├── 📂 services/
│   │   │   ├── 📂 types/
│   │   │   └── 📂 validation/
│   ├── 📂 services/
│   ├── 📂 types/
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
- ⚛️ React: React TypeScript files
- 🖼️ Assets: Icon files
- 🎨 Styles: Stylesheets
- 🔤 Assets: TrueType fonts

### Importance Levels
- 🔴 Critical: Essential project files
- 🟡 High: Important configuration files
- 🔵 Medium: Helpful but not essential files
