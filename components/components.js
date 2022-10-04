class NavbarComponent extends HTMLElement {
  connectedCallback() {
    
      const logoIconContainer='<div id="logo-icon-container"><div id="logo"><a href="index.html"><h1>IMDb</h1></a></div></div>';
      const searchContainer='<div id="search-container"><input id="search-bar" placeholder="search movie by name" /></div>';
      const  WatchlaterContainer  ='<div id="fav-icon-container"><div id="fav"><a href="watchLater.html"><span> <i class="fa-solid fa-bookmark"></i> <h4>Watchlist</h4></span></a></div></div>'
      
      const nav =`<nav><div class="nav-container">${logoIconContainer}${searchContainer}${WatchlaterContainer}</div></nav>`;

      const searchResult ='<div id="search-result-outer-container"><ul id="search-result-container"></ul></div>';
      
      this.innerHTML = nav + searchResult;
  }
}
customElements.define("navbar-component", NavbarComponent);

class FooterComponent extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`<footer>
    <p>Linkedin</p>
    <p>GitHub</p>
    <p>Instagram</p>
    <p>Youtube</p>
    </footer>`
  }
}
customElements.define('footer-component' , FooterComponent);


