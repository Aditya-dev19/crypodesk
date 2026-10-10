import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { icon: RxDashboard,   text: "Dashboard",    link: "/" },
  { icon: BsArrowDownUp, text: "Transactions", link: "/transactions" },
];

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => location.pathname === link;

  const linkStyles = (isActive) => ({
    bg: isActive ? "#F3F3F7" : "transparent",
    color: isActive ? "#171717" : "#797E82",
    borderRadius: "10px",
    py: "3",
    px: "4",
    _hover: { bg: "#F3F3F7", color: "#171717" },
  });

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">
          ₿ CryptoDesk
        </Heading>

        <Box mt="6" mx="3">
          {navLinks.map((nav) => {
            const isActive = isActiveLink(nav.link);
            return (
              <Link to={nav.link} key={nav.text}>
                <HStack {...linkStyles(isActive)}>
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">
                    {nav.text}
                  </Text>
                </HStack>
              </Link>
            );
          })}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack {...linkStyles(isActiveLink("/support"))}>
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;

