import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Test500ErrorButton = () => {
  return (
    <Button
      onClick={() => {
        throw new Error("Test error 500");
      }}
      className="flex min-h-min flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    >
      <h3 className="text-2xl font-bold">Test 500 →</h3>
      <div className="text-lg">Click Me! And See What Happen</div>
    </Button>
  );
};
export const Test404ErrorButton = () => {
  return (
    <Link
      href={"/test-404"}
      className="flex min-h-min flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    >
      <h3 className="text-2xl font-bold">Test 404 →</h3>
      <div className="text-lg">Click Me! And See What Happen</div>
    </Link>
  );
};
