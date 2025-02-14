import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis, ScanEye, SquarePen } from "lucide-react";
import { useRouter } from "next/router";
import { DeleteProductDialog } from "../components/action/DeleteProductDialog";

type ProductTableMenuProps = {
  productId: string;
  refetchProducts: () => void;
};

export const ProductTableMenu = ({
  productId,
  refetchProducts,
}: ProductTableMenuProps) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            router.replace(`/dashboard/product/${productId}/detail`)
          }
        >
          <ScanEye />
          Detail
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace(`/dashboard/product/${productId}/edit`)}
        >
          <SquarePen />
          Edit
        </DropdownMenuItem>
        <DeleteProductDialog
          productId={productId}
          refetchProducts={refetchProducts}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
