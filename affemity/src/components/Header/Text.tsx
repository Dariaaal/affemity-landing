import React from 'react';
import { cx } from "../../lib/classNames";
import css from './Header.module.css';

type TextProps = {
  text: string;
  textSize?: "small" | "medium";
};

const Text: React.FC<TextProps> = ({ text, textSize }) => {
  return (
    <p
      className={cx(
        css["text"],
        "text-center",
        textSize === "small" && css["text-small"]
      )}
    >
      {text}
    </p>
  );
};

export default Text;
