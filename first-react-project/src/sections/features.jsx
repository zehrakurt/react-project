import Cards from "../component/cards"
import myImage from "../../public/image/0.jpg";
import myClean from "../../public/image/cleansing.jpg";
import myTonic from "../../public/image/tonic.jpg";
import myMoust from "../../public/image/moust.jpg";
import mySun from "../../public/image/sun.jpg";
import myEye from "../../public/image/eye.jpg";
import { Bs1Square, Bs2Square, Bs3Square, Bs4Square, Bs5Square, Bs6Square } from "react-icons/bs";
const Features = () => {
    return (
        <section className="pt-4">
            <div className="container px-lg-5">

                <div className="row gx-lg-5">
                    <Cards title={"Makeup Removal"} description={"Use a makeup remover product to gently clean your skin and remove all traces of makeup, including eye makeup."} icon={<Bs1Square />} image={myImage} />
                    <Cards title={"Cleansing"} description={"Wash your face with a cleanser after removing makeup. Choose a cleanser suitable for your skin type, apply it to your face, and rinse with water."} icon={<Bs2Square />} image={myClean} />
                    <Cards title={"Toning"} description={"Use a toner or facial mist to cleanse and balance your skin. Toner helps to regulate your skin's pH balance and tighten pores."} icon={<Bs3Square />} image={myTonic} />
                    <Cards title={"Moisturizing"} description={" Apply a moisturizer to your cleansed skin. Moisturizing helps to maintain your skin's hydration levels and leaves your skin soft and smooth."} icon={<Bs4Square />} image={myMoust} />
                    <Cards title={"Sun Protection"} description={"Apply sunscreen whenever you go out during the day. Sunscreen protects your skin from the harmful effects of the sun and prevents premature aging."} icon={<Bs5Square />} image={mySun} />
                    <Cards title={"Eye Care"} description={"Use a specialized eye cream or serum to reduce fine lines and dark circles around the eyes."} icon={<Bs6Square />} image={myEye} />


                </div>
            </div>
        </section>
    )
}

export default Features