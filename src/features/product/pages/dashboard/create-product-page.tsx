import {
  DashboardLayout,
  DashboardSection,
  PageContainer,
  SectionContainer,
} from "@/components/layouts";
import { CreateProductForm } from "../../forms/CreateProductForm";

export const CreateProductPage = () => {
  return (
    <PageContainer title="Create Product">
      <SectionContainer padded>
        <DashboardSection
          title="Buat Produk Baru"
          description="kontol kontol terkontol kontol ah slemek"
        >
          <CreateProductForm />
        </DashboardSection>
      </SectionContainer>
    </PageContainer>
  );
};

CreateProductPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
