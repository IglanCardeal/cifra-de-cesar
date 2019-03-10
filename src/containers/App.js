/**
  * @cifradecesarApp
  * @author Iglan Cardeal
  * @githubrepository https://github.com/IglanCardeal/cifra-de-cesar
  * Aplicacao que criptografa um texto digitado pelo usuario baseado no conceito da cifra de Cesar.
  */

import React, { Component } from "react";
import Wrapper from "../hoc/wrapper";
import classes from "../hoc/classes";
import style from "./App.module.css";

// Componentes
import InputText from "../components/inputText/InputText";
import OutputText from "../components/outputText/OutputText";
import OriginalText from "../components/originalText/OriginalText";
import Main from "../components/main/Main";

class App extends Component {
  state = {
    text: ""
  };

  inputTextHandler = event => {
    let newText = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        text: newText
      };
    });
  };

  hasText = () => {
    let showOriginalText;
    let showOutputText;
    let textLength = this.state.text.length > 0 ? true : false;
    if (textLength) {
      showOriginalText = <OriginalText text={this.state.text} />;
      showOutputText = <OutputText text={this.state.text} />;
    }
    return (
      <Wrapper>
        {showOriginalText}
        {showOutputText}
      </Wrapper>
    );
  };

  render() {
    return (
      <Wrapper>
        <Main />
        <InputText change={event => this.inputTextHandler(event)} />
        {this.hasText()}
      </Wrapper>
    );
  }
}

export default classes(App, style.App);
