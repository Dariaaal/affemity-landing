import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { PrivacyIcon } from "../../icons/PrivacyIcon";
import { cx } from "../../lib/classNames";
import css from "./EmailFormPage.module.css";
import { addEmail } from "../../store/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const EmailFormPage = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(value.trim() !== "" && emailRegex.test(value));
  };

  const onEmailChange = (value: string) => {
    setEmail(value);

    setTimeout(() => {
      validateEmail(value);
    }, 500);
  };

  const onResultsClick = () => {
    if (!isValid) return;
    dispatch(addEmail(email));
    navigate("/plan");
  };

  return (
    <div className={cx("page-container", "fx-center", "fx--col")}>
      <Header
        title={"You’re almost done!"}
        text={"Please enter your email to see results"}
      />
      <div className={cx(css["form"], "fx", "fx--col")}>
        <div>
          <input
            className={cx(
              css["email-input"],
              email !== "" && css["email-input-with-value"],
              !isValid && css["email-input-with-error"]
            )}
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
          {!isValid && (
            <p className={css["error-tip"]}>Error! Please check your email</p>
          )}
        </div>
        <button className={css["button"]} onClick={onResultsClick}>
          Get results
        </button>
        <div className={cx(css["privacy"], "fx", "fx--ai-center")}>
          <div>
            <PrivacyIcon />
          </div>
          <p className={css["privacy-text"]}>
            We respect your privacy and are committed to protecting your
            personal data. We’ll email you a copy of your results for convenient
            access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailFormPage;
