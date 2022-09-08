import "./styles.css";

const Card = () => {
  return (
    <ul className="cards">
      <li className="cards__item">
        <div className="card">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
              alt="nasa"
            />
          </div>
          <div className="card__content">
            <div className="card__title">ID: 446464</div>
            <p className="card_text">este es el parrafo</p>
            <button className="btn btn--block card__btn">Ver detalle</button>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default Card;
