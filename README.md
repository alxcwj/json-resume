# jsonresume-theme-academic-professional

An academic-oriented JSON Resume theme based on [jsonresume-theme-professional](https://github.com/jsonresume/jsonresume-theme-professional) v1.1.0. This theme reorders sections to follow academic CV conventions while preserving the professional theme's clean typography and styling.

## Features

- **Academic Section Order**: Sections are ordered to match academic CV flow (education, research interests, publications, fellowships, research grants, honors & awards, etc.)
- **Professional Styling**: Maintains the clean, professional look with proper fonts, spacing, bold titles, and italic dates
- **Smart Section Mapping**: Intelligently maps standard JSON Resume fields to academic sections
- **No Schema Changes Required**: Works with standard JSON Resume format in Phase 1
- **Awards Categorization**: Automatically splits awards into Fellowships, Research Grants, and Honors & Awards based on title keywords

## Section Order

The theme renders sections in the following academic CV order:

1. Education
2. Research Interests
3. Publications
4. Fellowships
5. Research Grants
6. Honors & Awards
7. Conference Presentations
8. Research Experience
9. Teaching & Mentorship
10. Academic Service
11. Skills
12. Languages
13. Professional Affiliations

## Installation

### Global Installation

```bash
# Install resume-cli globally
npm install -g resume-cli

# Clone this repository
git clone https://github.com/alxcwj/json-resume.git
cd json-resume

# Install dependencies
npm install
```

### Local Development

```bash
# Build the theme
npm run build

# Serve locally
npx resume serve --theme . --resume resume.json --port 8080

# Export to HTML
npm run export:html

# Export to PDF
npm run export:pdf

# Build and export everything (HTML + PDF)
npm run export
```

The exported files will be:
- `resume.html` - HTML version of your resume
- `Alex Chow - Resume.pdf` - PDF version of your resume

## Using This Theme

### Option 1: Install from GitHub

In your JSON resume repository:

```bash
npm install git+https://github.com/alxcwj/json-resume.git
```

Then in your `resume.json`:

```json
{
  "meta": {
    "theme": "academic-professional"
  },
  ...
}
```

### Option 2: Use Locally

Clone this repository and use it as your theme directory:

```bash
resume serve --theme /path/to/json-resume --resume /path/to/your/resume.json
```

## Section Mapping Rules

This theme uses the standard JSON Resume schema but maps sections intelligently for academic CVs:

### Research Interests
- **Source**: `resume.interests[]`
- **Mapping**: Finds the interest with `name` matching "Research Interests" (case-insensitive)
- **Renders**: Keywords as comma-separated list

### Conference Presentations
- **Source**: `resume.projects[]`
- **Mapping**: Finds project with `name` matching "Conference Presentations" (case-insensitive)
- **Renders**: Highlights as bullet list

### Professional Affiliations
- **Source**: `resume.projects[]`
- **Mapping**: Finds project with `name` matching "Professional Affiliations" (case-insensitive)
- **Renders**: Highlights as bullet list

### Research Experience
- **Source**: `resume.work[]`
- **Filter**: Work entries where `position` includes "Research"
- **Renders**: Standard work experience format

### Teaching & Mentorship
- **Source**: `resume.work[]`
- **Filter**: Work entries where `position` includes "Teaching" or highlights include TA/mentor/supervisor keywords
- **Renders**: Standard work experience format

### Academic Service
- **Source**: `resume.work[]`
- **Filter**: Work entries where `position` includes "Service" or equals "Academic Service"
- **Renders**: Standard work experience format

### Fellowships
- **Source**: `resume.awards[]`
- **Filter**: Awards where `title` includes "fellowship" or "scholars program" (case-insensitive)
- **Renders**: Award title, awarder, and date

### Research Grants
- **Source**: `resume.awards[]`
- **Filter**: Awards where `title` includes "research opportunity", "research grant", or "grant" (excluding fellowships)
- **Renders**: Award title, awarder, and date

### Honors & Awards
- **Source**: `resume.awards[]`
- **Filter**: Awards that don't match fellowship or grant criteria
- **Renders**: Award title, awarder, and date

## Building the Theme

The theme uses esbuild to transpile React/JSX components:

```bash
npm run build
```

This compiles `src/index.js` and all components into `index.js`.


## License

MIT

## Credits

Based on [jsonresume-theme-professional](https://github.com/jsonresume/jsonresume-theme-professional) v1.1.0 by the JSON Resume community.

Modified for academic CVs by Alex Chow.
