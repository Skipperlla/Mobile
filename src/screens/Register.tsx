import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { FC, useState } from "react";
import colors from "@constants/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { SetupPageType } from "@constants/pages";
import Button from "@components/Button/Button";
import styles from "@styles/styles";
import RegisterInput from "@components/Input/RegisterInput";
import { RegisterInputProps } from "@config/inputProps";
import { IRegisterStackProps } from "types/navigation";
export interface IRegisterProps {
  fullName: string;
  email: string;
  password: string;
  passwordAgain: string;
}

const Register: FC<IRegisterStackProps> = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [form, setForm] = useState<IRegisterProps>({
    fullName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={headerHeight}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            width: 72,
            height: 72,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome5 name="vector-square" color="white" size={32} />
        </View>
        <View>
          <Text
            style={[
              styles.h4,
              {
                marginTop: 16,
                color: colors.dark,
                lineHeight: 24,
              },
            ]}
          >
            Let’s Get Started
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.normalTextRegularBody,
              {
                marginTop: 8,
                color: colors.grey,
                lineHeight: 21.6,
              },
            ]}
          >
            Create an new account
          </Text>
        </View>
      </View>
      {RegisterInputProps.map((element, index) => {
        return (
          <RegisterInput
            setForm={setForm}
            key={index}
            index={index}
            iconName={element.iconName}
            placeholder={element.placeholder}
            keyboardType={element.keyboardType}
            name={element.name}
          />
        );
      })}
      {/* Sign In */}
      <Button
        title={"Sign Up"}
        onPress={() => {
          console.log(form);
        }}
      />

      {/* Sign In */}

      <View style={{ marginTop: 24 }}>
        <Text
          style={[
            styles.normalTextRegularBody,
            {
              color: colors.grey,
              lineHeight: 18,
            },
          ]}
        >
          have a account?{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(SetupPageType.LOGIN)}
          >
            <Text
              style={[
                styles.linkText,
                {
                  lineHeight: 18,
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
