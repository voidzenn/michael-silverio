import { ReactNode } from "react";

interface ICard {
  cardImage?: ReactNode
  cardBody?: ReactNode
}

const Card = ({ cardImage, cardBody }: ICard) => {
  return (
    <div className="flex flex-col">
      <div>{cardImage}</div>
      <div>{cardBody}</div>
    </div>
  );
};

export default Card;
