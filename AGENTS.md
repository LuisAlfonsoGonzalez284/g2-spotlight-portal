# Project Rules

- The production site (g2.com.do) is deployed as static files outside Lovable hosting. Keep images as real files in `src/assets/` imported directly (e.g. `import logo from "@/assets/g2-logo-proyectos.png"`). Do not replace them with `*.asset.json` / `/__l5e/assets-v1/...` URLs: those only resolve on Lovable hosting and return 404 in production. The header/footer logo is `src/assets/g2-logo-proyectos.png` ("G2 PROYECTOS"); to change it, replace that file.

- Load web fonts with a `<link>` stylesheet in `src/routes/__root.tsx` `head().links` (plus `preconnect` to fonts.googleapis.com / fonts.gstatic.com). Never `@import` a remote URL in `src/styles.css`: Lightning CSS resolves `@import` from disk, so a remote import makes the dev server return 500 for `/src/styles.css` and the screen goes blank.
