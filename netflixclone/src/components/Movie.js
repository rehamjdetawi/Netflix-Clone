import { Button, Card, Col } from 'react-bootstrap';
import ModalMovie from './ModalMovie';
import { useState } from 'react';

function Movie(props) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (


        <>



            <Col key={props.eleme.id} md={4}>
                <Card className='div-card'>
                    <Card.Img className='div-card-img' variant="top" src={props.eleme.poster_path} />
                    <Card.Body>
                        <Card.Title className='div-card-title'>{props.eleme.title}</Card.Title>
                        <Card.Text className='div-card-link'>
                            {props.eleme.overview}
                        </Card.Text>
                        <div>
                            <Button className='div-card-button' variant="primary"
                                onClick={() => {
                                    setCardInfo(props.eleme)
                                    setShow(true);
                                }}
                            >Add To Favorite</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            {
                <ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
        </>




    )





}
export default Movie