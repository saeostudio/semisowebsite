# Artist OS Website

A maximalist, desktop-environment inspired artist website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Draggable Windows:** Interactive UI inspired by classic operating systems.
- **Dynamic Content:** Easy to update content via `data/content.json`.
- **Pages:** Home, About, Discography, Tour.
- **Maximalist Aesthetic:** Brushed metal, bold colors, and retro vibes.

## How to Edit Content

All site content is managed in `data/content.json`.

1.  **General Info & Links:** Edit the `home` section.
2.  **About Me:** Edit the `about` section.
3.  **Albums:** Add new albums to the `discography` array.
    *   Images should be placed in `public/covers/`.
    *   Reference them in `content.json` like `/covers/my-album.jpg`.
4.  **Tour Dates:** Add new dates to the `tour` array.

## Adding Photos

1.  Place your image files in the `public` folder.
2.  For albums, organize them in `public/covers/`.
3.  Update the `cover` path in `data/content.json` to match the file name (e.g., `/covers/new-album.jpg`).

## Customization

- **Styles:** Edit `app/globals.css` to change the desktop background or window colors.
- **Components:** `components/ui/DraggableWindow.tsx` controls the window appearance.

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To build for production:

```bash
npm run build
```
