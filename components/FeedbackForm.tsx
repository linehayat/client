import { useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Textarea,
  Button,
  Image,
} from '@chakra-ui/react';

function FeedbackForm() {
  const [isRatingValid, setIsRatingValid] = useState(true);
  const [formSubmissionStatus, setFormSubmissionStatus] = useState('');

  return (
    <div>
      <HStack w={['90%', '70%']}>
        <Image src="/chat-bubbles.svg" w="14" mx="4" />
        <Text
          className="berkshire-font"
          fontWeight="400"
          fontSize="1.25em"
          color="#5B4C43"
        >
          LineHayat Live Chat
        </Text>
      </HStack>
      {['', 'error'].includes(formSubmissionStatus) &&
        <form
          action="/api/feedback"
          method="POST"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = Object.fromEntries(
              new FormData(event.target as HTMLFormElement).entries()
            );
            if (!Object.prototype.hasOwnProperty.call(formData, 'rating')) {
              setIsRatingValid(false);
            } else {
              fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
              }).then((response) => {
                if (response.status === 201) {
                  setFormSubmissionStatus('success');
                } else {
                  setFormSubmissionStatus('error');
                }
              });
            }
          }}
        >
          <VStack
            h={['90%']}
            w="100%"
            maxWidth="50rem"
            padding={['4', '50px']}
            bgColor="#CFDED7"
            fontFamily="printclearly"
            fontSize={['1.25rem', '1.5rem']}
            fontWeight="600"
            rounded="2xl"
            boxShadow="md"
            justifyContent="center"
            alignItems="center"
            color="#5B4C43"
          >
            <Text className="berkshire-font">Feedback for LineHayat Live Chat</Text>
            <Text>Kindly rate this chat session</Text>

            <div className="star-rating">
              {[5, 4, 3, 2, 1].map((rating) => (
                <>
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    id={`star${rating}`}
                    key={rating}
                    onClick={() => setIsRatingValid(true)}
                  />
                  <label htmlFor={`star${rating}`}>
                    <img src="/IconStarEmpty.svg" className="empty-star"></img>
                    <img src="/IconStarFilled.svg" className="full-star"></img>
                  </label>
                </>
              ))}
            </div>
            <Text
              display={isRatingValid ? 'none' : ''}
              textAlign={'center'}
              color={'#bf3f3f'}
              style={{ marginTop: "-0.5rem" }}
            >
              Please rate the chat session
            </Text>
            <Text>Feel free to leave your comments...</Text>
            <Box mb="4" w="100%" textAlign={'center'}>
              <Textarea
                name="message"
                rounded="2xl"
                variant="filled"
                rows={6}
                maxWidth={'600px'}
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
      }
      {formSubmissionStatus === 'error' &&
      <Text
        textAlign={'center'}
        color={'#bf3f3f'}
      >
        Something went wrong, please try again
      </Text>
      }
      {formSubmissionStatus === 'success' &&
      <Text
        textAlign={'center'}
        color={'#3fbf3f'}
      >
        Thank you for your feedback!
      </Text>
      }
    </div>
  );
}

export default FeedbackForm;
