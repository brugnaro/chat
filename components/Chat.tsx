import React from "react";
import { Text, View } from "react-native";

type ChatProps = {
  username: string;
};

const Chat = ({ username }: ChatProps) => {
  return (
    <View>
      <Text>Hi test</Text>
    </View>
  );
};

export default Chat;
