import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductLimitProps {
  currentLimit: number;
  onLimitChange: (limit: number) => void;
}

export const ProductLimit = ({
  currentLimit,
  onLimitChange,
}: ProductLimitProps) => {
  console.log("CONSOLE From ProductLimit Component");
  return (
    <Select
      value={currentLimit.toString()}
      onValueChange={(value) => onLimitChange(Number(value))}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Products per page" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="15">Limit 15</SelectItem>
        <SelectItem value="30">Limit 30</SelectItem>
        <SelectItem value="50">Limit 50</SelectItem>
      </SelectContent>
    </Select>
  );
};
