import instagram from "./icons/instagram.svg";
import whatsapp from "./icons/whatsapp.svg";
import s from "./Footer.module.css";

export default function Footer() {
  const styles_block = {
    height: "194px",
  };

  return (
    <div className="wrapper">
      <h2 style={{marginTop:'80px'}}>Contact</h2>
      <div className={s.footer_container}>
        <div>
          <span>phone</span>
          <h3>+49 999 999 99 99</h3>
        </div>
        <div>
          <span>socials</span>
          <div>
            <img src={instagram} alt="instagram_link" />
            <img src={whatsapp} alt="whatsapp_link" />
          </div>
        </div>
        <div style={styles_block}>
          <span>Address</span>
          <h3>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
        </div>
        <div style={styles_block}>
          <span>Working Hours</span>
          <h3>24 hours a day</h3>
        </div>
      </div>

      <div className={s.map}>
        <iframe
          width="100%"
          height="350"
          frameBorder='none'
          src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Starta%20Institute%20by%20Tel-Ran%20Linkstra%C3%9Fe%202/8%20Etage,%2010785%20Berlin+(Starta%20Institute%20by%20Tel-Ran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Population calculator map
          </a>
        </iframe>
      </div>
    </div>
  );
}
