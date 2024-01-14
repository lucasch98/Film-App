import { useState } from 'react'
import './App.css'
import InputFilm from './components/inputFilm'
import TitlePage from './components/titlePage'
import NavbarPage from './components/navbarPage'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PiMedalFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";
import { PiFilmSlateBold } from "react-icons/pi";


//API TDB
const API_KEY = '36f0395abc3500cf095451af07ed4080'
const API_CALL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query='
const GENRE_URL = 'https://api.themoviedb.org/3/movie/'
const API_IMG = 'https://image.tmdb.org/t/p/w300/'

//API OMDB
const API_KEY_OMDB = 'da253a7b'
const API_CALL_OMDB_SEARCH = 'https://www.omdbapi.com/?t='
//https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=36f0395abc3500cf095451af07ed4080
function App() {
  //MODAL
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  
  const [dataFilm, setDataFilm] = useState(null)
  const [genre, setGenre] = useState(null)

  const searchFilm = async (film) => {
      try {
        const response = await fetch(`${API_CALL_SEARCH}${film}${'&api_key='}${API_KEY}`);
        if (!response.ok){ 
          throw new Error('Error en la solicitud a la API')
        }
        const dataFilm = await response.json()
        if(dataFilm['results'].length === 0){
          throw new Error('Error en la solicitud a la API')
        }

        const responseGenre = await fetch(`${GENRE_URL}${dataFilm['results'][0]['id']}${'?api_key='}${API_KEY}`)
        const dataGenre = await responseGenre.json()
        setGenre(dataGenre['genres'][0]['name'])
        modalDataFilm(dataFilm)

      } catch (error) {
        setDataFilm(null);
        alert("No data for this film");
      }
  }
 
  const modalDataFilm = (dataFilm) => {
    setShowModal(true);
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
                <h3 className='titleModal'>{dataFilm['results'][0]['original_title']}</h3>
              </Modal.Header>
              <Modal.Body style={{backgroundColor: "black", color: "white"}}>  
                <div class="container mt-4">
                  <div class="row">
                    <div class="col-md-4 mb-4">
                      <img src={`${API_IMG}${dataFilm['results'][0]['poster_path']}`} class="img-fluid" alt="Foto"/>
                    </div>
                    <div className="col-md-8">
                      <h4><PiMedalFill style={{ color: "#a78BFa"}}/> {Math.floor(dataFilm['results'][0]['vote_average'])} Points</h4>
                      <h4><FaCalendarAlt style={{color: "#a78BFa"}}/> {dataFilm['results'][0]['release_date']}</h4>
                      <h4><FaFilm style={{color: "#a78BFa"}}/> {genre}</h4>
                      <h4><PiFilmSlateBold style={{color: "#a78BFa"}}/> {dataFilm['results'][0]['overview']}</h4>
                      <p></p>
                    </div>
                  </div>
                </div>
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
      <footer className="footerIndex"> 
        <p style={{color: "#a78BFa"}}>&copy; 2024 FilmApp</p>
      </footer>
    </>
  )
}

export default App
