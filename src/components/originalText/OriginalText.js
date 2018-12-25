import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './OriginalText.module.css';

const originalText = ({text}) => {
  return (
    <Wrapper>
      <h2>Texto original</h2>
      <p>
        { text }
      </p>
    </Wrapper>
  )
}

export default classes(originalText, style.OriginalText);
