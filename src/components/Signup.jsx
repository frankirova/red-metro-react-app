import { Heading, Input, Flex, Button, FormControl } from "@chakra-ui/react";
import { H2 } from "./H2";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const Signup = () => {
  const { signup, error, setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = await signup(user.email, user.password);

    if (!error) {
      navigate("/");
      setIsLoggedIn(true);
    }
  };
  return (
    <Flex height="85vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        width="40%"
        background="gray.100"
        p={12}
        rounded={6}
      >
        <Heading mb={6}>Registrarse</Heading>
        {error && <p className="text-danger">{error}</p>}
 
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="fran@gmail.com"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="email"
            name="email"
          />
          <Input
            placeholder="********"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="password"
            name="password"
          />
          <Button type='submit' colorScheme="green">Registrarse</Button>
        </form>
      </Flex>
    </Flex>
  );
};
