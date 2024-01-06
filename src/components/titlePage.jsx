import '../styles/titlePage.css'
import { PiFilmReelBold } from "react-icons/pi";

const titlePage = () => {
  return(
    <div className='titlePageRow'>  
      <h1 className='titlePage'>
        <PiFilmReelBold color="#a78BFa" className='filmIcon'/>
        Find information about the <span className='spanTitle'>movie</span> 
        you're looking for here  
      </h1>
    </div>
  );
}

export default titlePage