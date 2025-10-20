Next.js
---

## What is?
- React 기반의 Framework.
- Routing, SEO, SSR, SSG, API

## how to use
- need to make a folder in `app` folder to make a new page

## ..
- NextJS relies on reserved, special filenames
- But the filenames only matter inside the 'app' folder
- if regular `<a href>` is used, its SPA. --> use `<Link>` from `'next/Link'`
- `page.js` file defines the content of the page
- `layout.js` defines the shell of the one or more page
- `metadata` is reserved name to contain a title, description, ...
- `globals.css`, `icon.png` 
- 

## Reserved file names
Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

### list of reserved filenames in NextJS:
- `page.js` => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)
- `layout.js` => Create a new layout that wraps sibling and nested pages
- `not-found.js` => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
- `error.js` => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
- `loading.js` => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
- `route.js` => Allows you to create an API route  (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)
- 

official docs: <a href=https://nextjs.org/docs/app/api-reference/file-conventions>Link </a>

## ...
- dynamic route
- [slug] in blog, 'slug' is an identifier