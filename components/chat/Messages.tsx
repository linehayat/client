import { useEffect, useRef } from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";

interface Message {
  receivedAt: Date;
  sender: 'self' | 'other';
  text: string;
}

interface Props {
  messages: Message[];
}

function Messages({ messages }: Props) {
  const chatListRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    chatListRef.current?.scrollTo(0, chatListRef.current?.scrollHeight)
  }, [messages]);

  return (
    <VStack flexGrow={1} overflowY="auto" maxHeight="calc(100vh - 11.5rem - 101px)" p="2" spacing={1} ref={chatListRef}>
      {messages.map((message, index) => (
        <Box
          maxW="80%"
          alignSelf={message.sender === 'self' ? "flex-end" : "flex-start"}
          mb="4"
        >
          <Text
            fontWeight="600"
            textAlign={message.sender === 'self' ? "right" : "left"}
            fontFamily="printclearly"
            fontSize="1em">{message.receivedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Text>
          <Box
            rounded="md"
            w="100%"
            backgroundColor={message.sender === 'self' ? "#E5EAEE" : "white"}
            px="16px" py="8px"
            fontWeight="600"
            fontSize="1.25em"
            fontFamily="Print Clearly"
          >
            <Text 
              whiteSpace="pre-wrap">{message.text}
            </Text>
          </Box>
        </Box>
      ))}
    </VStack>
  );
}

export default Messages;