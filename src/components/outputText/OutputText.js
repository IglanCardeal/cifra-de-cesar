import React from 'react';
import style from './Output.module.css';

import Encrypter from './encrypter/Encrypter';

const outputText = props => {
  return (
    <div className={ style.OutputText }>
      <h2>Texto criptografado</h2>
      <p>
        {Encrypter(props.text)}
      </p>
    </div>
  )
}
 export default outputText;
