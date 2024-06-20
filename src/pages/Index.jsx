import { Container, Text, VStack, Input, useColorMode, Button, HStack, Heading, Box } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4} width="100%" justifyContent="space-between">
          <Heading as="h1" size="xl">Radiology Report Generator</Heading>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </HStack>
        <Text fontSize="lg" textAlign="center">Enter the details below to generate a radiology report.</Text>
        <Input placeholder="Exame" size="md" />
        <Input placeholder="Achados" size="md" />
        <Button colorScheme="blue" size="md">Generate Report</Button>
      </VStack>
    </Container>
  );
};

export default Index;