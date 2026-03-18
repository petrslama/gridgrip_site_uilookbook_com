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

## CSS Files

```
assets/styles/
  retro-and-nostalgia/       # 70s-design, 80s-design, 90s-web-revival, cassette-mixtape-ui
  cultural-and-regional/     # chinese-web-design, dutch-design, japandi, japanese-web-design,
                             # korean-web-design, scandinavian-nordic-design, swiss-graphic-style, wabi-sabi
  art-and-design-movements/  # art-deco, art-nouveau, bauhaus, constructivism
```
