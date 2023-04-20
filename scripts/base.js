/**
 * Este script adiciona top bar e footer dinamicamente a uma página
 */

function createElement(html, callback) {
  const element = document.createElement("div");

  element.innerHTML = html;

  callback(element);
}

window.addEventListener("load", () => {
  const url = window.location;

  const topBarHTML = `
  <header>
      <div class="topbar">
          <span class="logo">
          <a href="https://cc1n-trabalho-web.glitch.me/"><span class="material-symbols-outlined">
sports
</span></a>
          <a href="https://cc1n-trabalho-web.glitch.me/">Esporte.Blog</a>
          </span>
          <div class="paths-container">
            <span class="home">
              <a href="/index.html">Home</a>
            </span>
            <span class="paths">
              <a href="/categorias/futebol.html">Futebol</a>
              <a href="/categorias/basquete.html">Basquete</a>
              <a href="/categorias/volei.html">Vôlei</a>
              <a href="/pages/noticias.html">Notícias</a>
              <a href="/contatos.html">Contatos</a>
            </span>
          </div>
      </div>
  </header>
  `;

  const footerHTML = `
  <footer class="footer" style="color: white">
    <span>Todos os direitos reservados CC1N, 2023</span>
  </footer>
  `;

  createElement(topBarHTML, (e) => document.body.prepend(e));
  createElement(footerHTML, (e) => document.body.append(e));
});
