import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

import AnimatedLottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover>
        <AnimationWrapper>
          <AnimatedLottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../../../assets/watermelon.json")}
          />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer size="large" />
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </AccountCover>
    </AccountBackground>
  );
};
