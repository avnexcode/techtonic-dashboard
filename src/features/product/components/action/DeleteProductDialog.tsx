import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useDeleteProduct } from "../../api";

type DeleteProductDialogProps = {
  productId: string;
  refetchProducts: () => void;
};

export const DeleteProductDialog = ({
  productId,
  refetchProducts,
}: DeleteProductDialogProps) => {
  console.log("CONSOLE From DeleteProductDialog Components");
  const { mutate: deletePriduct, isPending: isDeleteProductPending } =
    useDeleteProduct({
      id: productId,
      onSuccess: () => {
        void refetchProducts();
        toast.success("Berhasil menghapus produk");
      },
    });
  const handleDelete = () => {
    return deletePriduct();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash2 />
          Delete
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isDeleteProductPending}
            className="bg-red-500"
          >
            {isDeleteProductPending ? (
              <>
                <Loader2 className="animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
