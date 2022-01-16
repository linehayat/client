import React from 'react';
import { Box, HStack, VStack, Text, Textarea, Button, Image } from '@chakra-ui/react';

function FeedbackForm() {
  return (
    <form>
      <HStack w={["90%", "70%"]}>
        <Image src="/chat-bubbles.svg" w="14" mr="4" />
        <Text className="berkshire-font" fontWeight="400" fontSize="1.25em" color="#5B4C43">
          LineHayat Live Chat
        </Text>
      </HStack>
      <VStack
        h={["90%"]} w="100%" maxWidth="50rem"
        padding={["4", "50px"]}
        bgColor="#CFDED7"
        fontFamily="printclearly"
        fontSize={["1.25rem", "1.5rem"]}
        fontWeight="600"
        rounded="2xl" boxShadow="md"
        justifyContent="center" alignItems="center"
        color="#5B4C43"
      >
        <Text className="berkshire-font">Feedback for LineHayat Live Chat</Text>
        <Text>Kindly rate this chat session</Text>

        <div className="star-rating">
          {[5, 4, 3, 2, 1].map((rating) => <>
            <input type="radio" name="rating" value={rating} id={`star${rating}`} key={rating} />
            <label htmlFor={`star${rating}`}>
              <img src="/IconStarEmpty.svg" className="empty-star"></img>
              <img src="/IconStarFilled.svg" className="full-star"></img>
            </label>
          </>)}
        </div>
        <Text>Feel free to leave your comments...</Text>
        <Box mb="4" w="100%" textAlign={"center"}>
          <Textarea
            rounded="2xl"
            variant="filled"
            rows={6}
            maxWidth={"600px"}
            placeholder="Type your message here..."
            fontFamily="printclearly"
          ></Textarea>
        </Box>
        <Button
          type="submit"
          rounded="full"
          boxShadow="md"
          bgColor="#FFFAE7"
          size="md"
          fontFamily="printclearly"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}

export default FeedbackForm;