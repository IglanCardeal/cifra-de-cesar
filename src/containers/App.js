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
    let newText = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        text: newText,
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <Main />
        <InputText change={event => this.inputTextHandler(event)} />
        <OriginalText text={this.state.text} />
        <OutputText text={this.state.text} />
      </Wrapper>
    );
  }
}

export default classes(App, style.App);
