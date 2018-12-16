import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './InputText.module.css';

const inputText = props => {
  return (
    <Wrapper>
      <p>
        Você pode escrever e ver abaixo o texto original e o texto criptografado. Não utilize caracteres acentuados ou especiais no seu texto.
      </p>
      <p>
        <label htmlFor="input-text">Digite algo:</label>
        <input type="text" id="input-text" onChange={ props.change }/>
      </p>
    </Wrapper>
  )
}

export default classes(inputText, style.InputText);
