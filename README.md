# Monorepo Web App & Extension

A full-stack monorepo featuring a Next.js web application with Supabase authentication and database integration, plus a browser extension built with React and Vite.

## 🚀 Features

- **Web App**: Next.js application with Supabase auth and database
- **Browser Extension**: Chrome extension with same auth and database access
- **Monorepo**: Shared UI components and configuration
- **Authentication**: Supabase authentication for both web and extension
- **Database**: Real-time database access across both platforms
- **Modern UI**: Clean, professional interface with shadcn/ui components

## 📁 Project Structure

```
monorepo-webapp-extension/
├── apps/
│   ├── web/                 # Next.js web application
│   └── extension/           # Chrome browser extension
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── eslint-config/       # Shared ESLint configuration
│   └── typescript-config/   # Shared TypeScript configuration
└── supabase/               # Supabase configuration
```

## 🛠️ Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Extension**: Vite, React, TypeScript
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **UI**: shadcn/ui components
- **Build**: Turbo, pnpm workspaces

## 🚀 Quick Start

### Prerequisites

- Node.js >= 20
- pnpm >= 10.4.1
- Supabase account and project

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd monorepo-webapp-extension
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a table called `simple_table` with the following columns:
   - `id` (int, primary key, auto-increment)
   - `created_at` (timestamp with timezone, default: now())
   - `name` (text)
   - `user_id` (uuid, nullable)

### 4. Environment Variables

Create `.env.local` files in both apps:

**For Web App** (`apps/web/.env.local`):
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**For Extension** (`apps/extension/.env.local`):
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Run Development Servers

```bash
# Run both web app and extension
pnpm dev

# Or run individually
pnpm dev --filter=web
pnpm dev --filter=extension
```

### 6. Load the Extension

1. Build the extension: `pnpm build --filter=extension`
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select `apps/extension/dist`

## 📱 Usage

### Web App
- Visit `http://localhost:3000`
- Login with your Supabase credentials
- View and interact with database data

### Browser Extension
- Click the extension icon in your browser
- Login with the same Supabase credentials
- Access the same database data as the web app

## 🏗️ Development

### Adding UI Components

```bash
# Add a component to the web app
pnpm dlx shadcn@latest add button -c apps/web

# Add a component to the extension
pnpm dlx shadcn@latest add button -c apps/extension
```

### Building

```bash
# Build all projects
pnpm build

# Build specific project
pnpm build --filter=web
pnpm build --filter=extension
```

### Linting

```bash
# Lint all projects
pnpm lint

# Lint specific project
pnpm lint --filter=web
pnpm lint --filter=extension
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Turbo](https://turbo.build/) for the monorepo build system
