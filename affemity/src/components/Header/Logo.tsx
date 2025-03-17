import React from 'react';
import { LogoIcon } from "../../icons/LogoIcon";
import css from './Header.module.css';
import { cx } from '../../lib/classNames';

const Logo: React.FC = () => {
  return (
    <div className={cx(css["logo-container"], "fx-center")}>
      <div className={css["logo-svg"]}>
        <LogoIcon />
      </div>
      <p className={css["logo-text"]}>Affemity</p>
    </div>
  );
};

export default Logo;
