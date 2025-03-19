import { useState, useEffect } from "react";
import { cx } from "../../lib/classNames";
import { motion, AnimatePresence } from "framer-motion";
import css from "./ReviewsCarousel.module.css";
import ReviewCard from "./ReviewCard";
import { Comment } from "../../models/Comment";

const reviews: Comment[] = [
  {
    name: "Rosalee",
    text: "I gotta say, this course is a game-changer! It’s chock-full of amazing sentences to send or tell to your guy, and the insights into the way men think and act are totally worth the pric...",
    rating: 4.6,
  },
  {
    name: "Clara",
    text: "I’m totally digging this plan! It’s all about understanding men and their psychology, rather than just guessing what’s going on in their heads. And it’s not just about saying th...",
    rating: 5.0,
  },
  {
    name: "Stephanie",
    text: "Okay, I gotta admit, I’m a bit shy when it comes to guys. But this course breaks things down into easy steps and gives you the confidence to put yourself out there. I even ...",
    rating: 4.8,
  },
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cx(css["carousel-container"], "fx", "fx--col", "gap-small")}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <ReviewCard
            name={reviews[currentIndex].name}
            rating={reviews[currentIndex].rating}
            text={reviews[currentIndex].text}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ReviewsCarousel;
