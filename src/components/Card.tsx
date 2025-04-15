import renderTags from "../functions/renderTags";
import "../styles/Card.css";
import CardProps from "../types/CardProps";

export default function Card({
  duration,
  position,
  description,
  tagList,
  companySite,
}: CardProps) {
  return (
    <a
      href={companySite}
      target="_blank"
      rel="noopener noreferrer"
      className="companySite"
    >
      <li className="cardContainer">
        <header className="cardDuration">{duration}</header>
        <div className="cardContent">
          <p className="cardPosition">
            {position}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="externalIcon"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </p>
          <p>{description}</p>
          <ul className="tagList">{renderTags(tagList)}</ul>
        </div>
      </li>
    </a>
  );
}
