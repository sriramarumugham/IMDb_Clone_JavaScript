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
    <a href="https://www.linkedin.com/in/sriram-a-78494b1aa/" target="_blank"><p>Linkedin</p></a>
    <a href="https://github.com/sriramarumugham/IMDb_Clone_JavaScript" target="_blank"><p>Source-code</p></a>
    <a href="https://www.instagram.com/itz_xxiii/?hl=en" target="_blank"><p>Instagram</p></a>
    <a href="https://www.youtube.com/channel/UCgadvIAHMlBB-FEFApnOKZA" target="_blank"><p>Youtube</p></a>
    </footer>`
  }
}
customElements.define('footer-component' , FooterComponent);


