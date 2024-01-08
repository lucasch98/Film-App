import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import "../styles/inputFilm.css"
import { useState } from 'react';

const InputFilm = ({ searchFilm }) => {
  const[text, setText] = useState("");

  const handleInput = (event) => {
    setText(event.target.value);
  }

  const handleSearchFilm = (event) => {
    event.preventDefault();
    if(text != ""){
      searchFilm(text);
    }else{
      alert("Type any movie")
    }
  }

  return (
    <div className='inputContainer'>
      <form id='formInputId' onSubmit={handleSearchFilm}>
        <InputGroup style={{ width: '300px'}} className='inputGroup' onSubmit={handleSearchFilm} onChange={handleInput}>
          <Form.Control
            placeholder="Insert film..."
            className="inputFilm"
            />
            <Button type='submit' variant="outline-secondary" id="button-addon2" className='searchButton'>
              <FaSearch color="#a78BFa"/>
            </Button>
        </InputGroup>
      </form>
    </div>
  );
}

export default InputFilm