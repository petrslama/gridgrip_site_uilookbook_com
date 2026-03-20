# Site: uilookbook_com

UI Lookbook — design style showcase. Template: `uilookbook`.

## Style Detail Pages

There are style detail pages across 3 categories. Currently in two formats — component-based pages are the target, the rest are being migrated from `o_html`.

### Target structure (component-based)
New pages should follow this format:

1. `o_breadcrumbs` — navigation breadcrumb
2. `o_hero` — hero with image, eyebrow, title, description, buttons
3. `o_color_palette` — primary palette + alt palettes
4. `o_typography` — fonts + alternatives
5. `o_design_principles` — 6 principles with icons
6. `o_use_cases` — ideal use cases list
7. `o_history` — 3 paragraphs of history
8. `o_design_list` — "Similar Styles" section with related cards

### Legacy format (o_html)
Some pages still use a single `o_html` section with hardcoded HTML. These will be gradually migrated to the component-based structure above.

## CSS Loading Rule

Every style detail page must load its own CSS **plus the CSS for every card in the `o_design_list` "Similar Styles" section** via `settings.head_codes`.

```json
"settings": {
	"head_codes": [
		{ "note": "Google Fonts", "code": "<link ...>" },
		{ "note": "Style CSS", "code": "<link rel=\"stylesheet\" href=\"/assets/styles/{category}/{slug}.css\">" },
		{ "note": "{related-slug}", "code": "<link rel=\"stylesheet\" href=\"/assets/styles/{category}/{slug}.css\">" }
	]
}
```

## Card IDs

Card `id` field must match the CSS scoping selector. HTML IDs cannot start with a digit — slugs starting with a number use the `d-` prefix:
- `70s-design` → `id: "d-70s-design"`
- `80s-design` → `id: "d-80s-design"`
- `90s-web-revival` → `id: "d-90s-web-revival"`
- All other slugs → use slug directly (e.g. `bauhaus`, `art-deco`, `wabi-sabi`)

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

## CSS Files

```
assets/styles/
  retro-and-nostalgia/       # 70s-design, 80s-design, 90s-web-revival, cassette-mixtape-ui
  cultural-and-regional/     # chinese-web-design, dutch-design, japandi, japanese-web-design,
                             # korean-web-design, scandinavian-nordic-design, swiss-graphic-style, wabi-sabi
  art-and-design-movements/  # art-deco, art-nouveau, bauhaus, constructivism
```
