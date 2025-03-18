import React from 'react';
import css from './Header.module.css';

type Props = {
  progress: number;
};

const ProgressBar: React.FC<Props> = ({ progress }) => {
  return (
    <div className={css["progress-bar-container"]}>
      <div
        className={css["progress-bar"]}
        style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
      />
    </div>
  );
};

export default ProgressBar;
