# Usage Guide

Quick reference for using Cursor rules and commands effectively.

## 🎯 Rules vs Commands

### Rules (Automatic)
- **Location**: `.cursor/rules/*.mdc`
- **Format**: Markdown with frontmatter
- **Trigger**: Automatically based on file patterns
- **Purpose**: Set coding standards and patterns

### Commands (Manual)
- **Location**: `.cursor/commands/*.md`
- **Format**: Plain Markdown
- **Trigger**: Type `/` in Cursor chat
- **Purpose**: Execute specific workflows

---

## 📖 Commands Reference

### Component Creation

```bash
/create-component Button
# Creates: Button.tsx with TypeScript, variants, Tailwind CSS

/create-form ContactForm
# Creates: Form with React Hook Form + Zod validation

/create-responsive-layout DashboardLayout
# Creates: Mobile-first responsive layout
```

### Next.js Workflows

```bash
/create-server-component UserProfilePage
# Creates: Server Component with metadata, data fetching

/create-server-action updateProfile
# Creates: Server Action with Zod validation, revalidation

/create-api-client
# Creates: Type-safe API client with error handling
```

### State Management

```bash
/setup-zustand-store CartStore
# Creates: Zustand store with TypeScript, persist middleware

/setup-env-variables
# Creates: Environment variable setup with validation
```

### Quality & Testing

```bash
/add-tests Button
# Creates: Comprehensive RTL tests for component

/refactor-component LargeComponent
# Improves: Code quality, extracts logic, adds types

/review-code
# Runs: Comprehensive code review checklist
```

### Optimization

```bash
/optimize-performance
# Adds: Memoization, code splitting, lazy loading

/audit-accessibility
# Checks: WCAG 2.1 AA compliance, ARIA, keyboard nav
```

### Production

```bash
/prepare-production
# Runs: Pre-deployment checklist, security, performance

/setup-dark-mode
# Adds: Dark mode with Tailwind, theme provider
```

---

## 🎨 Rules Reference

### Always Active Rules

These apply to all TypeScript/React files:

- **react-typescript.mdc** - React + TS standards
- **file-organization.mdc** - File structure & naming
- **security-patterns.mdc** - Security best practices

### Context-Specific Rules

**When editing components:**
- **component-patterns.mdc** - Component templates

**When editing Next.js app directory:**
- **nextjs-app-router.mdc** - Server Components
- **nextjs-patterns.mdc** - Next.js templates
- **seo-patterns.mdc** - SEO meta tags

**When editing tests:**
- **testing.mdc** - Testing standards
- **testing-patterns.mdc** - Test templates

**When editing forms:**
- **form-patterns.mdc** - Form patterns

**On request:**
- **performance-optimization.mdc** - Performance patterns
- **responsive-design.mdc** - Responsive patterns
- **animation-patterns.mdc** - Animation patterns

---

## 💡 Workflow Examples

### Example 1: Create New Feature

**Task:** Build a user authentication feature

```bash
# 1. Server Action
/create-server-action login with email and password validation

# 2. Form Component
/create-form LoginForm with email, password fields

# 3. State Management
/setup-zustand-store AuthStore with user, token, login, logout

# 4. Tests
/add-tests LoginForm
/add-tests AuthStore

# 5. Review
/review-code
```

**Time:** ~45 min (vs 3-4 hours manually)

### Example 2: Optimize Existing Code

**Task:** Improve performance of slow dashboard

```bash
# 1. Performance audit
/optimize-performance

# 2. Refactor components
/refactor-component DashboardStats
/refactor-component DataTable

# 3. Accessibility check
/audit-accessibility

# 4. Final review
/review-code
```

**Time:** ~30 min (vs 2-3 hours manually)

### Example 3: Production Deployment

**Task:** Prepare app for launch

```bash
# 1. Environment setup
/setup-env-variables

# 2. Production checklist
/prepare-production

# 3. Security review
# (security-patterns.mdc auto-applies)

# 4. Final accessibility audit
/audit-accessibility

# 5. Code review
/review-code
```

**Time:** ~1 hour (vs 4-6 hours manually)

---

## 🎓 Tips for Maximum Productivity

### 1. Learn the Commands

Run each command once to understand what it generates:
```bash
/create-component TestButton
/add-tests TestButton
/refactor-component TestButton
```

Then delete the test files.

### 2. Customize Rules

Edit `.cursor/rules/*.mdc` to match your:
- Tech stack
- Code style
- Naming conventions
- Architecture patterns

### 3. Chain Commands

Complete features by chaining:
```bash
/create-component → /add-tests → /refactor-component
```

### 4. Use with Cmd+K

Combine commands with quick edits:
1. Generate with `/create-component Button`
2. Select code, press `Cmd+K`
3. Refine: "Add ripple effect animation"

### 5. Reference Rules

When asking Cursor:
```
"Following our React rules, create a modal component"
"Based on our security patterns, validate this form"
```

---

## 🔧 Keyboard Shortcuts

Essential Cursor shortcuts:

| Shortcut | Action | When to Use |
|----------|--------|-------------|
| `Cmd+L` | Open Chat | Run commands with `/` |
| `Cmd+K` | Quick Edit | Modify selected code |
| `Cmd+I` | Composer | Multi-file features |
| `Cmd+Shift+P` | Command Palette | Reload window, etc. |

---

## 📋 Daily Workflow

### Morning
1. Pull latest `.cursor/` changes
2. Reload Cursor window
3. Review any rule updates

### During Development
1. Use `/` commands for new code
2. Let rules guide AI automatically
3. Press `Cmd+K` for quick refinements
4. Run `/review-code` before commits

### Before Commit
1. `/add-tests` for untested code
2. `/review-code` for final check
3. Fix any issues identified
4. Commit with confidence

---

## 🎯 Success Metrics

After 1 week, you should see:
- [ ] 50-75% faster component creation
- [ ] More consistent code across project
- [ ] Higher test coverage
- [ ] Fewer accessibility issues
- [ ] Better TypeScript type safety
- [ ] Faster code reviews

---

## 🐛 Common Issues

### "Command not found"
- Reload window: `Cmd+Shift+P` → Reload Window
- Check file is in `.cursor/commands/`
- Verify file is `.md` (not `.mdc`)

### "Rules not applying"
- Reload window
- Check glob patterns in frontmatter
- Verify `alwaysApply` setting

### "Wrong code generated"
- Be more specific in prompts
- Reference rules explicitly
- Update `.cursor/rules/*.mdc` with your patterns

---

For more help, see [Cursor Documentation](https://cursor.com/docs) or open an issue.
