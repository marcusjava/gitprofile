import React from "react";
import {
  Container,
  Profile as ProfileContainer,
  Stats,
  Avatar,
  Title,
  SubTitle,
  Text,
  StatsItem,
  Button,
  Info,
  InfoItem,
  Link,
} from "./styles";

// import { Container } from './styles';

function Profile({ children, ...props }) {
  return <ProfileContainer {...props}>{children}</ProfileContainer>;
}

Profile.Container = function ({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Profile.Avatar = function ({ ...props }) {
  return <Avatar {...props} />;
};

Profile.Title = function ({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Profile.SubTitle = function ({ children, ...props }) {
  return <SubTitle {...props}>{children}</SubTitle>;
};

Profile.Link = function ({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Profile.Text = function ({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Profile.StatsItem = function ({ children, ...props }) {
  return <StatsItem {...props}>{children}</StatsItem>;
};

Profile.Stats = function ({ children, ...props }) {
  return <Stats {...props}>{children}</Stats>;
};

Profile.Button = function ({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
};

Profile.Info = function ({ children, ...props }) {
  return <Info {...props}>{children}</Info>;
};

Profile.InfoItem = function ({ children, ...props }) {
  return <InfoItem {...props}>{children}</InfoItem>;
};

export default Profile;
