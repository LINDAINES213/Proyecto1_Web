import { useState } from 'react'
import './Texto1.css'

const Texto1 = () => {
   
    const [count, setCount] = useState(0)
    return (
        <div className='SectionTitle'>
            <div className='Component4v0'>
                <div className='Component4v0__content'>
                    <p className='Component4v0__strapline'>TEAM</p>
                    <h2 className='Component4v0__title'>OUR DRIVERS</h2>
                    <div className='Component4v0__body'>
                        <p>For 2023, Esteban Ocon is joined by compatriot Pierre Gasly to form an all-</p>
                        <p>French pairing forged in the rustic lands of Normandy. The story of how our</p>
                        <p>two drivers have come together at this stage of their careers is</p>
                        <p>compelling, venturing a long way from their days as aspiring go-kart</p>
                        <p>drivers at the age of ten.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Texto1