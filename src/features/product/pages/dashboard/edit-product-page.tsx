import {
  DashboardLayout,
  DashboardSection,
  PageContainer,
  SectionContainer,
} from "@/components/layouts";
import { EditProductForm } from "../../forms/EditProductForm";
import { useParams } from "next/navigation";

export const EditProductPage = () => {
  const params: { id: string } = useParams();
  const id = params?.id;

  return (
    <PageContainer title="Edit Product">
      <SectionContainer padded>
        <DashboardSection
          title="Edit Product"
          description="kontol kontol terkontol kontol ah slemek"
        >
          <EditProductForm productId={id} />
        </DashboardSection>
      </SectionContainer>
    </PageContainer>
  );
};

EditProductPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
