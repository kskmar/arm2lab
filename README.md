# ARM²Lab website

A static academic lab website inspired by the clear news and publication structure of Ignacio Carlucho’s personal site. It is original code and does not use the al-folio theme. No build tools are required.

## Preview
Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Update content
- `data.js`: members, news, publications, video links. Add confirmed team members and replace the current video links with direct approved YouTube URLs. Publication links currently lead to researcher profiles; replace with individual paper URLs if desired.
- `index.html`: research and introductory copy, contact details, and section order.
- `style.css`: colours, type and layout.

The people cards use initials by design. Replace them with approved portrait images when available. The video panels are designed illustrations, not video thumbnails.

## Publish on GitHub Pages
1. Create a public GitHub repository named `arm2lab.github.io` if the intended address is `https://arm2lab.github.io`. The name must match the GitHub account or organisation name. For any other repository name, the address will be `https://USERNAME.github.io/REPOSITORY/`.
2. Upload all files from this folder to the repository root and commit them.
3. In the repository, open Settings → Pages. Under Build and deployment, select Deploy from a branch, then `main` and `/(root)`. Save.
4. Review the published site on desktop and mobile. You may later add a custom domain.

The published Google Site remains independent until you choose to replace its link or redirect visitors.
