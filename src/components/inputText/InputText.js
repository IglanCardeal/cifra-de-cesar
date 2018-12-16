import React from 'react';
import style from './InputText.module.css';

const inputText = props => {
  return (
    <div className={ style.InputText }>
      <p>
        Você pode escrever e ver abaixo o texto original e o texto criptografado. Não utilize caracteres acentuados ou especiais no seu texto.
      </p>
      <p>
        <label htmlFor="input-text">Digite algo:</label>
        <input type="text" id="input-text" onChange={ props.change }/>
      </p>
    </div>
  )
}

export default inputText;
