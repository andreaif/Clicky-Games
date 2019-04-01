//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import yorkie from "./yorkies.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    yorkie,
    clickedYorkie: [],
    score: 0
  };
  imageClick = event => {
    const currentYorkie = event.target.alt;
    const YorkieAlreadyClicked =
      this.state.clickedYorkie.indexOf(currentYorkie) > -1;
    if (YorkieAlreadyClicked) {
      this.setState({
        yorkie: this.state.yorkie.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedYorkie: [],
        score: 0
      });
        alert("You lose. Play again?");
    } else {
      this.setState(
        {
          yorkie: this.state.yorkie.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedYorkie: this.state.clickedYorkie.concat(
            currentYorkie
          ),
          score: this.state.score + 1
        },       
        () => {
          if (this.state.score === 12) {
            alert("Yayyyyyyyy!");
            this.setState({
              yorkie: this.state.yorkie.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedYorkie: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.yorkie.map(yorkie => (
            <FriendCard
              imageClick={this.imageClick}
              id={yorkie.id}
              key={yorkie.id}
              image={yorkie.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;