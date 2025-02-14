import { PageContainer, SectionContainer } from "@/components/layouts";
import { DashboardLayout } from "@/components/layouts";
import { DashboardSection } from "@/components/layouts";

export const DashboardPage = () => {
  return (
    <PageContainer title="Dashboard">
      <SectionContainer padded>
        <DashboardSection title="Dashboard" description="Revalidate your data">
          <h1>Hello Dashboard</h1>
        </DashboardSection>
      </SectionContainer>
    </PageContainer>
  );
};

DashboardPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
