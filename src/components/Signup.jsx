import { Heading, Input, Flex, Button, FormLabel } from "@chakra-ui/react";
import { H2 } from "./H2";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const Signup = () => {
  const { signup, error, setIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    direccion: "",
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
          <FormLabel>Nombre y apellido</FormLabel>
          <Input
            placeholder="Lautaro Diaz"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="text"
            name="name"
          />
          <FormLabel>Mail</FormLabel>
          <Input
            placeholder="lautarodiaz@gmail.com"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="email"
            name="email"
          />
          <FormLabel>Contraseña</FormLabel>
          <Input
            placeholder="********"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="password"
            name="password"
          />
          <FormLabel>Telefono</FormLabel>
          <Input
            placeholder="3513008914"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="number"
            name="phone"
          />
          <FormLabel>Direccion</FormLabel>
          <Input
            placeholder="Los panes de tu madre 1341"
            variant="failed"
            onChange={handleChange}
            mb={3}
            type="text"
            name="direccion"
          />
          <Button type="submit" colorScheme="green">
            Registrarse
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
