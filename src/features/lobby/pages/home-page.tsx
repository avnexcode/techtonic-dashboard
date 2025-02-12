import { PageContainer, SectionContainer } from "@/components/layouts";
import { renderElements } from "@/utils/render-elements";
import {
  SonnerButton,
  ToastButton,
  Test404ErrorButton,
  Test500ErrorButton,
} from "../components";
import Link from "next/link";

export const HomePage = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <Link
              className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
              href="/dashboard"
            >
              Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
            </Link>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <SonnerButton />
              <ToastButton />
              <Test404ErrorButton />
              <Test500ErrorButton />
            </div>
            <div>
              {renderElements({
                of: [...new Array<undefined>(10)],
                render: (_, index) => (
                  <p key={index} className="text-2xl text-white">
                    Hello World
                  </p>
                ),
              })}
            </div>
          </div>
        </main>
      </SectionContainer>
    </PageContainer>
  );
};
