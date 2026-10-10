import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout title="Support"> {/* 👈 added title */}
      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and corporate account services"
            />
          }
          title="Live Chat"
          text="Don't have time to wait for the answer? Chat with us now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
