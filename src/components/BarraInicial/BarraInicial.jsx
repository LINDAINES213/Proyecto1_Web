import { useState } from 'react'
import './BarraInicial.css'

const BarraInicial = () => {
    // url imagen ocon, gasly https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-01%20desktop.jpg.ximg.largex2.webp/41d3ee4cc8.webp
    const [count, setCount] = useState(0)
    return (
        <body>
            <link href="//db.onlinewebfonts.com/c/2566fcbfa72212c1cadad4627e4998e2?family=Megabyte" rel="stylesheet" type="text/css"/>
            <header className='BarraInicial'>
                <div className='BarraInicial_desktop'>
                    <div className='BarraInicial_content'>
                        <a title className='BarraInicial_logo'>
                            <img src="https://cdn.cookielaw.org/logos/1058e0b9-ee95-4d43-8292-3dae40ce5c3c/b4f83c83-bbed-4615-94dd-e1db19ab289e/d93ec308-72e0-452b-aa87-506f7e2a88e1/Alpine_logo_name.png"/>
                        </a>
                        <div className='BarraInicial_bottom'>
                            <div className='MainMenu is-visible'>
                                <ul className='MainMenu__navList'>
                                    <li className='MainMenuEntry'>
                                        <button className='MainMenuEntry__link'>F1</button>
                                    </li>
                                    <li className='MainMenuEntry'>
                                        <button className='MainMenuEntry__link'>RACING</button>
                                    </li>
                                    <li className='MainMenuEntry'>
                                        <button className='MainMenuEntry__link'>ALPINE WORLD</button>
                                    </li>
                                    <li className='MainMenuEntry'>
                                        <button className='MainMenuEntry__link'>MODELS</button>
                                    </li>
                                    <li className='MainMenuEntry'>
                                        <button className='MainMenuEntry__link'>SHOP</button>
                                    </li>
                                    <div className='HeaderButtons'>
                                        <a title="Our Network" className='HeaderButtons__button' href="https://www.alpine-cars.co.uk/alpine-centers.html">
                                            <div className='HeaderButtons__icon'></div>
                                            <div className='HeaderButtons__text'>Our network</div>
                                        </a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SubNav'>
                    <div className='Sentinel__top' style={{top: '0px'}}></div>
                    <div className='SubNav__wrapper'>
                        <div className='SubNav__content'>
                            <ul className='SubNav__links'>
                                <li className='SubNav__linkItem'>
                                    ::before
                                    <a title className='SubNav__link' href="/formula-1.html">Formula 1</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">F1 News</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">2023 Season</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">F1 Team</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">A523</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">Partners</a>
                                </li>
                                <li className='SubNav__linkItem'>
                                    <a title className='SubNav__link' href="/formula-1.html">The Academy</a>
                                </li>
                            </ul>
                            <div className='SubNav__buttons'>
                                <button className='SubNav__button Button_superPrimary'>Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </body>
    
  )
}

/**
 * <div className='ContentZone ContentZone__submenu'>
                <div className='SubNav'>
                    <div className='Sentinel__top' style="top:0px"></div>
                    <div className='SubNav__wrapper'>
                        <div className='SubNav__content'>
                            <ul className='SubNav__links'>
                                <li className='SubNav__linkItem'>
                                    ::before
                                    <a title className='SubNav__link' href="/formula-1.html">Formula 1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
 */

export default BarraInicial