import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import './FavList.css';
import UpdateModal from './updateModal'


function FavList(){
    const [data, setData] = useState([]);
    const [show,setShow] = useState(false);
    const [ele,setEle] = useState({});

    const [title,setTitleInput] = useState("");
    const [image,setImageInput] = useState("");
    const [comment,setCommentInput] = useState("");

    const handleClose = ()=> setShow(false);

    const getFavMovies = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        return await axios.get(`https://movie-reham.herokuapp.com/getMovies`)
            .then(result => {
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
         getFavMovies();
    },[]);


    const deleteFromFav = async(id) =>{
        await axios.delete(`https://movie-reham.herokuapp.com/delete/${id}`)
                   .then(()=>{
                       console.log("deleted :(")
                      getFavMovies();
                   }).catch((err)=>{
                       console.log(err);
                   })
    } 

    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((ele) => (
                    <Col key={ele.id} md={4}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w300/${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                <Card.Link className='div-card-link'>
                                    {ele.sourceUrl}
                                </Card.Link>
                                <Card.Text >
                                {ele.comment}
                                </Card.Text>
                                <div>
                                    <Button className='div-card-button' variant="primary"
                                       onClick={()=>{
                                           setShow(true)
                                           setEle(ele);
                                           setTitleInput(ele.title);
                                           setCommentInput(ele.comment);
                                           setImageInput(ele.image);
                                        }}
                                    >Update</Button>
                                    <Button className='div-card-button' variant="danger" 
                                      onClick={()=>deleteFromFav(ele.id)}
                                    >Delete</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>

    {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

    {
       <UpdateModal show={show} handleClose={handleClose} ele={ele} getFavMovies={getFavMovies}
      
      
      titleInput={title}
       setTitleInput= {setTitleInput}
      imageInput ={image}
      setImageInput = {image}
      commentInput = {comment}
      setCommentInput ={setCommentInput}
      
      /> 
     }

</>
    )
}

export default FavList;