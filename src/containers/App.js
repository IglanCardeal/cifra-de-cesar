import React, { Component } from 'react';
import Wrapper from '../hoc/wrapper';
import classes from '../hoc/classes';
import style from './App.module.css';
// Componentes
import  InputText  from '../components/inputText/InputText';
import  OutputText  from '../components/outputText/OutputText';
import  OriginalText  from '../components/originalText/OriginalText';
import  Main  from '../components/main/Main';

class App extends Component {
  state = {
    text: '',
  }

  inputTextHandler = event => {
    this.setState({
      text: event.target.value.toLowerCase(),
    })
  }

  render() {
    let originalText = null;
    let cryptedText = null;
    let hasText = this.state.text.length > 0 ? true : false;

    if (hasText) {
      originalText = (
        <OriginalText text={this.state.text} />
      )
      cryptedText = (
        <OutputText text={this.state.text} />
      )
    }

    return (
      <Wrapper>
        <Main />
        <InputText change={event => this.inputTextHandler(event)} />
        {originalText}
        {cryptedText}
      </Wrapper>
    );
  }
}

export default classes(App, style.App);
