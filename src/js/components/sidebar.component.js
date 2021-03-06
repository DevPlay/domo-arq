// Sidebar
class Sidebar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="d-flex flex-column menu coolvetica" tabindex="0">
      <div class="hamburguer-menu-trigger">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul class="hamburguer-menu">
        <div class="d-flex align-items-center menu-logo">
        <div class="logo">
          <img src="./images/logo-grande.png" alt="logo Domo" />
        </div>
      </div>
          <ul class="hamburguer-menu-items">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#estudio">Estudio</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#premios">Premios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <div class="hamburguer-menu-social">
            <ul>
              <li>
                <a href="https://www.facebook.com/domoestudioarq">
                  <img
                    class="social-icon"
                    src="./images/facebook-square-w.svg"
                    alt="Facebook logo"
                  />
                  <p class="social-text">Facebook</p>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/domoestudioarq">
                  <img class="social-icon" src="./images/instagram-w.svg" alt="Instagram logo" />
                  <p class="social-text">Instagram</p>
                </a>
              </li>
              <li>
                <a href = "mailto: info@domoarq.com?subject=Quiero%20hablar%20con%20un%20asesor" >
                  <img class="social-icon" src="./images/envelope-open-w.svg" alt="Email logo" />
                  <p class="social-text">info@domoarq.com</p>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>


      <div class="d-flex menu-items">
        <ul class="d-flex flex-column align-items-start justify-content-around" id="side-menu">
          <li class="menu-over">
            <a href="#inicio">Inicio</a>
          </li>
          <li class="menu-over">
            <a href="#estudio">Estudio</a>
          </li>
          <li class="menu-over">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li class="menu-over">
            <a href="#premios">Premios</a>
          </li>
          <li class="menu-over">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="d-flex menu-social">
        <ul>
          <li>
            <a href="https://www.facebook.com/domoestudioarq"
              ><img
                class="social-icon"
                src="./images/facebook-square-w.svg"
                alt="Facebook logo"
              /><span class="social-text">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/domoestudioarq"
              ><img class="social-icon" src="./images/instagram-w.svg" alt="Instagram logo" /><span
                class="social-text"
                >Instagram</span
              ></a
            >
          </li>
          <li>
            <a href = "mailto: info@domoarq.com?Subject=Quiero%20hablar%20con%20un%20asesor">
              <img class="social-icon" src="./images/envelope-open-w.svg" alt="Email logo" />
              <span class="social-text">info@domoarq.com</span
            </a>
          </li>
        </ul>
      </div>
    </nav>
      `;
  }
}

customElements.define('sidebar-custom', Sidebar);

export default Sidebar;
