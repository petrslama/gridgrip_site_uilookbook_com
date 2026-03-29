# UI Lookbook

Design style encyclopedia. Each page documents a UI/visual style with color palettes, typography, design principles, use cases, history, AI prompts, and example screenshots.

- **URL**: https://uilookbook.com
- **Template**: `inSite`
- **Pages**: 7 complete style pages + home, sitemap, 404 (328 incomplete in `todo/`)
- **Categories**: 3 active (32 total)

## Directory Structure

```
settings.json
src/
  layout/                    # header.json, footer.json
  home.json                  # Homepage — grid of all style cards
  sitemap.json               # Sitemap page
  404.json                   # Error page
  style-template.json        # Template JSON for new style pages
  art-and-design-movements/  # art-deco, art-nouveau
  retro-and-nostalgia/       # 70s-design, 80s-design, 90s-web-revival, cassette-mixtape-ui
  subculture-and-aesthetic/  # kawaii-cute
todo/
  {category}/                # 328 incomplete styles (JSON only, no assets)
    {style}.json
html/                        # Generated static HTML (gitignored)
components/                  # Site-level components (override inSite template)
  atoms/                     #   a_button, a_description, a_eyebrow, a_fu_type, a_h1, a_h2, a_h3, a_icon, a_image, a_image_cover, a_logo, a_theme_toggle
  molecules/                 #   m_buttons, m_section_settings, m_section_title
  organisms/                 #   o_breadcrumbs, o_color_palette, o_design_images, o_faq, o_footer, o_header, o_hero, o_html, o_style_guide, o_typography
  roots/                     #   r_debug, r_html
assets/
  imgs/                      # Hero images by category
  styles/                    # Per-style palette CSS + card preview JPGs
  gallery/                   # Standalone HTML example pages (28 files) + screenshots
  lucide/                    # Lucide icon font (CSS + WOFF2)
```

## Categories (32)

Active (in `src/`): art-and-design-movements, retro-and-nostalgia, subculture-and-aesthetic

Incomplete (in `todo/`): 3d-and-spatial, accessibility-and-inclusive, ai-and-generative-design, art-and-design-movements, brutalism-family, card-play-and-component, cultural-and-regional, dark-and-moody, data-and-visualization, e-commerce-and-saas, experimental-and-avant-garde, flat-and-material, gaming-and-interactive, geometric-and-grid-based, gradient-and-color, heavy-animation-and-motion, illustrated-and-animated, indieweb-and-personal, luxury-and-prestige, memphis-and-maximalism, minimalist-and-spacious, morphism-and-surface, navigation-and-interaction, organic-and-natural, photo-and-media-driven, retro-and-nostalgia, scroll-and-layout, subculture-and-aesthetic, sustainable-and-ethical, texture-and-pattern, themed-and-skeuomorphic, typography-driven

## Style Detail Page Structure

Each page follows `style-template.json`:

1. `o_breadcrumbs` — Home > Category > Style
2. `o_hero` — image, eyebrow keywords, h1, description, buttons
3. `o_style_guide` "When to Use" — 3 cards with use cases
4. `o_design_images` "Built From This" — AI prompt + 4 example screenshots
5. `o_style_guide` "Design Principles" — 6 principle cards
6. `o_color_palette` x3 — primary + 2 alternative palettes (6/5/5 colors)
7. `o_typography` "Heading Fonts" — 8 fonts (5 Google + 3 system)
8. `o_typography` "Text Fonts" — 5 fonts (2 Google + 3 system)
9. `o_style_guide` "History" — 3 cards (origins, peak, modern revival)
10. `o_faq` — 6 questions
11. `o_design_images` "Similar Designs" — related style links

## Scripts

- `make_design_image.js` — captures style page hero as 800x600 card preview image (Puppeteer + Sharp)
- `make_example_image.js` — screenshots standalone gallery HTML files as 800x600 thumbnails
