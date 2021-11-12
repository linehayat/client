import { useState } from 'react';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import TermsOfUse from './Screen3';
import WaitingRoom from './Screen4';

function ChatScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [userAcceptsTermsOfUse, setUserAcceptsTermsOfUse] = useState(false);

  function goToPreviousScreen() {
    if (0 < currentScreen) {
      setCurrentScreen((currentScreen) => currentScreen - 1);
    }
  }

  function goToNextScreen() {
    if (currentScreen < 3) {
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
      {0 < currentScreen && <button onClick={goToPreviousScreen}>
        {currentScreen === 3 ? 'Cancel chat' : 'Previous'}
      </button>}
      {currentScreen < 3 && <button onClick={goToNextScreen} disabled={currentScreen === 2 && !userAcceptsTermsOfUse}>
        {currentScreen === 2 ? 'Chat' : 'Next'}
      </button>}
    </div>
  );
}

export default ChatScreen;