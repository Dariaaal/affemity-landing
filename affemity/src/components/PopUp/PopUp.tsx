import { cx } from "../../lib/classNames";
import css from "./PopUp.module.css";

type Props = {
  text: string;
  onClick: () => void;
};

const PopUp: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div className={css["backdrop"]}>
      <div className={cx(css["popup"])}>
        <p className={cx(css["popup-tip"], "text-center")}>
          To move forward, specify
        </p>
        <div className={cx("fx-center", "fx--col", "gap-primary")}>
          <p className={cx(css["popup-text"], "text-center")}>{text}</p>
          <div
            className={cx(
              "fx",
              "fx--justify-sb",
              "fx--ai-center",
              "gap-primary",
              "full-width"
            )}
          >
            <button
              className={cx(css["popup-button"], "fx-center", "full-width")}
              onClick={onClick}
            >
              No
            </button>
            <button
              className={cx(css["popup-button"], "fx-center", "full-width")}
              onClick={onClick}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
