import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './Output.module.css';

import Encrypter from './encrypter/Encrypter';

const outputText = ({text}) => {
  let cryptedText = Encrypter(text);
  return (
    <Wrapper>
      <h2>Texto criptografado</h2>
      <p>
        { cryptedText }
      </p>
    </Wrapper>
  )
}
 export default classes(outputText, style.OutputText);
