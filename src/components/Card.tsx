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
          <p className="cardPosition">{position}</p>
          <p>{description}</p>
          <ul className="tagList">{renderTags(tagList)}</ul>
        </div>
      </li>
    </a>
  );
}
