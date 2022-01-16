import { VStack, Text } from '@chakra-ui/react';

function Screen1() {
  return (
    <VStack minHeight={"60vh"} h="full" w="full" px="2" justifyContent="center" fontSize={["1.5rem", "2rem"]} fontFamily="printclearly" fontWeight="600" color="#5B4C43">
      <Text textAlign="center" mb="4">Hi, how are you today?</Text>
      <Text textAlign="center">Would you like to talk to someone?</Text>
    </VStack>
  );
}

export default Screen1;