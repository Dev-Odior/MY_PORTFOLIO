import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const useConfetti = (duration: number) => {
  const { width, height } = useWindowSize();
  const [isConfettiVisible, setIsConfettiVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfettiVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    isConfettiVisible && (
      <Confetti
        width={width}
        height={height}
        recycle={isConfettiVisible}
        gravity={0.1} // Adjust gravity if necessary
        // initialVelocityX={{ min: -10, max: 10 }} // Randomize x velocity to give a more dynamic effect
        // initialVelocityY={{ min: -10, max: 10 }} // Randomize y velocity
      />
    )
  );
};

export default useConfetti;
