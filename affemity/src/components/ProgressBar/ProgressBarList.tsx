import { cx } from "../../lib/classNames";
import { Goal } from "../../models/Goal";
import ProgressBar from "./ProgressBar";
import css from "./ProgressBar.module.css";

type Props = {
  goals: Goal[];
};

const ProgressBarList: React.FC<Props> = ({ goals }) => (
  <ul
    className={cx(
      css["progress-list"],
      "fx",
      "fx--col",
      "full-width",
      "gap-primary"
    )}
  >
    {goals.map((goal, index) => (
      <ProgressBar key={index} title={goal.title} progress={goal.progress} />
    ))}
  </ul>
);

export default ProgressBarList;
