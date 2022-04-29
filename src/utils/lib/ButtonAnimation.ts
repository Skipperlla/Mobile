import { useRef } from "react";
import { Animated } from "react-native";
const animation = useRef(new Animated.Value(0)).current;
const inputRange = [0, 1];
const outputRange = [1, 0.9];
const animationScale = animation.interpolate({ inputRange, outputRange });

const AnimationPressIn = () => {
    Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: true,
    }).start();
};
const AnimationPressOut = () => {
    Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
    }).start();
};
export { AnimationPressIn, AnimationPressOut, animationScale };

