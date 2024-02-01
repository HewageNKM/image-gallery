import {ImageCard} from "../components/index.js";
import {useEffect, useState} from "react";
import {l_arrow, r_arrow} from "../assets/index.js";

const Popular = () => {
    let [imageIndex, setImageIndex] = useState(0)
    let [cards, setCards] = useState([]);
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos?order_by=popular&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`)
            .then(response => response.json())
            .then(data => {
                setCards(cards = data)
                console.log(cards);
            }).catch(error => console.log(error));
    }, []);

    function nextImg() {
        if (imageIndex < cards.length - 1) {
            setImageIndex(imageIndex += 1)
        } else {
            setImageIndex(imageIndex = 0)
        }
        console.log(imageIndex)
    }

    function previousImg() {
        if (imageIndex > 0) {
            setImageIndex(imageIndex -= 1)
        } else {
            setImageIndex(imageIndex = 0)
        }
        console.log(imageIndex)
    }

    return (
        <div>
            <h1 className="text-xl md:text-5xl font-bold xl:text-7xl flex justify-start items-center">Popular</h1>
            <div
                className="flex flex-col space-y-2 md:space-x-2 md:flex-row justify-center items-center relative md:p-10 p-5"
            >

                <ImageCard URL={cards[imageIndex]?.urls.regular} description={cards[imageIndex]?.alt_description}/>
                <button className="absolute md:bottom-[50%] bottom-[25vh] left-7 md:left-11" onClick={previousImg}>
                    <img src={l_arrow} alt="l_arrow" className="md:w-[30px] w-[25px]"/>
                </button>
                <button className="absolute md:bottom-[50%] bottom-[25vh] right-7 md:right-12" onClick={nextImg}>
                    <img src={r_arrow} alt="r_arrow" className="md:w-[30px] w-[25px]"/>
                </button>
            </div>
        </div>
    );
}
export default Popular