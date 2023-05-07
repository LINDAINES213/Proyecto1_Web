import { useState } from 'react'
import './ManagementCards.css'

const ManagementCards = () => {
   
    const [count, setCount] = useState(0)
    
    return (
        <div className="ManagementCards">
            <h1>MANAGEMENT</h1>
            <br/><br/><br/><br/>
            <div className='containerM'>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-02.jpg.ximg.largex2.webp/e190c80ab0.webp"/>
                    <h4>Laurent Rossi</h4>
                    <h3>Alpine CEO </h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/laurent-rossi.html'><p>find out more  &gt;</p></a>
                </div>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-03.jpg.ximg.largex2.webp/0282a75e5c.webp"/>
                    <h4>Otmar Szafnauer</h4>
                    <h3>Team Principal </h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/otmar-szafnauer.html'><p>find out more  &gt;</p></a>
                </div>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-04.jpg.ximg.largex2.webp/fc3ce4371a.webp"/>
                    <h4>Pat Fry</h4>
                    <h3>Chief Technical Officer </h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/pat-fry.html'><p>find out more  &gt;</p></a>
                </div>
            </div>
            <br/><br/><br/>
            <div className='containerM'>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-05.jpg.ximg.largex2.webp/0e6654b5ab.webp"/>
                    <h4>Matt Harman</h4>
                    <h3>Technical Director </h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/matt-harman.html'><p>find out more  &gt;</p></a>
                </div>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-06.jpg.ximg.largex2.webp/da7452f6e4.webp"/>
                    <h4>Bruno Famin</h4>
                    <h3>Executive Director, Viry-Châtillon</h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/bruno-famin.html'><p>find out more  &gt;</p></a>
                </div>
                <div className='cardM'>
                    <img src="https://cdn.group.renault.com/alp/master/formula-1/alpine-F1-equipe-07.jpg.ximg.largex2.webp/88cace6909.webp"/>
                    <h4>Davide Brivio</h4>
                    <h3>Director of Racing Expansion Projects </h3>
                    <a href='https://www.alpine-cars.co.uk/formula-1/f1-team/davide-brivio.html'><p>find out more  &gt;</p></a>
                </div>
            </div>
        </div>
    )
}

export default ManagementCards
