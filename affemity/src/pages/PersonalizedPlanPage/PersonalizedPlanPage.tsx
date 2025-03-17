import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import css from "./PersonalizedPlanPage.module.css";

const PersonalizedPlanPage = () => {
  return (
    <div className={cx("page-container", "fx-center", "fx--col")}>
      <Header
        title={"We are crafting your personalized plan"}
      />
    </div>
  );
};

export default PersonalizedPlanPage;
