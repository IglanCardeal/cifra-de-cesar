import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './OriginalText.module.css';

const originalText = props => {
  let text = null;
  let hasText = props.text.length > 0 ? true : false;

  if(hasText){
    text = props.text;
    return (
      <Wrapper>
        <h2>Texto original</h2>
        <p>
          { text }
        </p>
      </Wrapper>
    )
  }

  return null;
}

export default classes(originalText, style.OriginalText);
