# ARM²Lab website

A multi-page academic lab website for GitHub Pages. Each navigation tab opens a separate HTML page. No build tools are required.

## Update the live GitHub Pages site

1. Unzip this package and open `arm2lab-site`.
2. In the GitHub repository, choose **Add file → Upload files**.
3. Upload the files **inside** `arm2lab-site`, including all seven `.html` pages, `style.css`, `data.js`, `script.js`, and the `images` folder. Keep `index.html` at the repository root.
4. Commit the changes. Existing files with matching names must be replaced; GitHub's web uploader may reject files already in the repository. If so, use GitHub Desktop, or edit each file in GitHub's web editor and upload the four new images through **Add file → Upload files**.

## Content

Edit `data.js` to update members, publications, news and video links. The four supplied portraits were provisionally paired in attachment order with Adip, Sheena, Christopher and David; **verify the matches before publishing**. Jacob appears with initials until a photo is added. The fifth supplied photo is used for Prab Singh.

The publication links currently lead to the researchers' publication lists. The video links currently lead to the old Google Site. Replace these with direct paper and video URLs when available.

Edit `index.html` for the lab description and research areas; edit `style.css` for typography, colour and layout.

To preview locally, open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.
