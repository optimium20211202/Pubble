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
  hide?: boolean;
  onSwipe: (direction: Direction) => void;
  onCardLeftScreen?: (myIdentifier: number) => void;
  childRef: RefObject<API>;
  children: ReactNode;
};

const SwipeableCard: React.FC<Props> = ({
  index,
  hide = false,
  onSwipe,
  onCardLeftScreen = () => {},
  childRef,
  children,
}) => {
  return (
    <TinderCard
      ref={childRef}
      className={hide ? "hidden" : "swipe"}
      onSwipe={onSwipe}
      onCardLeftScreen={() => onCardLeftScreen(index)}
      // PCでswipe操作するとうまく動作しないので...
      preventSwipe={
        "ontouchstart" in window
          ? ["up", "down"]
          : ["left", "right", "up", "down"]
      }
      swipeRequirementType="position"
      swipeThreshold={30}
      key={index}
    >
      {children}
    </TinderCard>
  );
};

export default SwipeableCard;
