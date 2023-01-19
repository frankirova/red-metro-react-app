import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const CardGenerica = ({
  title,
  caract1,
  caract2,
  caract3,
  caract4,
  textButton,
  to,
  precio,
}) => {
  return (
    <div>
      <Card my={3} maxW="lg" variant='filled'>
        <CardHeader className="text-success">
          <Heading size="md"> {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{caract1}</Text>
          <Text>{caract2}</Text>
          <Text>{caract3}</Text>
          <Text>{caract4}</Text>
          <Text my={4} color="green.600" fontSize="2xl">
            {precio}
          </Text>
        </CardBody>
        <Divider color='gray.400' my={1} />
        <CardFooter>
          <Button className="text-success">
            <Link to={to}>{textButton}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
