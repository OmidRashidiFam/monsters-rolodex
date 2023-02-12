import './card.css'

const Card = ({ id, name, email }) => {
  return (
    <div className="card_container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=250x250`}
        alt="Monster"
        className='card_img' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
