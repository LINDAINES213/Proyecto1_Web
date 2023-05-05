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
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-08.jpg.ximg.mediumx2.webp/49262ebefc.webp"/>
                    <h4>SHOP</h4>
                </div>
                <div className='cardB'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-09.jpg.ximg.mediumx2.webp/f6fef19c08.webp"/>
                    <p>CAREERS</p>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}

export default BigCard