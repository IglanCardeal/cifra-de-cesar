import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './Output.module.css';

import Encrypter from './encrypter/Encrypter';

const outputText = props => {
  let hasText = props.text.length > 0 ? true: false;
  let cryptedText = null;

  if(hasText){
    cryptedText = Encrypter(props.text);
    return (
      <Wrapper>
        <h2>Texto criptografado</h2>
        <p>
          { cryptedText }
        </p>
      </Wrapper>
    )
  }

  return null;
}
 export default classes(outputText, style.OutputText);
