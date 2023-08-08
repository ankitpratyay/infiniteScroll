import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
    const [infos, setInfos] = useState([]);
    const [page, setPage] = useState(1);
    const getPhotos = async () => {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts?limit=9&_page=${page}`);
        setInfos((pre) => [...infos, ...data.data])

    }
    const handleScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((prev) => prev + 1)
            }

        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        getPhotos();
    }, [page])
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <div >
            <div className="Header">Infinite Scroll</div>
            <div className="Container">
                {
                    infos.map((info, ind) => {
                        return (
                            <Card info={info} key={ind} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home;