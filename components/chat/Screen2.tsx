import { VStack, HStack, Box, Button, Text, Checkbox, UnorderedList, OrderedList, ListItem, Image } from '@chakra-ui/react';

function Screen2() {
  return (
    <VStack h="full" w="full" px="2" justifyContent="center" fontFamily="printclearly" fontSize="1.25em" fontWeight="600" textAlign="center">
        <Text mt={["2", "8"]} className="berkshire-font" fontWeight="400" fontSize={["1em", "1.25em"]} color="#5B4C43">How does LineHayat's anonymous chat support service work?</Text>
        <HStack
          display="flex"
          flexDirection={["column", "row"]}
          justifyContent="center"
          color="#846859"
          h="full"
        >
          <VStack h="full" w="full">
            <Image
              boxSize={["9rem", "15rem"]}
              src={"how-it-works-1.svg"}
              alt="Read the terms and conditions"
            />
            <Text width="80%">Read the terms and conditions, before clicking ‘Next’.</Text>
          </VStack>
          <VStack h="full" w="full">
            <Image
              boxSize={["9rem", "15rem"]}
              src={"how-it-works-2.svg"}
              alt="Wait for our Listening Volunteer to reach you"
            />
            <Text width="80%">Please wait patiently for our Listening Volunteer to reach you.</Text>
          </VStack>
          <VStack h="full" w="full">
            <Image
              boxSize={["9rem", "15rem"]}
              src={"how-it-works-3.svg"}
              alt="Chat with our Listening Volunteer"
            />
            <Text width="80%">Proceed to have a one-on-one chat with our Listening Volunteer.</Text>
          </VStack>
        </HStack>
        <Text fontSize={["1em", "1.25em"]} color="#5B4C43">Note: Every chat is appointed at an approximate time of 20 minutes.</Text>
      </VStack>
  );
}

export default Screen2;