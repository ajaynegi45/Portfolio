
# 🤝 Contributing to Ajay Negi Portfolio

Thank you for your interest in contributing! This guide will help you get started with contributing to this project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Performance Guidelines](#performance-guidelines)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Maintain a professional environment

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Git** for version control
- **Code Editor** (VS Code recommended)

### Local Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/portfolio.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Verify setup**
   Open `http://localhost:4321` in your browser

## 🔄 Development Workflow

### 1. Sync with upstream

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make your changes

- Follow the code style guidelines
- Test your changes thoroughly
- Update documentation if needed

### 4. Commit your changes

```bash
git add .
git commit -m "feat: add new feature description"
```

### 5. Push and create PR

```bash
git push origin feature/your-feature-name
# Create a Pull Request on GitHub
```

## 🌿 Branching Strategy

We use a simplified Git flow:

### Branch Types

- **`main`** - Production-ready code
- **`feature/[name]`** - New features
- **`bugfix/[name]`** - Bug fixes  
- **`hotfix/[name]`** - Critical fixes for production
- **`docs/[name]`** - Documentation updates
- **`refactor/[name]`** - Code refactoring
- **`style/[name]`** - UI/CSS updates

### Branch Naming Convention

```
feature/blog-search-functionality
bugfix/mobile-navigation-issue
docs/update-readme
style/improve-button-hover-effects
refactor/optimize-image-loading
```

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process or auxiliary tool changes

### Examples

```bash
feat: add blog search functionality with keyboard shortcuts
fix: resolve mobile navigation overlay issue
docs: update README with deployment instructions
style: improve button hover animations
perf: optimize image loading with lazy loading
refactor: simplify skills component structure
```

## 🔄 Pull Request Process

### Before Submitting

1. **Test your changes**
   ```bash
   npm run build  # Ensure build works
   npm run preview # Test production build
   ```

2. **Check for conflicts**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

3. **Verify performance**
   - Run Lighthouse audit
   - Test on different devices/browsers
   - Ensure no accessibility regressions

### PR Template

When creating a PR, include:

```markdown
## 📝 Description
Brief description of changes

## 🔧 Type of Change
- [ ] Bug fix
- [ ] New feature  
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing
- [ ] Tested locally
- [ ] Tested on mobile
- [ ] Accessibility checked
- [ ] Performance verified

## 📱 Screenshots
Add screenshots for UI changes

## ✅ Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

### Review Process

1. **Automated Checks** - CI/CD pipeline runs
2. **Code Review** - At least one maintainer reviews
3. **Testing** - Changes tested in various environments
4. **Merge** - Squash and merge after approval

## 🐛 Issue Reporting

### Bug Reports

Include:
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots/videos**
- **Browser/device info**
- **Console errors**

### Feature Requests

Include:
- **Problem statement**
- **Proposed solution**
- **Alternative solutions**
- **Use cases**
- **Mockups/wireframes**


## 📊 Performance Targets

Maintain these metrics:

- **Lighthouse Performance**: ≥ 90
- **First Contentful Paint**: ≤ 1.5s
- **Time to Interactive**: ≤ 2.5s
- **Cumulative Layout Shift**: ≤ 0.1

## 🎉 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Invited to join the maintainers (for significant contributions)

---

Thank you for contributing! Your efforts help make this project better for everyone. 🚀
