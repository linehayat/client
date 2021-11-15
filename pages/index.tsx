import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, } from "@chakra-ui/react";



const Home: NextPage = () => {
  function OutsideHours() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Chat</Button>

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
    </>
  )
  }

  let d = new Date();

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
      {(d.getUTCHours()<14 || d.getUTCHours()>=18)? <Link href="/chat">Chat</Link> :
      <OutsideHours/>}
    </main>

  </div>
)};

export default Home;