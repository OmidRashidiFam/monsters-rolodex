import './card-list.css';

import Card from '../card/card';

const CardList = ({ monsters }) => {
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

export default CardList;
