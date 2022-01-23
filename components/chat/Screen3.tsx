import { VStack, HStack, Box, Button, Text, Checkbox, UnorderedList, OrderedList, ListItem, Image } from '@chakra-ui/react';

interface Props {
  userAcceptsTermsOfUse: boolean;
  setUserAcceptsTermsOfUse(userAcceptsTermsOfUse: boolean): void;
}

function TermsOfUse({ userAcceptsTermsOfUse, setUserAcceptsTermsOfUse }: Props) {
  return (
    <VStack h="full" w="full" px="2" pt="4" justifyContent="center" fontFamily="printclearly" fontSize="1.25em" fontWeight="600" textAlign="center" overflow="auto">
      <Text className="berkshire-font" fontWeight="400" color="#5B4C43" fontSize={["1em", "1.25em"]}>Terms of Use</Text>
      <Box textAlign="left" px={["2", "8"]}>
        <Text mb="4" color="#5B4C43">
          By using LineHayat Support Services, you agree to the Terms and Conditions stated below. LineHayat is a Listening Service delivered by a team of well-trained Listening Volunteers and it is provided for USM students only.
        </Text>
        <OrderedList mb="8" color="#5B4C43">
          <ListItem>We provide immediate and accessible emotional support to students.</ListItem>
          <ListItem>We listen with an empathic, collaborative, and non-judgmental stance.</ListItem>
          <ListItem>We provide a safe space for you to talk or share feelings and thoughts.</ListItem>
          <ListItem>We do not provide professional counselling, medical advice, or treatment of any conditions.</ListItem>
          <ListItem>We are not and will not be treated as an emergency service or substitute or alternative to professional health care.</ListItem>
          <ListItem>We have taken three significant steps to ensure a high level of security:</ListItem>
          <OrderedList listStyleType="upper-roman">
            <ListItem>Both you and the Listening Volunteer will remain anonymous.</ListItem>
            <ListItem>We will never track your IP address.</ListItem>
            <ListItem>We will never save session transcripts. All chats will be automatically deleted when the conversation ends.</ListItem>
          </OrderedList>
        </OrderedList>
          <input type="checkbox" checked={userAcceptsTermsOfUse} onChange={(event) => setUserAcceptsTermsOfUse(event.target.checked)} />
          I agree with all the terms and conditions listed above.
      </Box>
    </VStack>
  );
}

export default TermsOfUse;