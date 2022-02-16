import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie'
function MovieList(props) {

    return (

        <>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        props.moviedata.results && props.moviedata.results.map((ele) => (
                            <Movie eleme={ele} />
                        ))
                    }
                </Row>
            </Container>

            {
                !props.moviedata.results && <div><h2>No Such Results, Please try again later</h2></div>
            }

        </>
    )
}
export default MovieList;

