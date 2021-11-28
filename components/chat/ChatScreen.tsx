import { useState } from 'react';

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
      <p>
        LineHayat Live Chat
      </p>
      {currentScreen === 0 && <Screen1 />}
      {currentScreen === 1 && <Screen2 />}
      {currentScreen === 2 && <TermsOfUse setUserAcceptsTermsOfUse={setUserAcceptsTermsOfUse} />}
      {currentScreen === 3 && <WaitingRoom />}
      {currentScreen === 4 && <Chat />}
      {0 < currentScreen && currentScreen < 3 && <button onClick={goToPreviousScreen}>Previous</button>}
      {currentScreen === 3 && <button onClick={() => {
        closeConnection('student canceled chat request');
        goToPreviousScreen();
      }}>Cancel chat</button>}
      {currentScreen < 2 && <button onClick={goToNextScreen}>Next</button>}
      {currentScreen === 2 && <button onClick={() => {
        goToNextScreen();
        requestChat();
        awaitResponse(goToNextScreen);
      }} disabled={!userAcceptsTermsOfUse}>Chat</button>}
    </div>
  );
}

export default ChatScreen;