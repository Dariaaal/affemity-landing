import { cx } from "../../lib/classNames";
import css from "./ReviewsCarousel.module.css";

type Props = {
  name: string;
  rating: number;
  text: string;
};

const ReviewCard: React.FC<Props> = ({ name, rating, text }) => {
  return (
    <div className={cx(css["review-container"], "fx", "fx--col", "gap-small")}>
      <div className={cx(css["review-bg-wrapper"], "fx", "fx--justify-sb")}>
        <p className={css["review-name"]}>{name}</p>
        <div
          className={cx(
            css["review-bg-wrapper"],
            "fx",
            "fx--ai-center",
            "gap-small"
          )}
        >
          <img src="rating.png" className={css["review-stars"]} alt="Rating" />
          <span className={css["review-rating"]}>{rating}</span>
        </div>
      </div>
      <p className={css["review-text"]}>{text}</p>
    </div>
  );
};

export default ReviewCard;
