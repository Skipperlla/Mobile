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
import LoginInput from "@components/Input/LoginInput";
import Google from "assets/icons/Google";
import { useHeaderHeight } from "@react-navigation/elements";
import { SetupPageType } from "@constants/pages";
import Button from "@components/Button/Button";
import AuthButton from "@components/Button/AuthButton";
import styles from "@styles/styles";
import { LoginInputProps } from "@config/inputProps";
import { ILoginStackProps } from "types/navigation";

export interface ILoginFormProps {
  email: string;
  password: string;
}

const Login: FC<ILoginStackProps> = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const [form, setForm] = useState<ILoginFormProps>({
    email: "",
    password: "",
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
            Welcome to Compton Store
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
            Sign in to continue
          </Text>
        </View>
      </View>
      {LoginInputProps.map((element, index) => {
        return (
          <LoginInput
            setForm={setForm}
            key={index}
            name={element.name}
            index={index}
            iconName={element.iconName}
            placeholder={element.placeholder}
            keyboardType={element.keyboardType}
          />
        );
      })}
      {/* Sign In */}
      <Button
        title={"Sign In"}
        onPress={() => {
          console.log(form);
        }}
      />

      {/* Sign In */}
      {/* Or */}
      <View
        style={{
          marginTop: 21,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            height: 1,
            borderColor: colors.Light,
            flex: 1,
          }}
        />
        <View style={{ paddingLeft: 28, paddingRight: 23 }}>
          <Text
            style={{
              color: colors.grey,
              fontFamily: "Poppins_700Bold",
            }}
          >
            OR
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            height: 1,
            borderColor: colors.Light,
            flex: 1,
          }}
        />
      </View>
      {/* Or */}

      {/* Auth With */}
      <AuthButton title={"Login with Google"} icon={<Google />} />
      {Platform.OS === "ios" && (
        <AuthButton title={"Login with Apple"} icon={<Google />} />
      )}
      {/* Auth With */}

      {/* Forgot Password */}
      <View style={{ marginTop: 16 }}>
        <Text
          style={[
            styles.linkText,
            {
              lineHeight: 18,
            },
          ]}
        >
          Forgot Password?
        </Text>
      </View>
      {/* Forgot Password */}

      {/* Have A Account */}
      <View style={{ marginTop: 8 }}>
        <Text
          style={[
            styles.largeTextRegularCaption,
            {
              color: colors.grey,
              lineHeight: 18,
            },
          ]}
        >
          Don’t have a account?{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate(SetupPageType.REGISTER)}
          >
            <Text
              style={[
                styles.linkText,
                {
                  lineHeight: 18,
                },
              ]}
            >
              Register
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      {/* Have A Account */}
    </KeyboardAvoidingView>
  );
};

export default Login;
