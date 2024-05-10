import image1 from '../Images/01.jpg';
import image2 from '../Images/02.jpg';
import image3 from '../Images/03.jpg';
import image4 from '../Images/04.jpg';
import image5 from '../Images/05.jpg';
import image6 from '../Images/06.png';
import image7 from '../Images/07.jpg';
import image8 from '../Images/08.jpg';
import '../CSS/carousletwo.css';
function Carousletwo() {
    return (
        <>
            <h3 className='text-center'>Carousle Two ...</h3>
            <br></br>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carousletwo;
