import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import "../styles/inputFilm.css"

const InputFilm = () => {
  return (
    <div className='inputContainer'>
      <InputGroup style={{ width: '300px'}} className='inputGroup'>
        <Form.Control
          placeholder="Insert film..."
          className="inputFilm"
        />
        <Button variant="outline-secondary" id="button-addon2" className='searchButton'>
          <FaSearch color="#a78BFa"/>
        </Button>
      </InputGroup>
    </div>
  );
}

export default InputFilm