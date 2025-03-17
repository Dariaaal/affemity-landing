import { cx } from "../../lib/classNames";
import css from "./SkillCard.module.css";

type Props = {
  title: string;
  emoji: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillCard: React.FC<Props> = ({ title, emoji, onChange }) => {
  return (
    <label
      className={cx(
        css["container"],
        "fx",
        "fx--justify-center",
        "fx--ai-center"
      )}
    >
      <div className={cx(css["title-wrapper"], "fx", "fx--ai-center")}>
        {emoji}
        <p className={css["title"]}>{title}</p>
      </div>
      <input type="checkbox" onChange={onChange} />
    </label>
  );
};

export default SkillCard;
