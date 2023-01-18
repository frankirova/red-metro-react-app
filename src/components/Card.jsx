import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const CardGenerica = ({
  title,
  caract1,
  caract2,
  caract3,
  caract4,
  textButton,
  to
}) => {
  return (
    <div>
      <Card my={3} size='sm'>
        <CardHeader className="text-success">
          <Heading size="md"> {title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{caract1}</Text>
          <Text>{caract2}</Text>
          <Text>{caract3}</Text>
          <Text>{caract4}</Text>
        </CardBody>
        <CardFooter>
          <Button className="text-success"><Link to={to}>{textButton}</Link></Button>
        </CardFooter>
      </Card>
    </div>
  );
};
