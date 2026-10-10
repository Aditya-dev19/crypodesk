import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const timestamps = ["7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"];

const PriceSection = () => {
  const handleBuy = () => {
    // TODO: open buy modal / navigate
    console.log("Buy clicked");
  };

  const handleSell = () => {
    // TODO: open sell modal / navigate
    console.log("Sell clicked");
  };

  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{ base: "flex-start", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button
            leftIcon={<Icon as={AiFillPlusCircle} />}
            onClick={handleBuy}
          >
            Buy
          </Button>
          <Button
            leftIcon={<Icon as={AiOutlineMinusCircle} />}
            onClick={handleSell}
          >
            Sell
          </Button>
        </HStack>
      </Flex>

      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/graph.svg" alt="Price graph" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Text color="black.60" py="10" textAlign="center">
              Chart data for 1D view coming soon.
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;