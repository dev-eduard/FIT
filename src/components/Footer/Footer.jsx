import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="logo">
              <span>FIT</span>
            </div>
            <p>Transformando vidas através da musculação.</p>
            <div className="social-links">
              <a href="tel:0" aria-label="Ligar">
                <i className="social-icon fas fa-phone" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                target="_blank"
              >
                <i className="social-icon fab fa-instagram" />
              </a>
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                target="_blank"
              >
                <i className="social-icon fab fa-facebook-f" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Academia</h3>
            <ul>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#planos">Planos</a>
              </li>
              <li>
                <a href="#depoimentos">Depoimentos</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Informações</h3>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Horários</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contato</h3>
            <address>
              <ul>
                <li>
                  <a
                    href="https://maps.app.goo.gl/8noKCPGWYwnbSvPH6"
                    target="_blank"
                  >
                    Xique-Xique, BA
                  </a>
                </li>
                <li>
                  <a href="mailto:">FIT@gmail.com</a>
                </li>
                <li>
                  <a href="tel:0">(21) 98765-4321</a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; <a href="#">FIT</a> &
            <a href="https://marcoseduardo.dev.br" target="_blank">
            &nbsp;EDUARDO
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
