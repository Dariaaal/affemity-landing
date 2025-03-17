import { CheckedIcon } from "../../icons/CheckedIcon";
import { cx } from "../../lib/classNames";
import css from "./SkillCard.module.css";

type Props = {
  title: string;
  emoji: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillCard: React.FC<Props> = ({ title, emoji, checked, onChange }) => {
  return (
    <label
      className={cx(
        css["container"],
        "fx",
        "fx--justify-sb",
        "fx--ai-center"
      )}
    >
      <div className={cx(css["title-wrapper"], "fx", "fx--ai-center")}>
        {emoji}
        <p className={css["title"]}>{title}</p>
      </div>

      <div className={css["custom-checkbox-wrapper"]}>
        <input
          type="checkbox"
          className={css["custom-checkbox"]}
          value={title}
          onChange={onChange}
          checked={checked}
        />
        <span className={cx(css["checkbox-display"], "fx-center")}>
          {checked && <CheckedIcon />}
        </span>
      </div>
    </label>
  );
};

export default SkillCard;
