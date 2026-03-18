# Site: uilookbook_com

UI Lookbook — design style showcase. Each page documents a design aesthetic (color palette, typography, principles, history, similar styles).

## Template

`uilookbook`

## Directory Structure

```
settings.json         # Template selection + site settings
src/                  # Page content (JSON)
  layout/             # Global layout pieces (header, footer)
  home.json           # Homepage — grid of all design style cards
  about.json          # About page
  404.json            # Error page
  sitemap.json        # Sitemap page
  retro-and-nostalgia/         # Style detail pages
  cultural-and-regional/       # Style detail pages
  art-and-design-movements/    # Style detail pages
html/                 # Generated static HTML (gitignored)
assets/
  styles/             # Per-style scoped CSS (one file per design style)
    retro-and-nostalgia/
    cultural-and-regional/
    art-and-design-movements/
```

## Pages

| Page | Source JSON | Description |
|------|-------------|-------------|
| Home | `src/home.json` | All design style cards |
| About | `src/about.json` | About page |
| 404 | `src/404.json` | Error page |
| Sitemap | `src/sitemap.json` | Sitemap |
| 70s Design | `src/retro-and-nostalgia/70s-design.json` | Style detail |
| 80s Design | `src/retro-and-nostalgia/80s-design.json` | Style detail |
| 90s Web Revival | `src/retro-and-nostalgia/90s-web-revival.json` | Style detail |
| Cassette Mixtape UI | `src/retro-and-nostalgia/cassette-mixtape-ui.json` | Style detail |
| Chinese Web Design | `src/cultural-and-regional/chinese-web-design.json` | Style detail |
| Dutch Design | `src/cultural-and-regional/dutch-design.json` | Style detail |
| Japandi | `src/cultural-and-regional/japandi.json` | Style detail |
| Japanese Web Design | `src/cultural-and-regional/japanese-web-design.json` | Style detail |
| Korean Web Design | `src/cultural-and-regional/korean-web-design.json` | Style detail |
| Scandinavian/Nordic Design | `src/cultural-and-regional/scandinavian-nordic-design.json` | Style detail |
| Swiss Graphic Style | `src/cultural-and-regional/swiss-graphic-style.json` | Style detail |
| Wabi-Sabi | `src/cultural-and-regional/wabi-sabi.json` | Style detail |
| Art Deco | `src/art-and-design-movements/art-deco.json` | Style detail |
| Art Nouveau | `src/art-and-design-movements/art-nouveau.json` | Style detail |
| Bauhaus | `src/art-and-design-movements/bauhaus.json` | Style detail |
| Constructivism | `src/art-and-design-movements/constructivism.json` | Style detail |
