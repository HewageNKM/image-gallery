import {useEffect, useState} from "react";
import {Category} from "../components/index.js";

const ByCategory = () => {
    let [page, setPage] = useState(1)
    let [categories, setCategories] = useState([]);
    let [shouldFetchData, setShouldFetchData] = useState(true);
    let URL = `https://api.unsplash.com/topics?page=${page}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`

    useEffect(() => {
        console.log("useEffect called "+page+" times");
        if (shouldFetchData) {
            console.log("Fetching data");
            fetch(URL)
                .then(response => response.json())
                .then(data => {
                    console.info(data);
                    if(data.length > 0){
                        setCategories(categories = data)
                    }else {
                        setPage(page -= 1)
                    }
                    setShouldFetchData(false)
                }).catch(error => console.error(error));
        }
    }, [shouldFetchData]); // Only re-runs when shouldFetchData changes

    function setPageCountMinus() {
        if (page > 1) {
            setPage(page -= 1)
            setShouldFetchData(true)
        }
    }

    function setPageCountAdd() {
        setPage(page += 1)
        setShouldFetchData(true)
    }

    return (
        <div>
            <h1 className="text-xl md:text-5xl font-bold xl:text-7xl flex justify-center mb-14">By
                Category</h1>
            <div className="p-5">
                <ul className="grid xl:grid-cols-5 xl:grid-rows-2 gap-5 mx-auto relative md:grid-cols-3 md:grid-rows-7 sm:grid-cols-3 md:md:grid-rows-8">
                    {categories.map((category, index) => {
                        return (
                            <li key={index}>
                                <Category title={category.title} URL={category.cover_photo.urls.regular}
                                          description={category.description}/>
                            </li>
                        )
                    })
                    }
                </ul>
                <div className="flex gap-3 justify-center items-center pt-10">
                    <button className="bg-black text-white rounded-full p-2 px-4 w-24"
                            onClick={setPageCountMinus}>Previous
                    </button>

                    <button className="bg-black text-white rounded-full p-2 px-4 w-24"
                            onClick={setPageCountAdd}>Next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ByCategory