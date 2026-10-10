import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const tabs = [
  { name: "All", count: 349 },
  { name: "Deposit", count: 114 },
  { name: "Withdraw", count: 55 }, // 👈 fixed typo
  { name: "Trade", count: 50 },
];

const TransactionPage = () => {
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>
          Export CSV
        </Button>
      </Flex>

      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="search" placeholder="Search..." /> {/* 👈 fixed */}
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel><TransactionTable /></TabPanel>
            <TabPanel><TransactionTable /></TabPanel>
            <TabPanel><TransactionTable /></TabPanel>
            <TabPanel><TransactionTable /></TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage; 