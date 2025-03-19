import { cx } from "../../lib/classNames";
import css from "./ProgressBar.module.css";

type Props = {
  title: string;
  progress: number;
};

const ProgressBar: React.FC<Props> = ({ title, progress }) => {
  return (
    <div className={cx(css["progress-container"], "fx", "fx--col")}>
      <div className={cx("fx", "fx--justify-sb")}>
        <p className={css["progress-title"]}>{title}</p>
        <span className={css["progress-percentage"]}>{progress}%</span>
      </div>
      <div className={css["progress-line-wrapper"]}>
        <div
          className={css["progress-line"]}
          style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
