# FORGE shared appearance

This tutorial uses the ReactionFORGE fire, ice, and polished bronze theme.

- Charcoal background: `#0c1116`
- Panels: `#151c23`
- Text: `#edece8`
- Fire: `#ff9b58`
- Ice: `#7acbfa`
- Bronze: `#bf936a`

`forge-theme.css` is the shared visual layer. `forge-theme.js` stores only the
dark/light preference under `forge-theme-v1`; tutorials on the same GitHub Pages
origin share that preference. Dark is the initial default. Lesson data, scoring,
answers, and progress remain controlled by each tutorial's original code.

Keep these two files identical across the four themed tutorials. App-specific
style adjustments are scoped by the body classes in the shared stylesheet.
Copies live in each repository so published tutorials have no cross-site asset
dependency and can still be downloaded and used together offline.

Publish the two theme files alongside `index.html`.
