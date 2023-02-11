import React from "react";
import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { TextInput } from "react-native-paper";
const BackgroundImage = styled(ImageBackground)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountBackground = ({ children }) => {
  return (
    <BackgroundImage
      source={require("../../../assets/home-bg.jpg")}
      resizeMode="cover"
    >
      {children}
    </BackgroundImage>
  );
};

export const AccountCover = styled.View`
  background-color: rgba(170, 170, 170, 0.4);
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  width: 90%;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: "tomato",
})`
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[1]};
  border-radius: 5px;
`;

export const AuthInput = styled(TextInput).attrs({
  selectionColor: "tomato",
  activeUnderlineColor: "tomato",
  underlineColor: "transparent",
  activeOutlineColor: "tomato",
  textColor: "black",
})`
  padding-horizontal: ${(props) => props.theme.space[2]};
  padding-vertical: ${(props) => props.theme.space[1]};

  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
