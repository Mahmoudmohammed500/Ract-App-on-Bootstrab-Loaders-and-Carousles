import image1 from '../Images/01.jpg';
import image2 from '../Images/02.jpg';
import image3 from '../Images/03.jpg';
import image4 from '../Images/04.jpg';
import image5 from '../Images/05.jpg';
import image6 from '../Images/06.png';
import image7 from '../Images/07.jpg';
import image8 from '../Images/08.jpg';
function Carousleone() {
    return (
        <>
        <h3 className='text-center'>Carousle One ...</h3>
        <br></br>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={image1} class="d-block w-100" alt="Image1" />
                    </div>
                    <div class="carousel-item">
                        <img src={image2} class="d-block w-100" alt="Image2" />
                    </div>
                    <div class="carousel-item">
                        <img src={image3} class="d-block w-100" alt="Image3" />
                    </div>
                    <div class="carousel-item">
                        <img src={image4} class="d-block w-100" alt="Image4" />
                    </div>
                    <div class="carousel-item">
                        <img src={image5} class="d-block w-100" alt="Image5" />
                    </div>
                    <div class="carousel-item">
                        <img src={image6} class="d-block w-100" alt="Image6" />
                    </div>
                    <div class="carousel-item">
                        <img src={image7} class="d-block w-100" alt="Image7" />
                    </div>
                    <div class="carousel-item">
                        <img src={image8} class="d-block w-100" alt="Image8" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousleone;
