import { Colors, Size } from "@assets/styles";
import React, { useState, useRef } from "react";
import { View, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

const data = [
  {
    id: 1,
    url: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000",
  },
  {
    id: 2,
    url: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000",
  },
];
interface IDataProps {
  id: number;
  url: string;
}
const renderItem = ({ item }: IDataProps) => {
  return (
    <View
      style={{
        width: "100%",
        height: 250,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: "red",
      }}
    >
      <Image
        source={{ uri: item.url }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </View>
  );
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef<any>(null).current;
  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={Size.windowWidth}
        itemWidth={Size.windowWidth}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 999,
          marginHorizontal: Size.margin / 2,
          backgroundColor: Colors.Primary.blue,
        }}
        // tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: Colors.Neutral.light,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={0.7}
      />
    </View>
  );
};

export default Slider;
