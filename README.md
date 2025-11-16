# Department of Education - Job Board

A static, accessible job board website for the U.S. Department of Education. Built with Astro and designed for simplicity, accessibility, and ease of maintenance.

## Overview

This is a minimal, front-end-only static website for posting job opportunities at the Department of Education. The site is built with accessibility in mind, meeting WCAG 2.1+ AA standards and Section 508 compliance requirements for .gov websites.

## Features

- **Accessible by design**: Built on the [Accessible Astro Starter](https://github.com/markteekman/accessible-astro-starter) template
- **WCAG 2.2 AA compliant**: Keyboard navigation, semantic HTML, proper ARIA labels, and screen reader support
- **Static site**: No backend required - all content managed via markdown files
- **Easy to update**: Non-technical users can add or edit job postings by editing markdown files
- **Minimal styling**: Clean, black and white design focused on content
- **Fast and lightweight**: Optimized for performance with Astro's static site generation

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and styles
│   ├── components/        # Reusable Astro components
│   ├── content/
│   │   └── jobs/          # Job posting markdown files (EDIT HERE)
│   ├── layouts/           # Page layouts
│   ├── pages/
│   │   ├── index.astro    # Home page with job listings
│   │   └── jobs/
│   │       └── [id].astro # Individual job detail page
│   ├── content.config.ts  # Content collection configuration
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd fsa-job-board
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:4321`

## Managing Job Postings

All job postings are stored as markdown files in `src/content/jobs/`. Each file represents one job posting.

### Adding a New Job

1. Create a new `.md` file in `src/content/jobs/` (e.g., `software-engineer.md`)
2. Add frontmatter with job details:

```markdown
---
title: "Job Title Here"
department: "Department Name"
location: "Remote / Washington, DC / Hybrid"
salary: "GS-XX-XX or salary range"
postedDate: "2025-01-15"
deadline: "2025-02-28"
description: "Brief one-sentence description of the role"
---

## Full job posting content here...

Write the complete job description using markdown formatting.
```

3. Save the file - the site will automatically include it on the jobs page

### Editing an Existing Job

1. Navigate to `src/content/jobs/`
2. Find the job posting file you want to edit
3. Open it in any text editor
4. Make your changes
5. Save the file

### Removing a Job

1. Navigate to `src/content/jobs/`
2. Delete the markdown file for that job posting

## Building for Production

To create a production build:

```bash
npm run build
```

This creates a `dist/` folder with static files ready to deploy.

## Deployment

### GitHub Pages

1. Build the site: `npm run build`
2. Deploy the `dist/` folder to GitHub Pages

### cloud.gov

1. Build the site: `npm run build`
2. Follow cloud.gov static site deployment instructions
3. Point to the `dist/` folder

## Accessibility

This site is built with accessibility as a core requirement:

- ✅ WCAG 2.2 Level AA compliant
- ✅ Section 508 compliant
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Skip links for navigation
- ✅ Focus indicators
- ✅ Sufficient color contrast

## Technology Stack

- **Astro 5.15+**: Static site generator
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Utility-first styling
- **Markdown**: Content management

## Support

For issues or questions, contact the web team or create an issue in this repository.

## License

This project is in the public domain as a work of the U.S. Government.
