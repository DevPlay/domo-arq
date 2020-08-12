// Footer
class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer id="footer">
      <div class="col-xs-12 col-md-12 col-lg-12" style="background-color: #000029;">
        <div class="designed-by">
          <p>
            Copyright © 2020 - Buenos Aires - designed by
            <a href="https://www.devplay.com.ar">
              <img src="./images/Recurso 2.svg" alt="Logo DevPlay"
            /></a>
          </p>
        </div>
      </div>
    </footer>
      `;
  }
}

customElements.define('footer-custom', Footer);

export default Footer;
