import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export const Contacto = () => {
  return (
    <Container bg="#fff" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="rgba(236,242,246,255)"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contacto</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="black">
                    Rellene el siguiente formulario para contactarnos
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        textAlign="left"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #000" }}
                        leftIcon={<MdPhone color="#000" size="20px" />}
                      >
                        +54-351-389-0019
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #000" }}
                        leftIcon={<MdEmail color="#000" size="20px" />}
                      >
                        info@redmetropolitana.com.ar
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#000"
                        _hover={{ border: "2px solid #000" }}
                        leftIcon={<MdLocationOn color="#000" size="20px" />}
                      >
                        27 de abril 370
                      </Button>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Nombre</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Mensaje..."
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#198754"
                          color="white"
                          _hover={{}}
                        >
                          Enviar mensaje
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};
// <Stack spacing={5} align="center">
//             <Input
//             max={50}
//               focusBorderColor="green.300"
//               errorBorderColor="red.300"
//               placeholder="E-mail"
//             />
//             <Input
//               focusBorderColor="green.300"
//               errorBorderColor="red.300"
//               placeholder="Numero Telefonico"
//             />
//             <Textarea
//               focusBorderColor="green.300"
//               errorBorderColor="red.300"
//               placeholder="Mensaje..."
//             />
//           </Stack>
