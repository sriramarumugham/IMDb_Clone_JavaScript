class NavbarComponent extends HTMLElement {
  connectedCallback() {
    
      const logoIconContainer='<div id="logo-icon-container"><div id="logo"><h1><a href="index.html">Imdb</a></h1></div></div>';
      const searchContainer='<div id="search-container"><input id="search-bar" placeholder="search movie by name" /></div>';
      const  WatchlaterContainer  ='<div id="fav-icon-container"><div id="fav"><a href="watchLater.html"> <i class="fa-solid fa-bookmark"></i>watchlater</a></div></div>'
      
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


