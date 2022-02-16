import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import MovieList from '../MovieList/MovieList'
function Home() {
    const [data, setData] = useState([]);
    const getAllMovies = async () => {
        return await axios.get(`https://movie-reham.herokuapp.com/trending`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, []);
    return (
        <>
            <MovieList moviedata={data} />

        </>
    )
}
export default Home;