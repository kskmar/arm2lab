const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = s => /^https:\/\//.test(s) ? s : '#';
document.querySelector('#year').textContent = new Date().getFullYear();
const footerContent = document.querySelector('footer .container');
if(footerContent) footerContent.insertAdjacentHTML('afterbegin', '<div class="footer-logos"><a href="https://www.hw.ac.uk/" target="_blank" rel="noopener"><img src="images/heriot-watt-logo.png" alt="Heriot-Watt University" loading="lazy"></a><a href="https://thenationalrobotarium.com/" target="_blank" rel="noopener"><img src="images/national-robotarium-logo.png" alt="The National Robotarium" loading="lazy"></a></div>');
if(document.querySelector('#member-list')) document.querySelector('#member-list').innerHTML = members.map(m => `<article class="member">${m.image ? `<img class="portrait" src="${esc(m.image)}" alt="Portrait of ${esc(m.name)}" loading="lazy">` : `<div class="portrait initials" aria-hidden="true">${esc(m.name.split(' ').map(x=>x[0]).join(''))}</div>`}<div><h4>${esc(m.name)}</h4><p>${esc(m.role)}</p></div></article>`).join('');
if(document.querySelector('#news-list')) {
  const entries = document.querySelector('#home') ? news.slice(0,4) : news;
  document.querySelector('#news-list').innerHTML = entries.map(n => `<div class="news-item"><time>${esc(n.date)}</time><p>${n.url ? `<a href="${esc(safeUrl(n.url))}" target="_blank" rel="noopener">${esc(n.title)} ↗</a>` : esc(n.title)}${n.video ? ` <a class="news-video-link" href="${esc(safeUrl(n.video))}" target="_blank" rel="noopener">Watch the episode ↗</a>` : ''}</p></div>`).join('');
}
if(document.querySelector('#honours-list')) document.querySelector('#honours-list').innerHTML = additionalHonours.map(title => `<li>${esc(title)}</li>`).join('');
if(document.querySelector('#paper-list')) {
  const list = document.querySelector('#paper-list');
  const years = [...new Set(papers.map(p => p.year))].sort((a,b) => b-a);
  list.innerHTML = years.map(year => `<section class="publication-year" aria-label="Publications in ${year}"><h2>${year}</h2>${papers.filter(p => p.year === year).map(p => {
    const article = p.doi ? `https://doi.org/${p.doi}` : p.url;
    return `<article class="paper"><div><h3><a href="${esc(safeUrl(article))}" target="_blank" rel="noopener">${esc(p.title)}</a></h3><p class="paper-authors">${esc(p.authors)}</p><p>${esc(p.venue)}${p.shared ? ' <span class="shared-badge">With Ignacio Carlucho</span>' : ''}</p><div class="paper-links">${p.pdf ? `<a href="${esc(safeUrl(p.pdf))}" target="_blank" rel="noopener" aria-label="PDF of ${esc(p.title)}">PDF ↗</a>` : ''}<a href="${esc(safeUrl(article))}" target="_blank" rel="noopener">${p.doi ? 'DOI' : 'Record'} ↗</a></div></div></article>`;
  }).join('')}</section>`).join('');
}
if(document.querySelector('#video-list')) {
  const list = document.querySelector('#video-list');
  list.innerHTML = videos.map(v => `<article class="video-card"><div class="video-frame"><button class="video-play" type="button" data-video="${esc(v.id)}" aria-label="Play ${esc(v.title)}"><img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy"><span class="play-symbol" aria-hidden="true">▶</span></button></div><div class="video-caption"><span class="video-label">${esc(v.label)}</span><h3>${esc(v.title)}</h3><a href="https://www.youtube.com/watch?v=${esc(v.id)}" target="_blank" rel="noopener">Open on YouTube ↗</a></div></article>`).join('');
}
document.querySelectorAll('.video-play').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.video;
  button.parentElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1" title="${esc(button.getAttribute('aria-label'))}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
}));
const toggle = document.querySelector('.menu-toggle'), nav = document.querySelector('nav');
toggle.addEventListener('click', () => {const open = nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
