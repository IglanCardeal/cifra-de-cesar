import React, { Component } from 'react';
import style from './App.module.css';

// Componentes
import { InputText } from '../components/inputText/InputText';
import { OutputText } from '../components/outputText/OutputText';
import { OriginalText } from '../components/originalText/OriginalText';
import { Main } from '../components/main/Main';

class App extends Component {
  state = {
    text: '',
  }

  inputTextHandler = event => {
    this.setState({
      text: event.target.value,
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
      <div className={style.App}>
        <Main />
        <InputText change={event => this.inputTextHandler(event)} />
        {originalText}
        {cryptedText}
      </div>
    );
  }
}

export default App;
