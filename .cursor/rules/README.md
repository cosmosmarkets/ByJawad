# Cursor Rules & Commands for React + Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/Farzannajipour/cursor-react-rules?style=social)](https://github.com/Farzannajipour/cursor-react-rules/stargazers)
[![Cursor](https://img.shields.io/badge/Cursor-AI-purple)](https://cursor.sh)
[![React](https://img.shields.io/badge/React-18+-61dafb)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black)](https://nextjs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Production-ready Cursor AI rules and commands for experienced React and Next.js developers. **Improve development speed by 3-5x** and maintain consistent code quality across your team.

## ⭐ Star this repo if it helps you!

> **15 Commands** + **12 Auto-Applied Rules** = **Supercharged React Development**

## 💝 Support This Project

If these rules save you hours of development time:
- ⭐ **Star this repository** - Help others discover it
- 🐦 **Share on social media** - Spread the word
- 🤝 **Contribute** - Add your own rules and commands
- ☕ **Sponsor** - Support continued development (optional)

Your support helps maintain and improve these rules for the entire React community!

## 🚀 Quick Start

### 1. Copy to Your Project

```bash
# Clone this repo
git clone https://github.com/Farzannajipour/cursor-react-rules.git

# Copy .cursor directory to your project
cp -r cursor-react-rules/.cursor your-project/

# Or download just the .cursor folder from GitHub
# Then drag it into your project root
```

### 2. Reload Cursor

Press `Cmd+Shift+P` → "Reload Window"

### 3. Start Using

**Rules apply automatically** based on file types.  
**Commands trigger with `/`** in Cursor chat.

Try: `/create-component Button`

---

## 📦 What's Included

### 🎯 Commands (15 total)

Trigger manually with `/` prefix in Cursor chat:

#### Component & UI
- **`/create-component`** - Create React component with TypeScript & Tailwind
- **`/create-form`** - Create form with React Hook Form + Zod validation
- **`/create-responsive-layout`** - Build mobile-first responsive layouts

#### Next.js Specific
- **`/create-server-component`** - Create Next.js Server Component with metadata
- **`/create-server-action`** - Create Server Action with validation
- **`/create-api-client`** - Setup typed API client with error handling

#### State & Data
- **`/setup-zustand-store`** - Create Zustand store with TypeScript
- **`/setup-env-variables`** - Configure and validate environment variables

#### Quality & Testing
- **`/add-tests`** - Generate comprehensive RTL tests
- **`/refactor-component`** - Improve code quality and performance
- **`/review-code`** - Comprehensive code review checklist

#### Optimization
- **`/optimize-performance`** - Add memoization, code splitting, lazy loading
- **`/audit-accessibility`** - WCAG 2.1 AA accessibility audit

#### Production
- **`/prepare-production`** - Pre-deployment checklist and optimizations
- **`/setup-dark-mode`** - Implement dark mode with Tailwind

---

### 📜 Rules (12 total)

Automatically applied based on file patterns:

#### Core Standards
| Rule | Applies To | Purpose |
|------|------------|---------|
| `react-typescript.mdc` | `**/*.tsx`, `**/*.ts` | React & TypeScript standards |
| `nextjs-app-router.mdc` | `app/**/*` | Next.js 14+ App Router best practices |
| `file-organization.mdc` | `**/*` | Project structure & naming conventions |
| `testing.mdc` | `**/*.test.tsx` | Testing standards with React Testing Library |

#### Patterns & Templates
| Rule | Applies To | Purpose |
|------|------------|---------|
| `component-patterns.mdc` | `components/**/*.tsx` | Reusable component templates (Button, Form, Modal) |
| `nextjs-patterns.mdc` | `app/**/*.tsx` | Next.js workflow templates (Server Components, Actions, API) |
| `form-patterns.mdc` | `**/*Form.tsx` | Form patterns with React Hook Form + Zod |
| `testing-patterns.mdc` | `**/*.test.tsx` | Test code templates and patterns |

#### Best Practices
| Rule | Applies To | Purpose |
|------|------------|---------|
| `performance-optimization.mdc` | `**/*.tsx` | Performance patterns (memoization, code splitting) |
| `security-patterns.mdc` | `**/*` | Security best practices (XSS, CSRF, validation) |
| `responsive-design.mdc` | `**/*.tsx` | Mobile-first responsive patterns |
| `seo-patterns.mdc` | `app/**/page.tsx` | SEO meta tags and structured data |
| `animation-patterns.mdc` | `**/*.tsx` | Animation with Framer Motion & Tailwind |

---

## 💡 Usage Examples

### Example 1: Create a Complete Feature

```
/create-component UserProfile with avatar, bio, and stats
/create-form UserProfileEdit to update name and bio
/add-tests UserProfile
```

**Result:**
- `UserProfile.tsx` - Component with TypeScript types & Tailwind
- `UserProfileEdit.tsx` - Form with React Hook Form + Zod
- `UserProfile.test.tsx` - Comprehensive tests

### Example 2: Next.js Server Component

```
/create-server-component ProductPage that fetches product by slug
```

**Result:**
- Async Server Component
- `generateMetadata()` for SEO
- Loading and error handling
- Proper TypeScript types
- Suspense boundaries

### Example 3: Performance Optimization

```
/optimize-performance
```

**Result:**
- Identifies unnecessary re-renders
- Adds React.memo, useMemo, useCallback
- Implements code splitting
- Virtualizes long lists

### Example 4: Complete Auth Flow

```
/setup-zustand-store AuthStore with login, logout, user state
/create-form LoginForm with email and password
/create-server-action login with validation
/add-tests LoginForm
```

---

## 🎯 How Rules Work

### Automatic Application

Rules are **context-aware** and apply based on file patterns:

**Editing `components/ui/Button.tsx`:**
- ✅ `react-typescript.mdc` applies
- ✅ `component-patterns.mdc` applies
- ✅ `performance-optimization.mdc` applies

**Editing `app/users/page.tsx`:**
- ✅ `nextjs-app-router.mdc` applies
- ✅ `nextjs-patterns.mdc` applies
- ✅ `seo-patterns.mdc` applies

**Editing `components/LoginForm.test.tsx`:**
- ✅ `testing.mdc` applies
- ✅ `testing-patterns.mdc` applies

### Example: Creating a Component

When you ask Cursor to create a component, it automatically:
- Uses TypeScript with proper interfaces
- Applies Tailwind CSS classes
- Adds accessibility attributes
- Includes loading/error states
- Follows naming conventions
- Uses named exports

**All because of the rules!**

---

## 🔧 Customization

### Modify Rules for Your Stack

**Not using Zustand?** Edit `react-typescript.mdc`:
```mdc
## State Management
- Local: useState
- Global: Redux Toolkit  # Changed from Zustand
- Forms: React Hook Form + Zod
```

**Using Pages Router instead of App Router?**
Delete `nextjs-app-router.mdc` and adjust patterns.

**Custom naming conventions?**
Edit `file-organization.mdc`:
```mdc
### Files
- Components: kebab-case (user-profile.tsx)  # Changed from PascalCase
```

### Add Your Own Command

Create `.cursor/commands/your-command.md`:

```markdown
# Your Command

## Overview
What this command does

## Steps
1. Step one
2. Step two

## Template
```typescript
// Your code template
```

## Checklist
- [ ] Task 1
- [ ] Task 2
```

Reload Cursor, then use with `/your-command`

---

## 📚 Tech Stack

These rules assume:

**Core (Required):**
- React 18+
- TypeScript 5+
- Tailwind CSS

**Next.js (Optional):**
- Next.js 14+ with App Router
- Server Components
- Server Actions

**Forms (Recommended):**
- React Hook Form
- Zod validation

**State (Recommended):**
- Zustand (simple global state)
- React Query (server state)

**Testing (Recommended):**
- Jest
- React Testing Library

**Not using something?** Simply edit/remove the relevant rules.

---

## 🎓 Expected Results

### Speed Improvements

| Task | Without Cursor | With Rules & Commands | Time Saved |
|------|---------------|----------------------|------------|
| Create component | 20-30 min | 3-5 min | 75-85% |
| Add comprehensive tests | 45-60 min | 10-15 min | 75% |
| Create form with validation | 30-45 min | 5-10 min | 80% |
| Setup state management | 30-40 min | 5 min | 85% |
| Refactor for performance | 60-90 min | 15-30 min | 70% |
| Add accessibility | 30-45 min | 10 min | 75% |

### Quality Improvements

- ✅ **Consistent code style** across entire codebase
- ✅ **TypeScript strict mode** compliance
- ✅ **Accessibility built-in** (ARIA, semantic HTML)
- ✅ **Security by default** (validation, sanitization)
- ✅ **Performance optimized** (memoization, code splitting)
- ✅ **SEO-friendly** (meta tags, structured data)
- ✅ **Test coverage** easier to maintain

---

## 🤝 Team Collaboration

### For Individual Developers

1. Copy `.cursor/` to your project
2. Customize for your preferences
3. Start building faster

### For Teams

#### Setup

```bash
# Commit to your repository
git add .cursor/
git commit -m "Add Cursor rules and commands"
git push
```

#### Team Benefits

**Everyone gets:**
- Same code patterns
- Same quality standards
- Same workflows
- Faster onboarding (3-5 days vs 2-4 weeks)

**How to update:**
```bash
# Edit rules/commands
git add .cursor/
git commit -m "Update component patterns"
git push

# Team members pull
git pull
# Reload Cursor: Cmd+Shift+P → Reload Window
```

### Onboarding New Developers

**Before (without rules):** 2-4 weeks to productivity  
**After (with rules):** 3-5 days to productivity

New developers:
1. Clone repo (rules included)
2. Open in Cursor
3. Use `/` commands to see workflows
4. Generate code following team patterns automatically

---

## 🐛 Troubleshooting

### Rules Not Working?

1. Check `.cursor/rules/*.mdc` exists
2. Reload window: `Cmd+Shift+P` → "Reload Window"
3. Verify frontmatter syntax is correct
4. Check glob patterns match your files

### Commands Not Showing?

1. Check `.cursor/commands/*.md` exists
2. Reload window
3. Type `/` in Cursor chat (not inline edit)
4. Ensure files are `.md` format (not `.mdc`)

### AI Not Following Patterns?

1. Be more specific: "Following our React rules, create..."
2. Check `alwaysApply: true` in rule frontmatter
3. Try regenerating with more context

### Wrong Code Style?

1. Update `.cursor/rules/*.mdc` with your patterns
2. Reload Cursor
3. Regenerate code

---

## 📖 Documentation

### Official Cursor Docs
- [Cursor Rules Documentation](https://cursor.com/docs/context/rules)
- [Cursor Commands Documentation](https://cursor.com/docs/context/commands)

### Framework Docs
- [React](https://react.dev)
- [Next.js](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 🎯 Complete Command Reference

### Component Creation
```
/create-component {Name}
/create-form {Name}
/create-responsive-layout
```

### Next.js Workflows
```
/create-server-component {Name}
/create-server-action {actionName}
/create-api-client
```

### State & Data
```
/setup-zustand-store {StoreName}
/setup-env-variables
```

### Quality & Optimization
```
/add-tests {ComponentName}
/refactor-component {ComponentName}
/optimize-performance
/audit-accessibility
/review-code
```

### Production & Deployment
```
/prepare-production
/setup-dark-mode
```

---

## 📊 Rules Summary

**12 rules** that automatically ensure:
- TypeScript strict mode compliance
- Proper React patterns (hooks, functional components)
- Next.js Server Components optimization
- Accessibility (ARIA, semantic HTML)
- Security (validation, sanitization)
- Performance (memoization, code splitting)
- SEO (meta tags, structured data)
- Responsive design (mobile-first)
- Consistent file organization
- Test quality with RTL

---

## 🔍 Example: Full Workflow

**Task:** Build a product listing page with filters

```bash
# 1. Create the page
/create-server-component ProductListPage that fetches products

# 2. Create filter component
/create-component ProductFilters with category and price range filters

# 3. Create state management
/setup-zustand-store ProductFilterStore with filter state

# 4. Create product card
/create-component ProductCard with image, title, price, add to cart

# 5. Add tests
/add-tests ProductCard
/add-tests ProductFilters

# 6. Optimize
/optimize-performance

# 7. Accessibility check
/audit-accessibility

# 8. Pre-flight check
/review-code
```

**Time:** ~45-60 minutes (vs 4-6 hours manually)

---

## 🤝 Contributing

Have a useful rule or command? [See CONTRIBUTING.md](CONTRIBUTING.md)

## 📝 License

MIT License - Free to use in your projects and teams.

---

## Quick Reference Card

### Essential Shortcuts
- `Cmd+K` - Quick edit
- `Cmd+L` - Chat (use `/` here for commands)
- `Cmd+I` - Composer (multi-file)

### Most Used Commands
```
/create-component
/add-tests
/refactor-component
/review-code
/create-server-component
/optimize-performance
```

### File Structure
```
your-project/
├── .cursor/
│   ├── commands/    # 15 workflow commands
│   └── rules/       # 12 auto-applied standards
├── app/             # Next.js (if using)
├── components/
│   ├── ui/
│   └── features/
└── lib/
```

---

**Ready to 3-5x your development speed?** Copy `.cursor/` to your project and start using `/` commands!

---

## 📋 Compatibility

| Tool/Framework | Minimum Version | Recommended |
|----------------|----------------|-------------|
| **Cursor** | 0.30+ | Latest |
| **React** | 18.0+ | 18.2+ |
| **Next.js** | 13.4+ (App Router) | 14.0+ |
| **TypeScript** | 5.0+ | 5.3+ |
| **Tailwind CSS** | 3.0+ | 3.4+ |
| **Node.js** | 18.0+ | 20.0+ |

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- ⭐ Star this repository
- 🐛 Report bugs
- 💡 Suggest new commands/rules
- 📖 Improve documentation
- 🔧 Submit pull requests

## 📜 License

MIT License - see [LICENSE](LICENSE) for details.

Free to use in personal and commercial projects.

## 🙏 Acknowledgments

- Cursor team for the amazing AI editor
- React and Next.js communities
- All contributors

---

**Made with ❤️ for the React community**

If this saves you time, consider [⭐ starring the repo](https://github.com/Farzannajipour/cursor-react-rules) and sharing with others!
