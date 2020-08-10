import React from 'react';
import GameCards from '../Game-Cards/game-cards';
import cards from '../../card.json';



class App extends React.Component {

    state = {
      count: 0,
      cards: [],
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
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
      render(){
      return (
          <div>
            {cards.map(card => (
              <GameCards
                key={card.id}
                image={card.image}
                shuffle={this.shuffle}
                />
            ))}
          </div>        
  
      )
    }
  }
  
  
  export default App;
  
  
  