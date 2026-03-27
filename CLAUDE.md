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

### Theme toggle (header)
4 modes: Light (sun), Dark (moon), Auto (monitor), Themed/Palette (palette). Stored in `localStorage.theme` as `light` / `dark` / `palette` / removed for auto. Adds class to `<html>`.

### Google Fonts in `head_codes`
Each page must load **all** Google Fonts referenced in its `o_typography` sections (heading + text fonts) via separate `<link>` tags in `settings.head_codes`. Rules:
- One `<link>` per font family
- `"note": "Google: {Font Name}"` prefix to distinguish from other head codes
- Only load actually used `font-weight` values — check the `css` field in each `o_typography` font entry + the hero CSS for weights used there
- The `o_typography` component renders fonts via inline `style` but does **not** load them — fonts must be in `head_codes` or they fall back to system fonts
- System fonts (Georgia, Palatino, etc.) don't need a `<link>`

### Palette mode CSS
Each per-style CSS file (`assets/styles/{category}/{slug}.css`) ends with a `html.palette body { ... }` block. See template CLAUDE.md for the full structure. Values come from the page's primary color palette + first heading/text fonts. Beyond the standard custom properties, add extra overrides if the default template styling clashes with the style's aesthetic (e.g. `--color_border` with a style-appropriate value, `--bg_surface` contrast, etc.).

### Hero CSS — font usage
The hero `.a_description` must use the **first text font** (from "Text Fonts" `o_typography` section), not the heading font. Headings, eyebrow, and buttons use the heading font.

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
