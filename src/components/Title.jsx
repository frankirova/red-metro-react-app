import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export const Title = ({ title }) => {
  return (
    <Flex w="900px" alignItems="start">
      <Heading as='h2' size='lg' color='green.500'>{title}</Heading>
    </Flex>
  );
};
