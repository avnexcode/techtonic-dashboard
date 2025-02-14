import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { renderElements } from "@/utils/render-elements";

export const ProductTableSkeleton = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Skeleton className="h-3 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-3 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-3 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-3 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-3 w-full" />
          </TableHead>
          <TableHead>
            <Skeleton className="h-3 w-full" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <ProductTableBodySkeleton />
    </Table>
  );
};

export const ProductTableBodySkeleton = () => {
  return (
    <TableBody>
      {renderElements({
        of: [...new Array<undefined>(5)],
        keyExtractor: (_, index) => index,
        render: () => (
          <TableRow>
            <TableCell className="w-[50px]">
              <Skeleton className="h-3 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-full" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-full" />
            </TableCell>
          </TableRow>
        ),
      })}
    </TableBody>
  );
};
