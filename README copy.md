# Deepthi Travells

A Next.js travel website with page-by-page navigation and a shared header.

## Pages

- `/` Hero landing page
- `/services` Service overview
- `/fleet` Vehicle and comfort page
- `/contact` Contact and enquiry page

## What you get

- App Router + TypeScript
- Tailwind CSS with shadcn-style tokens in `src/app/globals.css`
- Animated hero component in `src/components/ui/shuffle-grid.tsx`
- Shared sticky header in `src/components/site-header.tsx`
- Static export configured in `next.config.ts`

## Key paths

- Components: `src/components/ui`
- Styles: `src/app/globals.css`
- Shared utilities: `src/lib/utils.ts`
- Custom hero images: `public/hero/hero-1.jpg` through `public/hero/hero-6.jpg`
- Fleet vehicle images: `public/fleet/vehicle-1/hero.jpg` through `public/fleet/vehicle-6/interior.jpg`

The `src/components/ui` folder matters because it matches the shadcn component convention and keeps UI primitives easy to import with the `@/components/ui/...` alias.

Add your own hero images into `public/hero/` using those filenames to replace the placeholder collage without changing the component code.

For the fleet page, each vehicle can contain `hero.jpg`, `side.jpg`, and `interior.jpg`, and the page uses an expand/collapse panel so each vehicle can show its full image set and details.

## Install

```bash
npm install
```

The hero uses `framer-motion`, `clsx`, and `tailwind-merge`, which are already included in `package.json`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Next steps

- Replace the placeholder images in `src/components/ui/shuffle-grid.tsx` if you want local assets instead of Unsplash URLs
- Add more shadcn components under `src/components/ui` as the site grows
- Extend the route pages with booking forms, package details, or testimonials
