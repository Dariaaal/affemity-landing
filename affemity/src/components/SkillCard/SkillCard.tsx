import { CheckedIcon } from "../../icons/CheckedIcon";
import { cx } from "../../lib/classNames";
import css from "./SkillCard.module.css";

type Props = {
  id: string;
  title: string;
  emoji: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillCard: React.FC<Props> = ({
  id,
  title,
  emoji,
  checked,
  onChange,
}) => {
  return (
    <label
      className={cx(
        css["container"],
        "fx",
        "fx--justify-sb",
        "fx--ai-center",
        checked && css["container-checked"]
      )}
    >
      <div className={cx(css["title-wrapper"], "fx", "fx--ai-center")}>
        <img src={emoji} className={css["emoji"]} />
        <p className={css["title"]}>{title}</p>
      </div>
      <div className={css["custom-checkbox-wrapper"]}>
        <input
          type="checkbox"
          className={css["custom-checkbox"]}
          value={id}
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
