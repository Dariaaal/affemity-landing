import { cx } from "../../lib/classNames";
import SkillCard from "../SkillCard/SkillCard";
import css from "./SkillsList.module.css";

type Props = {
  skills: string[];
  selectedSkills: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillsList: React.FC<Props> = ({ skills, selectedSkills, onChange }) => {
    console.log(selectedSkills)
  return (
    <ul className={cx(css["list"], "fx", "fx--col")}>
      {skills.map((item, index) => (
        <li key={index}>
          <SkillCard
            title={item}
            emoji={undefined}
            checked={selectedSkills.includes(item)}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
