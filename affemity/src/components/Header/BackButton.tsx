import React from 'react';
import { ArrowBackIcon } from "../../icons/ArrowBackIcon";
import { cx } from "../../lib/classNames";
import css from './Header.module.css';

type BackButtonProps = {
  onClick: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={cx(css["button-back"], "fx-center")}>
      <ArrowBackIcon />
    </button>
  );
};

export default BackButton;
