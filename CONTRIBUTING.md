# Contributing to Monorepo Web App & Extension

Thank you for your interest in contributing to this project! This document provides guidelines for contributing.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- pnpm >= 10.4.1
- Git

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/monorepo-webapp-extension.git`
3. Install dependencies: `pnpm install`
4. Set up environment variables (see README.md)
5. Start development: `pnpm dev`

## 📝 Code Style

### TypeScript
- Use TypeScript for all new code
- Follow the existing type definitions
- Add proper interfaces for new components

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types and interfaces

### Styling
- Use CSS classes instead of inline styles
- Follow the existing design system
- Use shadcn/ui components when possible

## 🏗️ Project Structure

### Apps
- `apps/web/` - Next.js web application
- `apps/extension/` - Chrome browser extension

### Packages
- `packages/ui/` - Shared UI components
- `packages/eslint-config/` - Shared ESLint configuration
- `packages/typescript-config/` - Shared TypeScript configuration

## 🔧 Development Workflow

### Making Changes

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test your changes:
   ```bash
   pnpm lint
   pnpm build
   pnpm dev
   ```
4. Commit your changes: `git commit -m 'feat: add your feature'`
5. Push to your fork: `git push origin feature/your-feature`
6. Create a Pull Request

### Commit Message Format

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### Testing

Before submitting a PR:
- [ ] Code runs without errors
- [ ] All linting passes: `pnpm lint`
- [ ] Build succeeds: `pnpm build`
- [ ] Extension loads in browser
- [ ] Web app works correctly

## 🐛 Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Console errors (if any)

## 💡 Feature Requests

When suggesting features:
- Describe the use case
- Explain the benefit
- Provide examples if possible
- Consider implementation complexity

## 📋 Pull Request Guidelines

### Before Submitting

1. **Test thoroughly** - Ensure your changes work in both web app and extension
2. **Update documentation** - Update README if needed
3. **Follow style guide** - Match existing code style
4. **Add tests** - If applicable
5. **Update dependencies** - If adding new packages

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring

## Testing
- [ ] Tested in web app
- [ ] Tested in extension
- [ ] All linting passes
- [ ] Build succeeds

## Screenshots (if applicable)
Add screenshots for UI changes
```

## 🤝 Code Review

### Review Process
1. Automated checks must pass
2. At least one maintainer must approve
3. All comments must be addressed
4. Changes must be tested

### Review Guidelines
- Be constructive and respectful
- Focus on code quality and functionality
- Suggest improvements when possible
- Ask questions if something is unclear

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Questions?

If you have questions about contributing, please:
1. Check the existing issues and PRs
2. Read the README.md thoroughly
3. Open an issue for discussion

Thank you for contributing! 🎉 