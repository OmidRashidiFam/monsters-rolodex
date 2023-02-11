import React from 'react';
import './card-list.css';

import Card from '../card/card';

class CardList extends React.Component {
  render() {
    // destructure from props
    const { monsters } = this.props
    return (
      <div className="card_list_container">
        {monsters.map(monster => {
          // destructure from monster
          const { id, name, email } = monster
          return (
            <Card key={id} id={id} name={name} email={email} />
          )
        })}
      </div>
    );
  }
}

export default CardList;