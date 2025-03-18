import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SkillSelectionPage.module.css";
import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import { RootState, AppDispatch } from "../../store";
import { addSelectedOption, removeSelectedOption } from "../../store/slice";
import SkillsList from "../../components/SkillsList/SkillsList";
import { Skill, Skills } from "../../models/Skill";
import { useNavigate } from "react-router-dom";

const skills: Skills = {
    goal1: [
        { id: "1", name: "Skill1_goal1", icon: "hands.png" },
        { id: "2", name: "Skill2_goal1", icon: "tears.png" },
        { id: "3", name: "Skill3_goal1", icon: "lightning.png" },
        { id: "4", name: "Skill4_goal1", icon: "smile.png" },
        { id: "5", name: "Skill5_goal1", icon: "finger.png" },
      ],
      goal2: [
        { id: "1", name: "Skill1_goal2", icon: "hands.png"  },
        { id: "2", name: "Skill2_goal2", icon: "tears.png" },
        { id: "3", name: "Skill3_goal2", icon: "lightning.png" },
        { id: "4", name: "Skill4_goal2", icon: "smile.png" },
        { id: "5", name: "Skill5_goal2", icon: "finger.png" },
      ],
};

const SkillSelectionPage = () => {
  const goal = useSelector((state: RootState) => state.goal.goal);
  const selectedSkills = useSelector(
    (state: RootState) => state.goal.selectedSkills
  );
  const dispatch = useDispatch<AppDispatch>();

  const [currentSkills, setCurrentSkills] = useState<Skill[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (goal && skills.hasOwnProperty(goal)) {
      setCurrentSkills(skills[goal as keyof typeof skills]);
    } else {
      console.error("Goal not found!");
    }
  }, [goal]);

  const isButtonDisabled = selectedSkills.length === 0;

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
  
    const selectedSkill = currentSkills.find(skill => skill.id === value);
  
    if (selectedSkill) {
      if (checked) {
        dispatch(addSelectedOption(selectedSkill));
      } else {
        dispatch(removeSelectedOption(selectedSkill));
      }
    } else {
      console.error("Skill not found");
    }
  };

  return (
    <div
      className={cx(
        "page-container",
        "fx-center",
        "fx--col",
        "container-relative"
      )}
    >
      <Header
        title={"What would you like to learn?"}
        text={"Select all that apply"}
        textSize="small"
        backButton
        steps
        currentStep={1}
        progressBar
        progress={22.8}
      />
      <div className={cx(css["skills-container"], "full-width")}>
        <SkillsList
          skills={currentSkills}
          selectedSkills={selectedSkills}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className={cx(css["button-container"], "fx-center", "full-width")}>
        <button
          className={cx(
            css["button-item"],
            isButtonDisabled && css["button-item-disabled"]
          )}
          disabled={isButtonDisabled}
          onClick={() => navigate("/form")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SkillSelectionPage;
