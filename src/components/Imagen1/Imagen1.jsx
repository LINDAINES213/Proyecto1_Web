import { useState } from 'react'
import './Imagen1.css'

const Imagen1 = () => {
   
    const [count, setCount] = useState(0)
    return (
            <div className='LastImage'>
                <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-01%20desktop.jpg.ximg.largex2.webp/41d3ee4cc8.webp"/>
                <h1 className='RacingHeader__title'>BWT Alpine F1 Team</h1>
            </div>
  )
}

export default Imagen1