const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = s => /^https:\/\//.test(s) ? s : '#';
document.querySelector('#year').textContent = new Date().getFullYear();
if(document.querySelector('#member-list')) document.querySelector('#member-list').innerHTML = members.map(m => `<article class="member">${m.image ? `<img class="portrait" src="${esc(m.image)}" alt="Portrait of ${esc(m.name)}" loading="lazy">` : `<div class="portrait initials" aria-hidden="true">${esc(m.name.split(' ').map(x=>x[0]).join(''))}</div>`}<div><h4>${esc(m.name)}</h4><p>${esc(m.role)}</p></div></article>`).join('');
if(document.querySelector('#news-list')) document.querySelector('#news-list').innerHTML = news.map(n => `<div class="news-item"><time>${esc(n.date)}</time><p><a href="${esc(safeUrl(n.url))}" target="_blank" rel="noopener">${esc(n.title)} ↗</a></p></div>`).join('');
if(document.querySelector('#paper-list')) {
  const list = document.querySelector('#paper-list');
  const years = [...new Set(papers.map(p => p.year))].sort((a,b) => b-a);
  list.innerHTML = years.map(year => `<section class="publication-year" aria-label="Publications in ${year}"><h2>${year}</h2>${papers.filter(p => p.year === year).map(p => {
    const article = p.doi ? `https://doi.org/${p.doi}` : p.url;
    return `<article class="paper"><div><h3><a href="${esc(safeUrl(article))}" target="_blank" rel="noopener">${esc(p.title)}</a></h3><p class="paper-authors">${esc(p.authors)}</p><p>${esc(p.venue)}${p.shared ? ' <span class="shared-badge">With Ignacio Carlucho</span>' : ''}</p><div class="paper-links">${p.pdf ? `<a href="${esc(safeUrl(p.pdf))}" target="_blank" rel="noopener" aria-label="PDF of ${esc(p.title)}">PDF ↗</a>` : ''}<a href="${esc(safeUrl(article))}" target="_blank" rel="noopener">${p.doi ? 'DOI' : 'Record'} ↗</a></div></div></article>`;
  }).join('')}</section>`).join('');
}
if(document.querySelector('#video-list')) document.querySelector('#video-list').innerHTML = videos.map(v => `<a class="video-item" href="${esc(safeUrl(v.url))}" target="_blank" rel="noopener"><small>${esc(v.label)}</small><h3>${esc(v.title)} ↗</h3></a>`).join('');
const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('nav');
toggle.addEventListener('click', () => {const open = nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
