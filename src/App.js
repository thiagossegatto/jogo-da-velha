import React, { Component } from "react";

import Header from "./components/Header";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);

    const INITIAL_STATE = {
      players: [
        {
          id: 1,
          name: "Player 1",
          mark: true,
          winners: 0
        },
        {
          id: 2,
          name: "Player 2",
          mark: false,
          winners: 0
        }
      ],
      games: [this.initGame(1, true)]
    };
    this.state = INITIAL_STATE;
  }

  initGame(count, mark) {
    return {
      id: count,
      initMark: mark,
      name: "Game " + count,
      winner: "",
      rows: [
        { position: 1, mark: "" },
        { position: 2, mark: "" },
        { position: 3, mark: "" },
        { position: 4, mark: "" },
        { position: 5, mark: "" },
        { position: 6, mark: "" },
        { position: 7, mark: "" },
        { position: 8, mark: "" },
        { position: 9, mark: "" }
      ]
    };
  }

  hancleClick = (id, position) => {
    var { games } = this.state;
    var gameOver = false;
    games.map((game, index) => {
      if (game.id === id) {
        if (game.winner !== "") {
          gameOver = true;
          return false;
        }
        game.rows.map((row, i) => {
          if (row.position === position) {
            if (row.mark === "") {
              games[index].rows[i] = { ...row, mark: game.initMark };
              games[index] = { ...game, initMark: !game.initMark };
            } else alert("Opção já Selecionada");
          }
        });
      }
    });
    if (gameOver) return false;
    this.setState({ games: games });
    var end = "";
    this.state.games.map(game => {
      if (game.id === id) {
        end = this.winner(game.rows);
      }
    });

    if (end !== "") {
      var { players } = this.state;
      players.map((player, i) => {
        if (player.mark === end) {
          players[i] = { ...player, winners: player.winners + 1 };
          this.setState({
            players
          });
          alert(player.name + " Winner");
          this.state.games.map((game, index) => {
            if (game.id === id) {
              games[index] = { ...game, winner: player.name };
            }
          });
        }
      });
    }
  };

  newGame = () => {
    var { games } = this.state;
    var total = games.length + 1;
    console.log(games.length - 1);
    var mark = games[games.length - 1].initMark;
    games.push(this.initGame(total, !mark));
    this.setState({ games: games });
  };

  handleChange = (name, id) => {
    var { players } = this.state;
    players.map((player, index) => {
      if (player.id === id) {
        players[index] = { ...player, name: name };
      }
    });
    this.setState({
      players
    });
  };

  winner(rows) {
    var box = [];
    rows.map((row, index) => {
      var i = index + 1;
      if (row.position === i) {
        box[i] = row.mark;
      }
    });
    var seq = "";
    seq = this.casasIguais(box[1], box[2], box[3]);
    if (seq === "") seq = this.casasIguais(box[1], box[4], box[7]);
    if (seq === "") seq = this.casasIguais(box[1], box[5], box[9]);
    if (seq === "") seq = this.casasIguais(box[2], box[5], box[8]);
    if (seq === "") seq = this.casasIguais(box[3], box[6], box[9]);
    if (seq === "") seq = this.casasIguais(box[3], box[5], box[7]);
    if (seq === "") seq = this.casasIguais(box[4], box[5], box[6]);
    if (seq === "") seq = this.casasIguais(box[7], box[8], box[9]);
    return seq;
  }

  casasIguais(a, b, c) {
    if (a !== "" && b !== "" && c !== "") {
      if (a === b && a === c && b === c) {
        return a;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header players={this.state.players} handleChange={this.handleChange} />
        <Table games={this.state.games} handleClick={this.hancleClick} />
        <button onClick={this.newGame}>New Game</button>
      </div>
    );
  }
}

export default App;
