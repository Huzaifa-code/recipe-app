import React from 'react'
import styled from 'styled-components';
import {useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/Searched/'+ input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch/>
        <input onChange={ (e) => { setInput(e.target.value) }} type="text" value={input} />
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0 6rem;

  @media only screen and (max-width: 600px){
    margin: 0 0;
  }

  div{
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient( 35deg, #494949, #313131);
    font-size: 1rem;
    color: #fff;
    padding: 0.7rem  3rem;
    width: 100%;
    border-none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;

  }
`;

export default Search