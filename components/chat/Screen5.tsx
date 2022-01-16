import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Text, Textarea, HStack, Button } from "@chakra-ui/react";

import { handleChatEvents, sendMessage, endChat } from '../../utils';
import Modal from '../Modal';
import Messages from './Messages';

interface Message {
  receivedAt: Date;
  sender: 'self' | 'other';
  text: string;
}

function Chat() {
  const [messageInputText, setMessageInputText] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [isChatEndModalOpen, setIsChatEndModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    handleChatEvents({
      onNewMessage: (newMessage) => setMessages((messages) => [...messages, {
        receivedAt: new Date(),
        sender: 'other',
        text: newMessage,
      }]),
      onChatEnd: () => setIsChatEndModalOpen(true),
    });
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" w="100%" h={["100%", "550px"]} bgColor="#CFDED7" rounded="xl" boxShadow="xl">
        <HStack justifyContent="space-between" px="4" py="2" borderBottom="1px solid white">
          <HStack>
            <Box w="20px" h="20px" bgColor="#49CA85" borderRadius="50%"></Box>
            <Text fontSize="1.5em" fontFamily="printclearly" fontWeight="600">Listening Volunteer</Text>
          </HStack>
          <Button
            px="4"
            size="xs"
            colorScheme="red"
            borderRadius="100px"
            onClick={() => {
              endChat();
              router.push('/feedback');
            }}
            boxShadow="md"
          >
            End chat
          </Button>
        </HStack>
        <Messages messages={messages} />
        <HStack h={["100px", "100px"]}
          rounded="xl"
          borderTopLeftRadius="0"
          borderTopRightRadius="0"
          bgColor="#E5EAEE"  boxShadow="xl"
        >
          <Textarea
            variant="filled"
            w={["88%", "90%"]} h="full"
            rounded="xl"
            borderTopLeftRadius="0"
            borderTopRightRadius="0"
            bgColor="#E5EAEE"
            value={messageInputText}
            onChange={(event) => setMessageInputText(event.target.value)}
            fontFamily="printclearly"
            fontSize="1.25em"
            fontWeight="600"
            placeholder="Type your messages here..."
          />
          <button onClick={() => {
            if (messageInputText) {
              sendMessage(messageInputText);
              setMessages((messages) => [...messages, {
                receivedAt: new Date(),
                sender: 'self',
                text: messageInputText,
              }]);
              setMessageInputText('');
            }
          }}>
            <img src="/send-message.svg" alt="Send message" />
          </button>
        </HStack>
      </Box>
      {isChatEndModalOpen && <Modal>
        <div>
          <p>Volunteer ended the chat</p>
          <Link href="/feedback">Leave feedback</Link>
        </div>
      </Modal>}
    </>
  );
}

export default Chat;