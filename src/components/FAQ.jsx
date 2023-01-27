import { Container, Flex, Heading, Text } from "@chakra-ui/react";
export const FAQ = ({ title, text }) => {
  return (
    <div>
      <Flex direction="row">
        <Container maxHeight="300px" maxWidth="500px" my={6}>
          <Heading size="md" color="green.400">
            {title}
          </Heading>
          <Text my={3}>{text}</Text>
        </Container>
      </Flex>
    </div>
  );
};
