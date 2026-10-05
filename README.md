# ombed.github.io

The tool that lived at https://ombed.github.io/paintItBlack/ moved to
**https://ombed.github.io/inkognito/** when its repository was renamed to
[ombed/inkognito](https://github.com/ombed/inkognito) (6 October 2026).

This site only forwards the old address:

- `paintItBlack/index.html` sends the page on to the new address.
- `paintItBlack/sw.js` replaces the old tool's service worker. A browser that installed the tool
  picks it up on its next update check; it sends every open window to the new address and removes
  itself. It leaves the browser's caches alone, since the new address shares them.
- `404.html` sends any other old link under `/paintItBlack/` to the same place under `/inkognito/`.
