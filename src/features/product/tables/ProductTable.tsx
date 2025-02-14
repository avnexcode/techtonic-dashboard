import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProductTableBody } from "./ProductTableBody";
import type { ProductWithRelations } from "../types";
import { memo } from "react";

type ProductTableProps = {
  products: ProductWithRelations[];
  isLoading: boolean;
  refetchProducts: () => void;
};

export const ProductTable = memo(
  ({ products, isLoading, refetchProducts }: ProductTableProps) => {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <ProductTableBody
          products={products}
          isLoading={isLoading}
          refetchProducts={refetchProducts}
        />
      </Table>
    );
  },
);

ProductTable.displayName = "ProductTable";
