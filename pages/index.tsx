import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, } from "@chakra-ui/react";



const Home: NextPage = () => {

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function chat() {
    let d = (new Date().getUTCHours());
    if (d < 14 || d >= 18) onOpen();
    else router.push('/chat');
  }

  return (
    <div>
      <Head>
        <title>LineHayat</title>
        <meta name="description" content="LineHayat description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          LineHayat homepage
        </h1>
        <Button onClick={chat}>Chat</Button>
      </main>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>We are Sorry!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            We are not operating at this time. Please come back at these operating hours: 2pm - 6pm
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )

};

export default Home;