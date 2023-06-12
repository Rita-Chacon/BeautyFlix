import './Banner.css';

import VideoCard from '../Carousel/VideoCard/VideoCard';

function Banner() {
    return (
        <section className='banner'>
            <div className='banner__container'>
                <div className='info__banner'>
                <center><h3 className='title__banner'>Challenge ONE React</h3></center>
                <p className='paragraph__banner'>Este desafio se realiza para poder dar a conocer los conocimientos adquiridos en React.</p>
                </div>
            </div>
        </section>
    )
}

export default Banner;