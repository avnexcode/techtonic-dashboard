import {
  DashboardLayout,
  DashboardSection,
  PageContainer,
  SectionContainer,
} from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import { useParams } from "next/navigation";

export const DetailProductPage = () => {
  const params: { id: string } = useParams();
  const id = params?.id;
  return (
    <PageContainer title="Detail Product">
      <SectionContainer padded>
        <DashboardSection
          title="Detail Product"
          description={`Product ID: ${id}`}
        >
          <Heading>Product ID: {id}</Heading>
        </DashboardSection>
      </SectionContainer>
    </PageContainer>
  );
};

DetailProductPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};
