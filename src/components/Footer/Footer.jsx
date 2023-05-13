/* eslint-disable max-len */
import React from 'react'
import './Footer.css'

const Footer = () => {
  const topFunction = () => {
    // eslint-disable-next-line no-undef
    document.body.scrollTop = 0 // Para navegadores Safari
    // eslint-disable-next-line no-undef
    document.documentElement.scrollTop = 0 // Para otros navegadores
  }

  return (
    <div className="Footer">
      <div className="containerF">
        <button onClick={topFunction}>return to top</button>
      </div>
      <div className="containerF2">
        <div className="columnas">
          <ul>
            <li>
              <p>Customer Suport</p>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/contact-us.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Contact Alpine
              </a>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/contact-us/customer-support.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Servicing and maintenance
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Other Sites</p>
            </li>
            <li>
              <a
                href="https://www.alpinecars.com/"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                AlpineCars.com
              </a>
            </li>
            <li>
              <a
                href="https://en.media.alpinecars.com/"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Media Area
              </a>
            </li>
            <li>
              <a
                href="https://www.alpineelfeuropacup.com/"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Alpine Elf Europa Cup
              </a>
            </li>
            <li>
              <a
                href="https://www.alpine-eyewear.com/"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Alpine Eyewear
              </a>
            </li>
            <li>
              <a
                href="https://boutique.alpinecars.com/"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Shop
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p>Careers</p>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/careers.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Our offers
              </a>
            </li>
          </ul>
          <ul>
            <br />
            <br />
            <li>
              <p>Direct Links</p>
            </li>
            <li>
              <a
                href="https://config.alpinecars.com/gb/en.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Configurator
              </a>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/contact-us/book-a-test-drive.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Book a test drive
              </a>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/contact-us/finance-request.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Financing request
              </a>
            </li>
            <li>
              <a
                href="https://www.alpine-cars.co.uk/contact-us/newsletter.html"
                style={{ fontSize: '0.8rem', color: '#000' }}
              >
                Sign up for the newsletter
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p>The #AlpineCars experience continues on</p>
            </li>
            <br />
          </ul>
          <ul className="containerImagenes">
            <a href="https://fr-fr.facebook.com/alpinesportscars/">
              <img src="https://cdn-icons-png.flaticon.com/256/59/59439.png"></img>
            </a>
            <a href="https://twitter.com/AlpineF1Team?s=20&t=HaDDdmh5jRqowXRevmR_aQ">
              <img src="https://img.freepik.com/iconos-gratis/gorjeo_318-788985.jpg"></img>
            </a>
            <a href="https://www.instagram.com/alpinecars/?hl=fr">
              <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img>
            </a>
            <a href="https://www.youtube.com/channel/UCzH4Iwlm8kI09wXbgHvFfIg">
              <img src="https://icones.pro/wp-content/uploads/2021/02/youtube-logo-icone-noir.png"></img>
            </a>
          </ul>
          <br />
          <br />
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="containerF3">
        <ul>
          <a href="https://www.alpine-cars.co.uk/data-privacy.html">
            <li>Personal data</li>
          </a>
          <li>|</li>
          <a href="https://www.alpine-cars.co.uk/legal-mentions.html">
            <li>Legal Information</li>
          </a>
          <li>|</li>
          <a href="https://www.alpine-cars.co.uk/cookies.html">
            <li>Cookies</li>
          </a>
          <li>|</li>
          <a>
            <li>Manage my cookies</li>
          </a>
          <li>|</li>
          <a href="https://cdn.group.renault.com/alp/uk/pdf/brochures/Gender-Pay-Gap-Report-2022.pdf.asset.pdf/1261d6e196.pdf">
            <li>Gender Pay Report</li>
          </a>
        </ul>
        <span>© Alpine 2017 - 2023</span>
      </div>
    </div>
  )
}

export default Footer
