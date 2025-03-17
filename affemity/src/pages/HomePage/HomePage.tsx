import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import css from "./HomePage.module.css";
import { useDispatch } from "react-redux";
import { setGoal } from "../../store/slice";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleGoalClick = (goal: string) => {
    dispatch(setGoal(goal));
  };

  return (
    <div className={cx("page-container", "fx-center", "fx--col")}>
      <Header
        title={
          <p>
            Change your <span className="text-accent">love life</span>
          </p>
        }
        text={
          "with easy-to-use practical tips that you can apply in any situation"
        }
      />
      <div></div>
      <div className={cx(css["goal-section"], "fx-center", "fx--col")}>
        <h2 className={cx(css["goal-heading"], "text-center")}>
          What is your main goal?
        </h2>
        <div className={cx(css["links-container"], "fx-center")}>
          <Link
            to="/skills"
            className={cx(css["link-item"], "text-center")}
            onClick={() => handleGoalClick("goal1")}
          >
            Build a deep connection
          </Link>
          <Link
            to="/skills"
            className={cx(css["link-item"], "text-center")}
            onClick={() => handleGoalClick("goal2")}
          >
            Create emotional attraction
          </Link>
        </div>
        <Link to="/" className={css["link-additional"]}>
          Other
        </Link>
      </div>
      <p className={cx(css["agreement-text"], "text-center")}>
        By continuing, you agree to our Terms of Service | Privacy Policy <br />{" "}
        2024 © All Rights Reserved.
      </p>
    </div>
  );
};

export default HomePage;
