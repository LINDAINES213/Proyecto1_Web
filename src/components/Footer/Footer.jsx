import { useState } from 'react'
import './Footer.css'

const Footer = () => {

    const topFunction = () => {
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para otros navegadores
    }
   
    const [count, setCount] = useState(0)
    
    return (
        <div className="Footer">
            <div className='containerF'>
                <button onClick={topFunction}>return to top</button>   
            </div>
            <div className='containerF2'>
                <div className="columnas">
                    <ul>
                        <li><p>Customer Suport</p></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us.html' style={{fontSize: '0.8rem', color:'#000'}}>Contact Alpine</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Servicing and maintenance</a></li>
                    </ul>
                    <ul>
                        <li><p>Other Sites</p></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us.html' style={{fontSize: '0.8rem', color:'#000'}}>AlpineCars.com</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Media Area</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Alpine Elf Europa Cup</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Alpine Eyewear</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Shop</a></li>
                    </ul>
                    <ul>
                        <li><p>Careers</p></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us.html' style={{fontSize: '0.8rem', color:'#000'}}>Our offers</a></li>
                    </ul>
                    <ul>
                        <li><p>Direct Links</p></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us.html' style={{fontSize: '0.8rem', color:'#000'}}>Configurator</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Book a test drive</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us.html' style={{fontSize: '0.8rem', color:'#000'}}>Financing request</a></li>
                        <li><a href='https://www.alpine-cars.co.uk/contact-us/customer-support.html' style={{fontSize: '0.8rem', color:'#000'}}>Sign up for the newsletter</a></li>
                    </ul>
                    <ul>
                        <li><p>The #AlpineCars experience continues on</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                
            </div>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Footer

/**
 * <div className='FooterColumns'>
                    <div className='FooterColumn Footer__column' role="button">
                        <p>Customer Suport</p>
                        <ul className="FooterColumn__linksList">
                            <li>
                                <a title="Contact Alpine" href="https://www.alpine-cars.co.uk/contact-us.html">Contact Alpine</a>
                            </li>
                            <li>
                                <a title="Contact Alpine" href="https://www.alpine-cars.co.uk/contact-us/customer-support.html">Servicing and maintenance</a>
                            </li>
                        </ul>
                    </div>
                </div>
 */

