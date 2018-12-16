import React from 'react';
import style from './OriginalText.module.css';

const originalText = props => (
  <div className={ style.OriginalText }>
    <h2>Texto original</h2>
    <p>
      { props.text }
    </p>
  </div>
)

export default originalText;
