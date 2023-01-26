import { Heading, Input, Flex, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

export const Login = () => {
  const { login, setIsLoggedIn, error } = useContext(authContext);
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
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = await login(user.email, user.password);
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
        <Heading mb={6}>Iniciar sesion</Heading>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            placeholder="fran@gmail.com.ar"
            variant="failed"
            mb={3}
            type="email"
            name="email"
          />
          <Input
            onChange={handleChange}
            placeholder="********"
            variant="failed"
            mb={6}
            type="password"
            name="password"
          />
          <Button type="submit" colorScheme="green">
            Iniciar sesion
          </Button>
          <Button colorScheme="green" variant="ghost">
            <Link to="/signup">Registrarse</Link>
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};
