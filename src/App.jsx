import { useState } from 'react'
import './App.css'
import InputFilm from './components/inputFilm'
import TitlePage from './components/titlePage'
import NavbarPage from './components/navbarPage'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { FaCircle } from "react-icons/fa6";



//API
const API_KEY = '36f0395abc3500cf095451af07ed4080'
const API_CALL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query='
const API_IMG = 'https://image.tmdb.org/t/p/w300/'
//https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=36f0395abc3500cf095451af07ed4080
function App() {
  //MODAL
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  const [dataFilm, setDataFilm] = useState(null)

  const searchFilm = async (film) => {
      try {
        const response = await fetch(`${API_CALL_SEARCH}${film}${'&api_key='}${API_KEY}`);
        if (!response.ok){ 
          throw new Error('Error en la solicitud a la API')
        }
        const dataFilm = await response.json()
        modalDataFilm(dataFilm)
      } catch (error) {
        setDataFilm(null);
        alert("No data for this film");
      }
  }
 
  const modalDataFilm = (dataFilm) => {
    //console.log("a");
    setShowModal(true);
    console.log(dataFilm['results'][0]['original_title']);
    setDataFilm(dataFilm);
  }

  return (
    <> 
      <NavbarPage />
      <TitlePage />
      <InputFilm searchFilm={searchFilm}/>
      {
        dataFilm && (
          <div className='modalFilm'>
            <Modal show={showModal} onHide={handleClose} size='lg'>
              <Modal.Header style={{backgroundColor: "black", color: "white"}}>
                <Modal.Title style={{color: "#a78BFa"}}>{dataFilm['results'][0]['original_title']}</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{backgroundColor: "black", color: "white"}}>      
                <ul>
                  <div>
                    <img style={{width: "200px"}} src={`${API_IMG}${dataFilm['results'][0]['poster_path']}`}/>
                    <h5 style={{color: "#a78BFa", marginLeft: "25px", fontFamily: "sans-serif", fontWeight: "bold"}}>{dataFilm['results'][0]['overview']}</h5>
                  </div>
                    <li>
                      <h3>score: {Math.floor(dataFilm['results'][0]['vote_average'])}</h3>
                    </li>
                </ul>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor: "black", color: "white"}}>
                <Button variant='light' onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      }
    </>
  )
}

export default App
