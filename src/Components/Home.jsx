import Carousleone from './Carousleone';
import Carousletwo from './Carousletwo';
import Carouslethree from './Carouslethree';
function Home() {
    return (
        <>
            <div className="container">
                <h1 className="text-center">It is Home Page</h1>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            < Carousleone />
            <br></br>
            <hr></hr>
            <br></br>
            <Carousletwo />
            <br></br>
            <hr></hr>
            <br></br>
            <Carouslethree />
            <br></br>
            <hr></hr>
            <br></br>
            </>
    );
}

export default Home;
