import { cx } from "../../lib/classNames";
import { Skill } from "../../models/Skill";
import SkillCard from "../SkillCard/SkillCard";

type Props = {
  skills: Skill[];
  selectedSkills: Skill[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SkillsList: React.FC<Props> = ({ skills, selectedSkills, onChange }) => {
  return (
    <ul className={cx("fx", "fx--col", "gap-primary")}>
      {skills.map((item) => (
        <li key={item.id}>
          <SkillCard
            id={item.id}
            title={item.name}
            emoji={item.icon}
            checked={selectedSkills.includes(item)}
            onChange={onChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
