# Site: uilookbook_com

UI Lookbook — design style showcase. Template: `uilookbook`.

## Style Detail Pages

Pages are organized into categories (e.g. `retro-and-nostalgia/`, `cultural-and-regional/`, `flat-and-material/`).

### Page structure
1. `o_breadcrumbs` — navigation breadcrumb
2. `o_hero` — hero with image, eyebrow, title, description, buttons
3. `o_color_palette` — primary palette + alt palettes
4. `o_typography` — fonts + alternatives
5. `o_design_principles` — 6 principles with icons
6. `o_use_cases` — ideal use cases list
7. `o_history` — 3 paragraphs of history

## Card Preview Images

Each style has a card preview image at `assets/styles/{category}/{slug}.jpg` (800x600 JPEG).

Generate with `make_design_image.js` (Puppeteer + Sharp):
```bash
cd site/uilookbook_com
node make_design_image.js "http://localhost/{category}/{slug}/" "assets/styles/{category}/{slug}.jpg"
```

The script:
1. Opens the page in headless Chrome (800x600 @2x, site cookie set)
2. Strips header, footer, and all sections except `o_hero`
3. Removes the image column (second `.col-6`), makes text column full-width
4. Sets `min-height: 600px` on the hero
5. Waits 1s for fonts/animations to settle
6. Screenshots and resizes to 800x600 via Sharp (Lanczos3, JPEG quality 90)

Requires `puppeteer` and `sharp` (`npm install` in project root).

## Gallery Example Screenshots

Standalone HTML gallery pages (e.g. AI-generated examples) have their own screenshot script.

Generate with `make_example_image.js` (Puppeteer + Sharp):
```bash
cd site/uilookbook_com
node make_example_image.js "assets/gallery/retro-and-nostalgia/90s-web-revival/mygames90s.html" "assets/gallery/retro-and-nostalgia/90s-web-revival/mygames90s.jpg"
```

The script:
1. Opens the file in headless Chrome (1200x900 @2x) — accepts local paths or URLs
2. Waits 1.5s for fonts/animations to settle
3. Screenshots and resizes to 800x600 via Sharp (Lanczos3, JPEG quality 90)
4. No DOM manipulation — simple full-page screenshot

**Two scripts:**
- `make_design_image.js` — for site pages (strips to o_hero only)
- `make_example_image.js` — for standalone HTML files (simple screenshot)
