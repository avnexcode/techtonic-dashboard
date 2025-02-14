import { PageContainer, SectionContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";

export const Error500Page = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <Heading size={"h3"}>404 - Page Not Found</Heading>
      </SectionContainer>
    </PageContainer>
  );
};
