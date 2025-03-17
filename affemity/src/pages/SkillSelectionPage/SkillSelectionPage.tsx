import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SkillSelectionPage.module.css";
import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import { RootState, AppDispatch } from "../../store";
import { addSelectedOption, removeSelectedOption } from "../../store/slice";
import SkillsList from "../../components/SkillsList/SkillsList";

const skills = {
  goal1: [
    "Skill1_goal1",
    "Skill2_goal1",
    "Skill3_goal1",
    "Skill4_goal1",
    "Skill5_goal1",
  ],
  goal2: [
    "Skill1_goal2",
    "Skill2_goal2",
    "Skill3_goal2",
    "Skill4_goal2",
    "Skill5_goal2",
  ],
};

const SkillSelectionPage = () => {
  const goal = useSelector((state: RootState) => state.goal.goal);
  const selectedSkills = useSelector(
    (state: RootState) => state.goal.selectedSkills
  );
  const dispatch = useDispatch<AppDispatch>();

  const [currentSkills, setCurrentSkills] = useState<string[]>([]);

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

    if (checked) {
      dispatch(addSelectedOption(value));
    } else {
      dispatch(removeSelectedOption(value));
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
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SkillSelectionPage;
