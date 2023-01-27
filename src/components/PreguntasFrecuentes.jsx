import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { FAQ } from "./FAQ";
import { MyDivider } from "./MyDivider";
import { Title } from "./Title";

export const PreguntasFrecuentes = () => {
  return (
    <div>
      <Flex mx={6} flexDirection="column" alignItems="center">
        <Flex
          bg="gray.200"
          my={2}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="200px"
          w="100vw"
        >
          <Heading size="xl" color="green.500">
            Preguntas frecuentes
          </Heading>
          <Text my={6} as="b">
            Obtén respuestas a las preguntas más frecuentes.
          </Text>
        </Flex>
        {/* <Spacer /> */}
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <Title title="Saber mas acerca de Internet por aire" />
        <Flex width="900px" justifyContent="start">
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
          <Spacer />
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
        </Flex>
        <Flex width="900px" justifyContent="start">
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
          <Spacer />
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
        </Flex>
        <MyDivider />
        <Title title="Problemas frecuentes" />
        <Flex width="900px" justifyContent="start">
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
          <Spacer />
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
        </Flex>{" "}
        <Flex width="900px" justifyContent="start">
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
          <Spacer />
          <FAQ
            title="Titulo preg"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet mollitia modi quasi consequuntur. Non debitis voluptatem libero reiciendis ipsum, quisquam adipisci accusamus eveniet amet temporibus cumque, quidem vel quae!"
          />
        </Flex>
      </Flex>
    </div>
  );
};
