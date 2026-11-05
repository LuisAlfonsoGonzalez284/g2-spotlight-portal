# Project Rules

- Load web fonts with a `<link>` stylesheet in `src/routes/__root.tsx` `head().links` (plus `preconnect` to fonts.googleapis.com / fonts.gstatic.com). Never `@import` a remote URL in `src/styles.css`: Lightning CSS resolves `@import` from disk, so a remote import makes the dev server return 500 for `/src/styles.css` and the screen goes blank.
