import React from 'react';
import Wrapper from '../../hoc/wrapper';
import classes from '../../hoc/classes';
import style from './InputText.module.css';

class InputText extends React.Component {
  componentDidMount() {
    this.focusOnElement.focus();
  }

  render() {
    return (
      <Wrapper>
        <p>
          Você pode escrever e ver abaixo o texto original e o texto criptografado. Não utilize caracteres acentuados ou especiais no seu texto.
        </p>
        <p>
          <label htmlFor="input-text">Digite algo:</label>
          <input ref={element => {this.focusOnElement = element}} type="text" id="input-text" onChange={ this.props.change }/>
        </p>
      </Wrapper>
    )
  }
}

export default classes(InputText, style.InputText);
