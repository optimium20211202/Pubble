import React, { ReactNode } from "react";
import { RefObject } from "react";
import TinderCard from "react-tinder-card";

type Direction = "up" | "down" | "left" | "right";
interface API {
  swipe(dir?: Direction): Promise<void>;
  restoreCard(): Promise<void>;
}

type Props = {
  index: number;
  onSwipe: (direction: Direction) => void;
  childRefs: RefObject<API>[];
  children: ReactNode;
};

const SwipeableCard: React.FC<Props> = ({
  index,
  onSwipe,
  childRefs,
  children,
}) => {
  return (
    <TinderCard
      ref={childRefs[index]}
      className="swipe"
      onSwipe={onSwipe}
      preventSwipe={["up", "down"]}
      swipeRequirementType="position"
      swipeThreshold={30}
      key={index}
    >
      {children}
    </TinderCard>
  );
};

export default SwipeableCard;
