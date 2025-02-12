import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const ToastButton = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          title: "Success",
          description: "Toaster testing successfully",
        })
      }
      className="flex min-h-min flex-col items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    >
      <h3 className="text-2xl font-bold">Test Toaster →</h3>
      <div className="text-lg">Click Me! And See What Happen</div>
    </Button>
  );
};
