import { Container, Text, VStack, Input, useColorMode, Button, HStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <HStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </HStack>
        <Text>Chat with the agent to start making edits.</Text>
        <Input placeholder="Exame" size="md" />
        <Input placeholder="Achados" size="md" />
      </VStack>
    </Container>
  );
};

export default Index;