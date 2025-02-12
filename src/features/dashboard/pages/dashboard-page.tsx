import { PageContainer, SectionContainer } from "@/components/layouts";
import { DashboardLayout } from "../components/layouts";

export const DashboardPage = () => {
  return (
    <PageContainer title="Dashboard">
      <SectionContainer padded>
        <h1>Hello Dashboard</h1>
      </SectionContainer>
    </PageContainer>
  );
};

DashboardPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
