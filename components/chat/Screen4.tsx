import { VStack, Box, Text, UnorderedList, ListItem, Image } from '@chakra-ui/react';

function WaitingRoom() {
  return (
    <VStack
        justifyContent="center"
        h="full" w="full"
        px="2"
        fontSize="1.25em" fontFamily="Print Clearly" fontWeight="600" textAlign="center"
      >
        <Box h="140px">
          <Image
            src="/phone-call.gif"
            h="320px"
            marginTop="-90px"
            objectFit="scale-down"
          />
        </Box>
        <Text className="berkshire-font" fontWeight="400" fontSize={["1em", "1.25em"]} color="#5B4C43">Waiting Room</Text>

        <VStack w="100%" px="4" justifyContent="center" color="#5B4C43">
          <Text>Hi Friend,</Text>
          <Text>you are in the queue. \(^V^)/</Text>

          <Text>I will reach out to you soon. Thank you for your patience.</Text>

          <Text>While waiting, I would like to tell you:</Text>
          <UnorderedList px="4" textAlign="left" fontFamily="printclearly">
            <ListItem>Feel free to share your feelings and thoughts.</ListItem>
            <ListItem>Talk at your own pace and willingness.</ListItem>
            <ListItem>It’s okay to stay silent if you want to gather your thoughts.</ListItem>
          </UnorderedList>

          <Text mb="8">I appreciate you being here today.</Text>
        </VStack>
      </VStack>
  );
}

export default WaitingRoom;