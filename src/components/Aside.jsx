import {
  GiCalendar,
  GiClawSlashes,
  GiMailbox,
  GiMayanPyramid,
  GiPhone,
} from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/formal1.jpg"} alt="Abu Saleh" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Abu Saleh">
            Abu Saleh
          </h1>

          <h3 className="title">Software Engineer</h3>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a
                href="mailto:abusalehjunior@gmail.com"
                className="contact-link"
              >
                abusalehjunior@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +88 01627 348586
              </a>
            </div>
          </li>

          {/* <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Official Birthday</p>

              <time dateTime="1999-08-28">August 28, 1999</time>
            </div>
          </li> */}

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Dhaka, Bangladesh</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/abu7127"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-facebook">Facebook</ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/abu-saleh-shaon/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin">LinkedIn</ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
