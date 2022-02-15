import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
// import './Home.css';
import MovieList from './MovieList'


function Home() {
    const [data, setData] = useState([]);





    const getAllMovies = async () => {

        return await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=767d2494bac3fb508e3071015b4a3c09`)
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