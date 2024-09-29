import { ReactNode } from "react";

interface ICard {
  imageUrl?: string
  cardBody?: ReactNode
  cardFooter?: ReactNode
}

const Card = ({ imageUrl, cardBody, cardFooter }: ICard) => {
  return (
    <div className="flex flex-col">
      <img
        src={imageUrl}
        alt="img"
        className="flex w-full mx-auto justify-center rounded-lg border-2 border-gray-100 max-h-96 object-cover object-top"
      />
      <div className="mx-5 my-3">{cardBody}</div>
      <div className="mx-3 my-3">{cardFooter}</div>
    </div>
  );
};

export default Card;
