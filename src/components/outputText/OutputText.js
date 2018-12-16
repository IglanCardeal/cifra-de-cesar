import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './Output.module.css';

import Encrypter from './encrypter/Encrypter';

const outputText = props => {
  return (
    <Wrapper>
      <h2>Texto criptografado</h2>
      <p>
        {Encrypter(props.text)}
      </p>
    </Wrapper>
  )
}
 export default classes(outputText, style.OutputText);
