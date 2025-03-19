import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressHeaderBar from "./ProgressHeaderBar";
import BackButton from "./BackButton";
import Logo from "./Logo";
import Steps from "./Steps";
import Text from "./Text";
import { cx } from "../../lib/classNames";
import css from "./Header.module.css";

type Props = {
  title: string | React.ReactNode;
  text?: string;
  textSize?: "small" | "medium";
  backButton?: boolean;
  steps?: boolean;
  currentStep?: number;
  progressBar?: boolean;
  progress?: number;
};

const Header: React.FC<Props> = ({
  title,
  text,
  textSize,
  backButton,
  steps,
  currentStep,
  progressBar,
  progress,
}) => {
  const navigate = useNavigate();
  const back = () => navigate(-1);

  return (
    <div className={cx("fx--col", "fx-center", "gap-primary")}>
      {progressBar && progress && <ProgressHeaderBar progress={progress} />}

      <div
        className={
          backButton
            ? cx("fx", "fx--justify-sb", "fx--ai-center", "full-width")
            : "fx-center"
        }
      >
        {backButton && <BackButton onClick={back} />}
        <Logo />
        {steps && currentStep && <Steps currentStep={currentStep} />}
      </div>

      <h1 className={cx(css["title"], "text-center")}>{title}</h1>
      {text && <Text text={text} textSize={textSize} />}
    </div>
  );
};

export default Header;
