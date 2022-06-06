import React, { useCallback, useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "@assets/styles";

const Star = ({ size = 30 }) => {
  const [rating, setRating] = useState<number>(0);
  const onFinishRating = useCallback(
    (ratingCount: number) => {
      setRating(ratingCount);
    },
    [rating]
  );
  return (
    <Rating
      type="custom"
      ratingColor={Colors.Primary.yellow}
      ratingBackgroundColor={Colors.Neutral.light}
      tintColor={"white"}
      ratingCount={5}
      jumpValue={1}
      imageSize={size}
      onFinishRating={onFinishRating}
    />
  );
};

export default Star;
