# ResourceHub 📚
<img width="1470" alt="Screenshot 2025-03-12 at 10 19 02 PM" src="https://github.com/user-attachments/assets/8913cb5d-8816-465c-bfc8-29b6b352d4e9" />

> A community-driven platform for collecting and sharing valuable resources across various domains.

## 🎯 About The Project

ResourceHub is an open-source initiative that aims to create a centralized repository of valuable resources for learners, developers, and enthusiasts. Whether it's programming tutorials, educational content, tools, or reference materials, ResourceHub makes it easy to discover and share knowledge.

## ✨ Features

- 📝 Easy resource submission
- 🔍 Search and filter capabilities
- 🏷️ Category-based organization
- 👥 Community-driven content
- ⭐ Resource rating system
- 📌 Bookmark favorite resources
- 🔗 Link verification system

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/vmmuthu31/ResourceHub.git
```

2. Install dependencies

```bash
cd ResourceHub
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the development server

```bash
npm run dev
```

The application should now be running at `http://localhost:3000`

## 🏗️ Project Structure

```
ResourceHub/
├─ README.md
├─ bun.lockb
├─ components.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ og-image.png
│  └─ placeholder.svg
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ components
│  │  ├─ AddResourceDialog.tsx
│  │  ├─ ResourceCard.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.tsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.tsx
│  │     ├─ toaster.tsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     ├─ tooltip.tsx
│  │     └─ use-toast.ts
│  ├─ hooks
│  │  ├─ use-mobile.tsx
│  │  └─ use-toast.ts
│  ├─ index.css
│  ├─ lib
│  │  └─ utils.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Index.tsx
│  │  └─ NotFound.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts


```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
