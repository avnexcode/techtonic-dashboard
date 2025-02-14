import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { convertCurrency } from "@/utils/convert-currency";
import { renderElements } from "@/utils/render-elements";
import { ProductTableMenu } from "./ProductTableMenu";
import type { ProductWithRelations } from "../types";
import { ProductTableBodySkeleton } from "../components/skeleton";

type ProductTableBodyProps = {
  products: ProductWithRelations[];
  isLoading: boolean;
  refetchProducts: () => void;
};

export const ProductTableBody = ({
  products,
  isLoading,
  refetchProducts,
}: ProductTableBodyProps) => {
  if (isLoading) {
    // return <ProductTableBodySkeleton />;
  }

  return (
    <TableBody>
      {renderElements({
        of: products,
        keyExtractor: (product) => product.id,
        render: (product, index) => (
          <TableRow>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category.name}</TableCell>
            <TableCell>{convertCurrency(product.price)}</TableCell>
            <TableCell>{product.discount}%</TableCell>
            <TableCell className="w-[100px]">
              <ProductTableMenu
                productId={product.id}
                refetchProducts={refetchProducts}
              />
            </TableCell>
          </TableRow>
        ),
        fallback: (
          <TableRow>
            <TableCell colSpan={6} className="py-8 text-center">
              No products found
            </TableCell>
          </TableRow>
        ),
      })}
    </TableBody>
  );
};
