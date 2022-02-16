import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// import {useState} from 'react';
import axios from 'axios';

function UpdateModal( {show,handleClose,ele,getFavMovies,
    titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput
}){    

    console.log(titleInput);
    const update = async(id)=>{

        let updated = {title:titleInput, poster_path:ele.poster_path, release_date:ele.release_date, overview:ele.overview,comment:commentInput}
        
      await axios.put(`https://movie-reham.herokuapp.com/Update/${id}`,updated)
                  .then(()=>{
                    getFavMovies();
                  }).catch(err=>{
                      console.log(err);
                  })
    }
     

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <textarea value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
                        update(ele.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;









