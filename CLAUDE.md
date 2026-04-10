# Site: uilookbook_com

UI Lookbook — design style encyclopedia.

**Template:** `inSite` — components live in `site/uilookbook_com/components/` and override the shared set. See `../../docs/reference.md` → "`inSite` Template Pattern".

## Style Detail Pages

7 complete styles in `src/` across 3 categories. 328 incomplete styles in `todo/` across 32 categories. Each page follows `style-template.json`.

### Page structure

1. `o_breadcrumbs` — Home > Category > Style
2. `o_hero` — image, eyebrow keywords, h1, description, anchor buttons
3. `o_style_guide` "When to Use" — 3 cards (icon, title, description) with industry/use case examples
4. `o_design_images` "Built From This" — AI prompt in `a_description` + 4 gallery example screenshots with tags
5. `o_style_guide` "Design Principles" — 6 cards explaining core design principles
6. `o_color_palette` × 3 — primary palette (6 colors) + 2 alternates (5 colors each), each with `section_id`
7. `o_typography` "Heading Fonts" — 8 fonts (5 Google, 3 system) with `section_id: "typography"`
8. `o_typography` "Text Fonts" — 5 fonts (2 Google, 3 system)
9. `o_style_guide` "History" — 3 cards (origins, peak era, modern revival)
10. `o_faq` — 6 questions (AI prompt, industries, palette choice, when to avoid, cultural/historical, fonts)
11. `o_design_images` "Similar Designs" — links to related styles

### Google Fonts in `head_codes`

Each page loads fonts via `settings.head_codes` with a single `<link>` tag:

```json
{
    "note": "Google Fonts",
    "code": "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family={Font1}&family={Font2}&display=swap\">"
}
```

Only load Google Fonts actually referenced in `o_typography` sections. System fonts (Georgia, Palatino, etc.) don't need loading. Only include `font-weight` values actually used in `css` fields.

### Palette mode CSS

Per-style CSS lives at `assets/styles/{category}/{slug}.css`. Each contains an `html.palette body { ... }` block with custom properties derived from the page's primary color palette and first heading/text fonts. Add extra overrides (e.g. `--color_border`, `--bg_surface`) when the default template styling clashes with the style's aesthetic.

### Hero CSS — font usage

The hero `.a_description` uses the **first text font** (from "Text Fonts" `o_typography`), not the heading font. Headings, eyebrow, and buttons use the heading font.

### `o_style_guide` — copy prompt feature

Cards with `a_image_cover` alt text serve double duty: alt text is an AI image-generation prompt users can copy. Each `o_style_guide` section has `copy_label` / `copied_label` fields.

### `o_design_images` — gallery examples

Items have `"ignore": "1"` to hide unpopulated entries. Images link to standalone HTML gallery pages at `/assets/gallery/{category}/{style}/{example}.html`. Tags describe the example (e.g. "Landing Page", "Dark Mode").

## `todo/` directory

328 incomplete styles at `todo/{category}/{style}.json` — JSON content exists but no assets (hero images, palette CSS, card preview, gallery). Move a style back to `src/{category}/` when completing it.

## Screenshot Generators

**Card preview** (800×600 JPEG at `assets/styles/{category}/{slug}.jpg`) — strips page to hero-only, removes image column, shoots at 2×, resizes to 800×600:

```bash
cd site/uilookbook_com
node make_design_image.js "http://localhost/{category}/{slug}/" "assets/styles/{category}/{slug}.jpg"
```

**Gallery example** (800×600 JPEG) — simple full-page screenshot at 1200×900 @2×, resized to 800×600:

```bash
cd site/uilookbook_com
node make_example_image.js "assets/gallery/{category}/{style}/{example}.html" "assets/gallery/{category}/{style}/{example}.jpg"
```

## SEO

Each page has:

- `seo.title`: "{Style Name} Style — UI Lookbook"
- `seo.description`: key visual traits + "Color palettes, typography, design principles, and AI prompts"
- `seo.keywords`: style name + related terms
- OG + Twitter cards with `summary_large_image`
