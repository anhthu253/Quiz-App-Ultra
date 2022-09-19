import "./Card.css";
const Card = () => (
  <li className="card-list__item">
    <article className="card">
      <h2 className="card__question">Who killed JFK?</h2>
      <button className="card__button-answer" type="button">
        Show answer
      </button>
      <p className="card__answer card__answer--active">You will never know</p>
      <ul className="card__tag-list">
        <li className="card__tag-list-item">politics</li>
      </ul>
      <div className="card__button-bookmark">
        <button className="bookmark" aria-label="bookmark" type="button">
          <svg
            className="bookmark__icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewbox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </article>
  </li>
);
export default Card;
