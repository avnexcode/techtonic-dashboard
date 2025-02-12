import { PageContainer } from "@/components/layouts/PageContainer";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Heading } from "@/components/ui/heading";

export const Error404Page = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <Heading size={"h3"}>404 - Page Not Found</Heading>
      </SectionContainer>
    </PageContainer>
  );
};
