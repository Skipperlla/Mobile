import AsyncStorage from "@react-native-async-storage/async-storage";
const setStorage = (key: string, value: string) => {
  return AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
};

const getStorage = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(`@${key}`);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};
const removeStorage = (key: string) => {
  return AsyncStorage.removeItem(`@${key}`);
};

export { setStorage, getStorage, removeStorage };
