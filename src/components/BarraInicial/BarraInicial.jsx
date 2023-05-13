/* eslint-disable max-len */
import React from 'react'
import './BarraInicial.css'

const BarraInicial = () => {
  return (
    <body>
      <div className="Page">
        <header className="BarraInicial">
          <div className="BarraInicial_desktop">
            <div className="BarraInicial_content">
              <a
                title
                className="BarraInicial_logo"
                href="https://www.alpine-cars.co.uk/"
              >
                <img src="https://cdn.cookielaw.org/logos/1058e0b9-ee95-4d43-8292-3dae40ce5c3c/b4f83c83-bbed-4615-94dd-e1db19ab289e/d93ec308-72e0-452b-aa87-506f7e2a88e1/Alpine_logo_name.png" />
              </a>
              <div className="BarraInicial_bottom">
                <div className="MainMenu is-visible">
                  <ul className="MainMenu__navList">
                    <li className="MainMenuEntry">
                      <button className="MainMenuEntry__link">F1</button>
                    </li>
                    <li className="MainMenuEntry">
                      <button className="MainMenuEntry__link">RACING</button>
                    </li>
                    <li className="MainMenuEntry">
                      <button className="MainMenuEntry__link">
                        ALPINE WORLD
                      </button>
                    </li>
                    <li className="MainMenuEntry">
                      <button className="MainMenuEntry__link">MODELS</button>
                    </li>
                    <li className="MainMenuEntry">
                      <a href="https://boutique.alpinecars.com/?utm_source=AlpineBou&utm_medium=referral&utm_campaign=FR">
                        <button className="MainMenuEntry__link">SHOP</button>
                      </a>
                    </li>
                    <div className="HeaderButtons">
                      <a
                        title="Our Network"
                        className="HeaderButtons__button"
                        href="https://www.alpine-cars.co.uk/alpine-centers.html"
                      >
                        <div className="HeaderButtons__text">
                          <img
                            className="izquierda"
                            src="https://icones.pro/wp-content/uploads/2021/02/icone-de-localisation-noire.png"
                          />
                          Our network
                        </div>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="SubNav">
            <div className="Sentinel__top" style={{ top: '0px' }}></div>
            <div className="SubNav__wrapper">
              <div className="SubNav__content">
                <ul className="SubNav__links">
                  <li className="SubNav__linkItem">
                    ::before
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1.html"
                    >
                      Formula 1
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/f1-news.html"
                    >
                      F1 News
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/championship.html"
                    >
                      2023 Season
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/f1-team.html"
                    >
                      F1 Team
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/a523.html"
                    >
                      A523
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/f1-partners.html"
                    >
                      Partners
                    </a>
                  </li>
                  <li className="SubNav__linkItem">
                    <a
                      title
                      className="SubNav__link"
                      href="https://www.alpine-cars.co.uk/formula-1/alpine-academy.html"
                    >
                      The Academy
                    </a>
                  </li>
                </ul>
                <div className="SubNav__buttons">
                  <a
                    href="https://www.alpine-cars.co.uk/careers.html"
                    className="SubNav__button Button_superPrimary button"
                  >
                    {' '}
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </body>
  )
}

export default BarraInicial
