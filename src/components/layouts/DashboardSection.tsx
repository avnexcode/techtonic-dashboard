import { Heading } from "../ui/heading";

type DashboardSectionProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export const DashboardSection = ({
  children,
  ...props
}: DashboardSectionProps) => {
  return (
    <section>
      <header className="mb-20">
        <Heading size={"h3"}>{props.title}</Heading>
        {props.description && <p>{props.description}</p>}
      </header>
      <main>{children}</main>
    </section>
  );
};
