import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import css from "./EmailFormPage.module.css";

const EmailFormPage = () => {
  return (
    <div className={cx("page-container", "fx-center", "fx--col")}>
      <Header
        title={"You’re almost done!"}
        text={"Please enter your email to see results"}
      />
    </div>
  );
};

export default EmailFormPage;
