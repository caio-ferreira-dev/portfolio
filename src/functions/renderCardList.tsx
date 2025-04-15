import Card from "../components/Card";
import CardProps from "../types/CardProps";

export default function renderCardList(experiences: CardProps[]) {
  return experiences.map((cardData: CardProps, index: number) => {
    return (
      <Card
        description={cardData.description}
        duration={cardData.duration}
        position={cardData.position}
        tagList={cardData.tagList}
        companySite={cardData.companySite}
        key={index}
      />
    );
  });
}
