import React, { useState } from "react";
import { Button, FlatList, ListRenderItem, TextInput, View } from "react-native";

import { ChatItem, RenderChatItem } from "./ChatItem";

import Styles from './Styles';

type ChatProps = {
  username: string;
  image: string;
};

const Chat = ({ username, image }: ChatProps) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <RenderChatItem 
      chatItem={item}
      username={username}
    />
  );

  return (
    <View style={Styles.container}>
      <FlatList 
        inverted
        data={chatItemList.sort((a,b) => b.timeStamp - a.timeStamp)}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <View style={Styles.sendSection}>
        <TextInput 
          style={Styles.chatTextInput} 
          value={chatInput}
          onChangeText={text => setChatInput(text)}
        />
        <Button
          title="Send"
          onPress={() => {
            setChatItemList([
              ...chatItemList,
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                image: image,
                timeStamp: Date.now(),
                by: username
              }
            ]);
            setChatInput("");
          }}
        />
      </View>
      {/* <Text>Hi {username}! You can chat here shortly.</Text> */}
    </View>
  );
};

export default Chat;
