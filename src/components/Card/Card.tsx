import { ReactNode } from "react";
import clsx from 'clsx';

interface ICard {
  imageUrl?: string
  cardClassName?: string
  cardBody?: ReactNode
  cardFooter?: ReactNode
}

const Card = ({ imageUrl, cardClassName, cardBody, cardFooter }: ICard) => {
  return (
    <div
      className={clsx(
        'flex flex-col rounded-xl border-2 border-gray-100 hover:shadow-lg hover:shadow-gray-200',
        cardClassName
      )}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="img"
          className="flex w-full mx-auto justify-center rounded-lg border-2 border-gray-100 max-h-96 object-cover object-top"
        />
      )}
      {cardBody && <div className="mx-8 my-3">{cardBody}</div>}
      {cardFooter && <div className="mx-8 mt-4 mb-5">{cardFooter}</div>}
    </div>
  );
};

export default Card;
