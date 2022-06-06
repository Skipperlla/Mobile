import { Styles, Colors, Size } from "@assets/styles";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
DropDownPicker.setLanguage("TR");
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
interface ItemsProps {
  label: string;
  value: string;
}
interface ISelectProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  items: ItemsProps[];
  value: string;
  setItems: React.Dispatch<React.SetStateAction<ItemsProps[]>>;
}
const Select = ({
  setValue,
  items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ],
  value = "apple",
  setItems,
}: ISelectProps) => {
  const [open, setOpen] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <DropDownPicker
      textStyle={[Styles.captionLargeRegular, { color: Colors.Neutral.grey }]}
      style={{
        width: "100%",
        borderColor: isActive ? Colors.Primary.blue : Colors.Neutral.light,
        backgroundColor: "#fff",
        zIndex: 1,
        borderRadius: 5,
      }}
      onPress={() => setActive(!isActive)}
      bottomOffset={100}
      dropDownContainerStyle={{
        backgroundColor: "#ffffff",
        borderColor: isActive ? Colors.Primary.blue : Colors.Neutral.light,
      }}
      selectedItemLabelStyle={Styles.linkText}
      modalTitleStyle={{
        backgroundColor: "red",
      }}
      TickIconComponent={({ style }) => (
        <Ionicons
          name="checkmark"
          size={Size.iconSize}
          color={Colors.Primary.blue}
        />
      )}
      ArrowUpIconComponent={({ style }) => (
        <MaterialIcons
          name="keyboard-arrow-up"
          size={Size.iconSize}
          color={isActive ? Colors.Primary.blue : Colors.Neutral.grey}
        />
      )}
      ArrowDownIconComponent={({ style }) => (
        <MaterialIcons
          name="keyboard-arrow-down"
          size={Size.iconSize}
          color={isActive ? Colors.Primary.blue : Colors.Neutral.grey}
        />
      )}
      placeholder="Select"
      // searchable={true}
      // containerStyle={{
      //   marginTop: Size.padding,
      //   marginBottom: Size.padding,
      // }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      onSelectItem={() => {
        setActive(false);
      }}
      setItems={setItems}
    />
  );
};

export default Select;
