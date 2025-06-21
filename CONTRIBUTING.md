# Contributing to agree2disagree.org

Thank you for your interest in contributing to agree2disagree.org! This document provides guidelines and information for contributors.

## Code of Conduct

We are committed to fostering a welcoming and inclusive environment. All contributors must:
- Be respectful and constructive in all interactions
- Focus on what is best for the community and project
- Show empathy towards other community members
- Accept constructive criticism gracefully

## Development Setup

### Prerequisites
- Node.js 20+ 
- pnpm 8+
- PostgreSQL 16+ (for local development)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/joshszep/agree2disagree.org.git
   cd agree2disagree.org
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp apps/web/.env.example apps/web/.env.local
   # Edit .env.local with your local configuration
   ```

4. **Set up the database**
   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

## Project Structure

```
agree2disagree.org/
├── apps/
│   └── web/                 # Next.js web application
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── database/            # Prisma schema and utilities
│   └── config/              # Shared configuration (ESLint, TypeScript)
├── docs/                    # Documentation
└── tools/                   # Build and deployment tools
```

## Code Style Guidelines

### General Principles
- **Consistency**: Follow existing patterns in the codebase
- **Clarity**: Write self-documenting code with clear variable names
- **Simplicity**: Prefer simple solutions over complex ones
- **Performance**: Consider performance implications of your changes

### TypeScript
- Use TypeScript for all new code
- Prefer explicit types over `any`
- Use proper type definitions for props and function parameters
- Leverage TypeScript's strict mode features

### React/Next.js
- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused
- Use proper error boundaries
- Follow Next.js best practices for routing and data fetching

### Formatting
- **Indentation**: 4 spaces (no tabs)
- **Line Length**: 80 characters max
- **Semicolons**: Not required (prettier handles this)
- **Quotes**: Single quotes for strings
- **Trailing Commas**: ES5 style

### File Naming
- **Components**: PascalCase (`VideoChat.tsx`)
- **Hooks**: camelCase starting with `use` (`useWebRTC.ts`)
- **Utilities**: camelCase (`formatTime.ts`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS.ts`)

## Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages
Follow conventional commits format:
```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(auth): add magic link authentication`
- `fix(video): resolve WebRTC connection issues`
- `docs(readme): update installation instructions`

### Pull Request Process

1. **Create a feature branch** from `main`
2. **Make your changes** following the style guidelines
3. **Add tests** for new functionality
4. **Update documentation** if needed
5. **Run the test suite** and ensure all tests pass
6. **Submit a pull request** with a clear description

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or marked as such)
```

## Testing

### Unit Tests
- Write tests for all new functions and components
- Use Vitest for unit testing
- Aim for >80% code coverage
- Test edge cases and error conditions

### E2E Tests
- Use Cypress for end-to-end testing
- Test critical user journeys
- Include tests for WebRTC functionality

### Running Tests
```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Watch mode
pnpm test --watch
```

## Security Guidelines

- **Never commit secrets** (API keys, passwords, etc.)
- **Validate all inputs** on both client and server
- **Use HTTPS** for all external requests
- **Follow OWASP guidelines** for web security
- **Report security issues** privately to the maintainers

## Performance Guidelines

- **Optimize bundle size** - use dynamic imports for large components
- **Lazy load images** - use Next.js Image component
- **Minimize API calls** - use React Query for caching
- **Profile performance** - use React DevTools Profiler

## Accessibility Guidelines

- **Follow WCAG 2.2 AA** standards
- **Use semantic HTML** elements
- **Provide alt text** for images
- **Ensure keyboard navigation** works properly
- **Test with screen readers**

## Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Discord**: [Link to Discord server] for real-time chat

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- Annual contributor appreciation posts

Thank you for contributing to making civil discourse more accessible online! 🤝
