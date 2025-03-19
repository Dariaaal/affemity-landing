import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { cx } from "../../lib/classNames";
import { Goal } from "../../models/Goal";
import PopUp from "../../components/PopUp/PopUp";
import ReviewsCarousel from "../../components/Reviews/ReviewsCarousel";
import ProgressBarList from "../../components/ProgressBar/ProgressBarList";

const initialGoals: Goal[] = [
  {
    title: "Setting goals",
    progress: 0,
    question: "Have you tried changing your love life before?",
  },
  {
    title: "Adapting growth areas",
    progress: 0,
    question: "Do you prefer to have expert guidance?",
  },
  {
    title: "Picking content",
    progress: 0,
    question: "Do you lack consistency?",
  },
  {
    title: "Prioritizing challenges",
    progress: 0,
    question: "Are you open to self-improvement?",
  },
];

const PersonalizedPlanPage = () => {
  const [goals, setGoals] = useState(initialGoals);
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [currentGoalIndex, setCurrentGoalIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoals((prevGoals) => {
        const newGoals = [...prevGoals];

        if (openPopUp) return newGoals;

        for (let i = 0; i < newGoals.length; i++) {
          if (newGoals[i].progress === 50 && currentGoalIndex === null) {
            setCurrentGoalIndex(i);
            setOpenPopUp(true);
            return newGoals;
          }
        }

        for (let i = 0; i < newGoals.length; i++) {
          if (newGoals[i].progress < 100) {
            newGoals[i].progress += 1;
            return newGoals;
          }
        }

        clearInterval(interval);
        return newGoals;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [openPopUp, currentGoalIndex]);

  const handlePopUpClose = () => {
    setGoals((prevGoals) => {
      const newGoals = [...prevGoals];
      if (currentGoalIndex !== null) {
        newGoals[currentGoalIndex].progress = 51;
      }
      setOpenPopUp(false);
      setCurrentGoalIndex(null);
      return newGoals;
    });
  };

  return (
    <div className={cx("page-container", "fx-center", "fx--col")}>
      <Header title={"We are crafting your personalized plan"} />
      <ProgressBarList goals={goals} />
      {openPopUp && currentGoalIndex !== null && (
        <PopUp
          text={goals[currentGoalIndex].question}
          onClick={handlePopUpClose}
        />
      )}
      <ReviewsCarousel />
    </div>
  );
};

export default PersonalizedPlanPage;
