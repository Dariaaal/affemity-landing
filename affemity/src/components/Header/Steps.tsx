import React from 'react';
import css from './Header.module.css';

type StepsProps = {
  currentStep: number;
};

const Steps: React.FC<StepsProps> = ({ currentStep }) => {
  return (
    <p className={css["steps"]}>
      <span className="text-accent">{currentStep}</span>/34
    </p>
  );
};

export default Steps;
