# Endeavour Rockets

This repository is structured as a single Next.js application for deployment on Vercel.

## Project structure

```text
src/
  app/
    api/contact/route.js   Contact form endpoint for Vercel Functions
    contact/page.js        Sponsor contact page
    globals.css            Shared site styles
    layout.js              Root layout and metadata
    page.js                Homepage and section previews
```

## Development

Install Node.js 20 or newer, then run:

```sh
npm install
npm run dev
```

The local site will be available at `http://localhost:3000`.

## Deployment

This app is ready for Vercel:

1. Import the repository into Vercel.
2. Keep the default framework detection as `Next.js`.
3. Deploy.

No custom `vercel.json` is required for the current setup.

## Next steps

- Replace placeholder content with CMS-driven content for staff, projects, sponsors, and posts.
- Connect the contact form endpoint to an email provider or CRM.
- Add Instagram or blog integrations once the content model is chosen.
