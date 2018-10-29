import React, { Component } from "react";
import * as all from "react-icons/fa";

import Table from "./Table";

class Forca extends Component {
  constructor(props) {
    super(props);
    this.state = this.initGame;

    this.handleChange = this.handleChange.bind(this);
  }

  listWords = [
    {
      name: "Frutas",
      items: ["Banana", "Abacaxi", "Mamão", "Uva", "Pera", "Abacate", "Morango", "Laranja", "Manga", "Melancia", "Maracuja"]
    },
    {
      name: "Comidas",
      items: ["Macarrão", "Arroz", "Feijão", "Ovo", "Lasanha"]
    },
    {
      name: "Filme",
      items: ["Gremlins", "Frozen", "Pocahontas", "Cinderela", "ABelaeafera","hoteltransilvania","homearanha"]
    },
  ];

  listBody = [
    { img: "cabeca", status: false },
    { img: "corpo", status: false },
    { img: "bracoEsquerdo", status: false },
    { img: "bracoDireito", status: false },
    { img: "pernaEsquerda", status: false },
    { img: "pernaDireita", status: false }
  ];

  initGame = {
    body: this.listBody,
    types: [],
    name: "",
    letter: "",
    word: []
  };

  handleNewGame = () => {
    this.setState(this.initGame);
    this.setState({types:[]});
    this.setState({body:this.listBody});

    const index1 = Math.floor(Math.random() * this.listWords.length) + 0;
    this.setState({ name: this.listWords[index1].name });

    const index2 =
      Math.floor(Math.random() * this.listWords[index1].items.length) + 0;
    var word = this.listWords[index1].items[index2].toUpperCase();

    var palavra = [];
    word
      .split("")
      .map(letter => palavra.push({ letter: letter, status: false }));

    this.setState({ word: palavra });
  };

  VerifyLetter = () => {
    const { letter, types } = this.state;
    var verify = true;
    types.map(t => {
      if (letter === t) {
        alert("Já digitou essa letra");
        verify = false;
      }
    });
    return verify;
  };

  VerifyIFRight = () => {
    const { letter } = this.state;
    var word = this.state.word;
    var verify = false;

    word.map((part, index) => {
      if (part.letter === letter) {
        word[index] = { ...part, status: true };
        verify = true;
      }
    });
    this.setState({ word: word });
    return verify;
  };

  ShowBodyPart() {
    var { body, word, letter } = this.state;
    var trava = false;
    body.map((part, index) => {
      if (!part.status && trava === false) {
        body[index] = { ...part, status: true };
        trava = true;
      }
    });
    this.setState({ body: body });
  }

  handleSubmit = e => {
    e.preventDefault();
    var { types } = this.state;

    if (this.VerifyLetter()) {
      if (!this.VerifyIFRight()) {
        this.ShowBodyPart();
      }
      types.push(this.state.letter);
      this.setState({ types: types });
    }
    this.setState({letter:''})
  };

  handleChange = event => {
    this.setState({ letter: event.target.value.toUpperCase() });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleNewGame()}>New Game</button>
        <h1>{this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            maxLength="1"
            value={this.state.letter}
            onChange={this.handleChange}
          />
          <button>Verifica Letra</button>
        </form>
        <div className="types">
          <h2>Letras já digitadas:</h2>
          <ul>
            {this.state.types.length > 0
              ? this.state.types.map(t => <li>{t}</li>)
              : false}
          </ul>
        </div>
        <div className="word">
          <h2>Resposta:</h2>
          <ul>
            {this.state.word.length > 0
              ? this.state.word.map(l => <li>{l.status ? l.letter : false}</li>)
              : false}
          </ul>
        </div>
        <div className="body">
          {this.state.body.map(bd => (
            <div className={bd.img}>
              {bd.status ? (
                <img src={require(`../../img/${bd.img}.png`)} />
              ) : (
                false
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Forca;
