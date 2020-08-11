import React from 'react';
import GameCards from '../Game-Cards/game-cards';
import cards from '../../card.json';
import Navbar from "../Navbar/Navbar";




class App extends React.Component {

    state = {
      count: 0,
      cards: [],
      clickedImg: []
    };
  
  
    componentDidMount()
     {
       this.setState({ cards });
     }
  
    shuffle = () => {
      const newCards = this.state.cards;
      this.setState({
        cards: newCards.sort(card => {
          const change = Math.random();
  
          if (change > .5) {
            return 1;
          }
          if (change < .5) {
            return -1;
          }
  
          return 0;
        })
      })
    }

    handleIncrement = (card) => {
      if (this.state.clickedImg.indexOf(card) === -1) {
      this.setState({
        count: this.state.count + 1,
        clickedImg: [...this.state.clickedImg, card]
      }) 
      
      }else {
        this.setState({ count: this.state.count - 1 }) } 
      }

    
  
      render(){
      return (
        <div>
          < Navbar 
            count={this.state.count}
            />
          <div className="row">
            {cards.map(card => (
              <GameCards
                key={card.id}
                image={card.image}
                shuffle={this.shuffle}
                handleIncrement={this.handleIncrement}
                id={card.id}
                />
            ))}
          </div>
        </div>        
  
      )
    }
  }
  
  
  export default App;
  
  
  