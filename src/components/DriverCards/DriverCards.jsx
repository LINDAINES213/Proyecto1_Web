import { useState } from 'react'
import './DriverCards.css'

const DriverCards = () => {
   
    const [count, setCount] = useState(0)
    return (
        <div className='container' style={{top: '300px'}}>
            <div className='card'>
                <a href="https://www.alpine-cars.co.uk/formula-1/f1-team/pierre-gasly.html"><img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-home-01.jpg.ximg.largex2.webp/0c66b32b9c.webp"/>
                <h4>PIERRE GASLY</h4>
                <p>Find out more  &gt;</p></a>
            </div>
            <div className='card'>
                <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/esteban-ocon.html'><img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-home-02.jpg.ximg.largex2.webp/197ab4306e.webp"/>
                <h4>ESTEBAN OCON</h4>
                <p>Find out more  &gt;</p></a>
            </div>
            <div className='card'>
                <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/jack-doohan.html'><img src="https://cdn.group.renault.com/alp/master/alpine-new-cars/editorial/racing-f1/2023/alpine-F1-pilote-05.jpg.ximg.largex2.webp/2a5ba6c72d.webp"/>
                <h4>JACK DOOHAN</h4>
                <p>Find out more  &gt;</p></a>
            </div>
        </div>
    )
}

export default DriverCards