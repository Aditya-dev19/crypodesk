import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm">
          You will receive a response within 24 hours of submission.
        </Text>

        <HStack flexDir={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel> {/* 👈 fixed */}
            <Input placeholder="Enter Your Surname.." />
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel> {/* 👈 fixed */}
          <Textarea
            placeholder="Enter Your Message.."
            minH="100px" /* 👈 makes textarea usable */
          />
        </FormControl>

        <Checkbox defaultChecked>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="p.purple">
              {" "}Terms &amp; Conditions.
            </Box>
          </Text>
        </Checkbox>

        <Stack>
          <Button type="button" fontSize="sm">
            Send a Message
          </Button>
          <Button type="button" fontSize="sm" colorScheme="gray">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;