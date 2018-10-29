import React, { Component } from "react";
import * as all from "react-icons/fa";

import Table from "./Table";

class Memoria extends Component {
  constructor(props) {
    super(props);
    this.state = this.initGame;
  }

  listCards = [
    { opacity: 1, name: "star", status: false, icon: <all.FaStar /> },
    { opacity: 1, name: "heart", status: false, icon: <all.FaHeart /> },
    { opacity: 1, name: "camera", status: false, icon: <all.FaCamera /> },
    { opacity: 1, name: "gift", status: false, icon: <all.FaGift /> },
    { opacity: 1, name: "leaf", status: false, icon: <all.FaLeaf /> },
    { opacity: 1, name: "eye", status: false, icon: <all.FaEye /> },
    { opacity: 1, name: "key", status: false, icon: <all.FaKey /> },
    { opacity: 1, name: "bell", status: false, icon: <all.FaBell /> },
    { opacity: 1, name: "cut", status: false, icon: <all.FaCut /> },
    { opacity: 1, name: "flask", status: false, icon: <all.FaFlask /> },
    { opacity: 1, name: "laptop", status: false, icon: <all.FaLaptop /> },
    { opacity: 1, name: "ambulance", status: false, icon: <all.FaAmbulance /> },
    { opacity: 1, name: "angry", status: false, icon: <all.FaAngry /> },
    { opacity: 1, name: "slack", status: false, icon: <all.FaSlack /> }
  ];

  initGame = {
    acertos: 0,
    errors: 0,
    pares: [],
    cards: []
  };

  handleNewGame = (modo) => {
    this.setState(this.initGame);

    var list = this.listCards
      .map(card => {
        return [card, card];
      })
      .reduce(function(car, b) {
        return car.concat(b);
      });

    var cards = list.slice(0,modo*2);

    cards.sort(function() {
      return 0.5 - Math.random();
    });

    this.setState({ cards: cards });

    setTimeout(() => {
      cards.map((card, index) => {
        cards[index] = { ...card, opacity: 0 };
      });
      this.setState({ cards: cards });
    }, 10000);
  };

  handleClick = (card, id) => {
    var { pares, cards, acertos, errors } = this.state;

    if (cards[id].status) return false;

    clearTimeout();

    cards.map((c, index) => {
      if (index === id) {
        cards[id] = { ...c, opacity: 1 };
      }
    });

    if (pares.length === 1) {
      if (pares[0].card === card && pares[0].id !== id) {
        this.setState({ acertos: ++acertos });
        cards.map((c, index) => {
          if (c.name === card) {
            cards[index] = { ...c, status: true, opacity: 1 };
          }
        });
      } else {
        if (pares[0].id !== id) this.setState({ errors: ++errors });
      }
      setTimeout(() => {
        cards.map((c, index) => {
          if (c.status === false) {
            cards[index] = { ...c, opacity: 0 };
          }
        });
        this.setState({ cards: cards, pares: [] });
      }, 1000);
      this.setState({ cards: cards, pares: [] });
      return false;
    }

    pares.push({ card: card, id: id });
    this.setState({ pares: pares });
  };

  render() {
    return (
      <div>
          <button onClick={() => this.handleNewGame(6)}>Easy</button>
          <button onClick={() => this.handleNewGame(10)}>Medium</button>
          <button onClick={() => this.handleNewGame(14)}>Hard</button>
        {this.state.cards.length > 0 ? (
          <Table
            cards={this.state.cards}
            status={this.state}
            handleClick={this.handleClick}
          />
        ) : (
          false
        )}
      </div>
    );
  }
}

export default Memoria;
