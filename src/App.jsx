import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";

import Dashboard from "./pages/Dashboard/Dashboard";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";

const NotFound = () => (
  <Flex h="100vh" align="center" justify="center" bg="black.5">
    <VStack spacing={4}>
      <Heading textStyle="h1">404</Heading>
      <Text color="black.60">Page not found.</Text>
      <Button as={Link} to="/">
        Back to Dashboard
      </Button>
    </VStack>
  </Flex>
);

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/transactions", element: <TransactionPage /> },
  { path: "/support", element: <Support /> },
  { path: "*", element: <NotFound /> }, // 👈 catch-all
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;