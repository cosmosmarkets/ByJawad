# Contributing to Cursor React Rules & Commands

Thank you for considering contributing! This guide will help you add or improve rules and commands.

## Structure

```
.cursor/
├── rules/      # Standards that auto-apply (.mdc files)
└── commands/   # Workflows triggered with / (.md files)
```

## Adding a New Rule

### 1. Create `.mdc` file in `.cursor/rules/`

```bash
touch .cursor/rules/your-rule-name.mdc
```

### 2. Add frontmatter and content

```markdown
---
description: What this rule does
globs:
  - "path/**/*.tsx"
  - "**/*.ts"
alwaysApply: false
---

# Your Rule Name

## Standards

Your standards and guidelines here...

## Patterns

Code patterns and templates...

@file ../tsconfig.json
@file ../relevant-config.js
```

### 3. Test in a real project

1. Copy `.cursor/` to a test project
2. Edit files matching your globs
3. Verify Cursor follows your rules

### 4. Submit PR

- Clear description of what the rule does
- Example of before/after code
- Why this improves development

## Adding a New Command

### 1. Create `.md` file in `.cursor/commands/`

```bash
touch .cursor/commands/your-command.md
```

### 2. Follow the template

```markdown
# Command Name

## Overview
Brief description of what this command does

## Steps
1. First step
2. Second step
3. Third step

## Template
```typescript
// Code template that demonstrates the pattern
```

## Checklist
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
```

### 3. Test the command

1. Copy `.cursor/` to a test project
2. Type `/` in Cursor chat
3. Find and run your command
4. Verify it produces expected results

### 4. Submit PR

- Explain when to use this command
- Show example usage
- Include expected output

## Guidelines

### Rules (.mdc files)

**Do:**
- ✅ Focus on one area (e.g., React, Next.js, Testing)
- ✅ Use clear glob patterns
- ✅ Provide code examples
- ✅ Reference config files with @file
- ✅ Keep it actionable

**Don't:**
- ❌ Make rules too broad
- ❌ Include personal preferences (unless widely accepted)
- ❌ Duplicate existing rules
- ❌ Use vague language

### Commands (.md files)

**Do:**
- ✅ Provide step-by-step workflows
- ✅ Include code templates
- ✅ Add checklists
- ✅ Show clear examples
- ✅ Focus on common tasks

**Don't:**
- ❌ Make commands too complex
- ❌ Overlap with existing commands
- ❌ Include too much explanation (keep it concise)

## Testing Checklist

Before submitting:

- [ ] File is in correct directory (`.cursor/rules/` or `.cursor/commands/`)
- [ ] Correct file extension (`.mdc` for rules, `.md` for commands)
- [ ] Frontmatter is valid (for rules)
- [ ] Tested in real project
- [ ] No typos or formatting issues
- [ ] Follows existing patterns
- [ ] Documented in PR description

## Questions?

Open an issue if you're unsure about:
- Where a rule/command should go
- How to structure it
- Whether it's needed

## Code of Conduct

- Be respectful and constructive
- Focus on what helps developers
- Share knowledge and learn together
