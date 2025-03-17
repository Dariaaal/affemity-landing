import { cx } from "../../lib/classNames";
import SkillCard from "../SkillCard/SkillCard";
import css from "./SkillsList.module.css";

type Props = {
  skills: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillsList: React.FC<Props> = ({ skills, onChange }) => {
  return (
    <ul className={cx(css["list"], "fx", "fx--col")}>
      {skills.map((item, index) => (
        <li key={index}>
          <SkillCard title={item} emoji={undefined} onChange={onChange} />
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
