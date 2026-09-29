# ARM²Lab website

A static, multi-page academic site for GitHub Pages. No build step is needed.

## Publish the complete site

Upload the **contents of this folder** to the root of your GitHub Pages repository. Keep `index.html`, the six other HTML pages, `data.js`, `script.js`, and `style.css` at the repository root. Keep every image inside `images/` (for example, `images/maria-koskinopoulou.jpg`). Replace earlier versions of files with the same names, then commit the changes.

If GitHub's web uploader refuses to replace an existing filename, edit that file through the GitHub web editor or use GitHub Desktop to copy the whole folder into a local clone and push the commit. Upload new pictures while browsing the repository's `images/` directory.

The site includes publication author lists and direct article/PDF links, videos, research demonstrations, lab co-lead portraits, student portraits, institution logos, research photos, and news/recognition.

## Edit content

- `data.js`: people, publications, dated news, additional recognition, and video links.
- `index.html`: introductory text and home-page images.
- `research.html`: research areas and embedded videos.
- `style.css`: colours and layout.

For a local preview, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000/`.
