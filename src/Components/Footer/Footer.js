import siteLogo from "../../assets/site-logo-white.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="site-footer-wrapper">
      <div className="site-footer-inner">
        <div className="site-footer-inner__contact-block">
          <div className="site-footer-inner__contact-block__site-logo-img">
            <a className="site-footer-inner__contact-block__site-logo-img__link">
              <img src={siteLogo} />
            </a>
          </div>

          <div className="site-footer-inner__contact-block__mail-block">
            <div className="site-footer-inner__contact-block__mail-block__icon"></div>
            <span className="site-footer-inner__contact-block__mail-block__text">
              info@stroykastore.ru
            </span>
          </div>

          <div className="site-footer-inner__contact-block__geo-block">
            <div className="site-footer-inner__contact-block__geo-block__icon"></div>
            <span className="site-footer-inner__contact-block__geo-block__text">
              Москва, ул. Камушкина 10
            </span>
          </div>
        </div>

        <div className="site-footer-inner__payment-block">
          <div className="site-footer-inner__payment-block__company-name">
            © СтройкаСтор
          </div>
          <div className="site-footer-inner__payment-block__pay-icon"></div>
          <div className="site-footer-inner__payment-block__made-in">
            Cделано в KRUGLOV STUDIO
          </div>
        </div>
      </div>
    </div>
  );
};
