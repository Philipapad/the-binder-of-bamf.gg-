BAMF.gg Binder — installable app-shell starter

WHAT THIS DOES
- Provides an app-style screen that can be installed as a PWA on Windows and Android after being hosted on an HTTPS website.
- Caches the small app shell so the launcher screen can open offline.
- Shows whether the device has an internet connection.
- Opens the live BAMF.gg binder when online.

IMPORTANT LIMITATION
This does NOT make BAMF.gg's actual binder data, images, login, or server-backed features work offline, and it does not sync binder data between devices. Those features require BAMF.gg to provide offline support or a documented API/export that the app is allowed to use. A wrapper cannot safely add that by itself.

HOW TO TRY IT
1. Extract this ZIP.
2. To install it on Windows and Android, the files must be hosted on an HTTPS address. Opening index.html directly from a file does not enable PWA installation or service workers.
3. One possible hosting method is a GitHub Pages site. Upload all files from this folder to a repository and enable Pages.
4. On Windows, open the HTTPS page in a supported browser and choose Install app / Install this site as an app.
5. On Android, open the HTTPS page in Chrome and choose Install app or Add to Home screen.

Before publishing, remember this is an unofficial launcher and is not affiliated with BAMF.gg or Pokémon.
