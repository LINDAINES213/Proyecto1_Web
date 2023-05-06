import { useState } from 'react'
import './BigCards.css'

const BigCard = () => {
   
    const [count, setCount] = useState(0)
    
    return (
        <div className="BigCards">
            <br/>
            <br/>
            <br/>
            <div className='containerB'>
                <div className='cardB'>
                    <a href='https://boutique.alpinecars.com/?gclid=EAIaIQobChMI1aCXxP_2_AIVielRCh1J-gsrEAAYASAAEgLmCfD_BwE'><img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-08.jpg.ximg.mediumx2.webp/49262ebefc.webp"/>
                    <h4>SHOP</h4></a>
                </div>
                <div className='cardB'>
                    <a href='https://www.alpine-cars.co.uk/careers.html'><img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-09.jpg.ximg.mediumx2.webp/f6fef19c08.webp"/>
                    <p>CAREERS</p></a>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default BigCard