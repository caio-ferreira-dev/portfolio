import renderCardList from "../functions/renderCardList";
import "../styles/CardList.css";
import CardListProps from "../types/CardListProps";

export default function CardList({ experiences }: CardListProps) {
  return (
    <>
        <ol>
            {renderCardList(experiences)}
        </ol>
    </>
  );
}
