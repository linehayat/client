import { useState } from 'react';
import { VStack, HStack, Box, Button, Text, Checkbox, UnorderedList, OrderedList, ListItem, Image } from '@chakra-ui/react';

import { closeConnection, requestChat, awaitResponse } from '../../utils';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import TermsOfUse from './Screen3';
import WaitingRoom from './Screen4';
import Chat from './Screen5';

function ChatScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userAcceptsTermsOfUse, setUserAcceptsTermsOfUse] = useState(false);

  function goToPreviousScreen() {
    if (0 < currentScreen) {
      setCurrentScreen((currentScreen) => currentScreen - 1);
    }
  }

  function goToNextScreen() {
    if (currentScreen < 4) {
      setCurrentScreen((currentScreen) => currentScreen + 1);
    }
  }

  return (
    <div>
      <HStack w={["90%", "70%"]}>
        <Image src="/chat-bubbles.svg" w="14" mr="4" />
        <Text className="berkshire-font" fontWeight="400" fontSize="1.25em" color="#5B4C43">
          LineHayat Live Chat
        </Text>
      </HStack>
      <VStack
        w="100%" h="100%"
        spacing={0}
        bgColor="#CFDED7"
        rounded="xl"
      >
        {currentScreen === 0 && <Screen1 />}
        {currentScreen === 1 && <Screen2 />}
        {currentScreen === 2 && <TermsOfUse userAcceptsTermsOfUse={userAcceptsTermsOfUse} setUserAcceptsTermsOfUse={setUserAcceptsTermsOfUse} />}
        {currentScreen === 3 && <WaitingRoom />}
        {currentScreen === 4 && <Chat />}
        {currentScreen < 4 &&
          <HStack
            display="flex"
            w={["90%", "100%"]} py="4" px={["4", "8"]}
            flexBasis="40px"
            fontFamily={"Quicksand"}
            justifyContent="space-between"
          >
            {0 < currentScreen && currentScreen < 3 && <Button onClick={goToPreviousScreen} bgColor="#F3F3F3" borderRadius={"99rem"} color="#5B4C43" boxShadow="md">Previous</Button>}
            {currentScreen === 3 && <Button onClick={() => {
              closeConnection('student canceled chat request');
              goToPreviousScreen();
            }} bgColor="#F3F3F3" borderRadius={"99rem"} color="#5B4C43" boxShadow="md">Cancel chat</Button>}
            {currentScreen < 2 && <Button onClick={goToNextScreen} bgColor="#FFFAE7" borderRadius={"99rem"} color="#5B4C43" boxShadow="md" marginLeft={"auto"}>Next</Button>}
            {currentScreen === 2 && <Button onClick={() => {
              goToNextScreen();
              requestChat();
              awaitResponse(goToNextScreen);
            }} disabled={!userAcceptsTermsOfUse} bgColor="#FFFAE7" borderRadius={"99rem"} color="#5B4C43" boxShadow="md">Chat</Button>}
          </HStack>
        }
      </VStack>
    </div>
  );
}

export default ChatScreen;