import { cx } from "../../lib/classNames";
import css from "./GoalButtons.module.css";

const GoalButtons = ({
  goals,
  handleGoalClick,
}: {
  goals: { id: string; label: string }[];
  handleGoalClick: (goal: string) => void;
}) => {
  return (
    <div className={cx(css["buttons-container"], "fx-center", "gap-primary")}>
      {goals.map((goal) => (
        <button
          key={goal.id}
          className={cx(css["button-item"], "text-center")}
          onClick={() => handleGoalClick(goal.id)}
        >
          {goal.label}
        </button>
      ))}
    </div>
  );
};

export default GoalButtons;
