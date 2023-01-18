import { Heading, Input, Flex, Button } from "@chakra-ui/react";

export const Signup = () => {
  return (
    <Flex height="85vh" alignItems="center" justifyContent="center">
      <Flex direction="column" width='40%' background="gray.100" p={12} rounded={6}>
        <Heading mb={6}>Registrarse</Heading>
        <Input
          placeholder="fran@gmail.com.ar"
          variant="failed"
          mb={3}
          type="email"
        />
        <Input placeholder="********" variant="failed" mb={6} type="password" />
        <Button colorScheme="green">Registrarse</Button>
      </Flex>
    </Flex>
  );
};

