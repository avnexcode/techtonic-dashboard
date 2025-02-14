import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { renderElements } from "@/utils/render-elements";
import { useEffect, useState } from "react";
import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { useCategories } from "../api/useCategories";

type SelectCategoryProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
};

export const SelectCategory = <T extends FieldValues>({
  name,
  label,
}: SelectCategoryProps<T>) => {
  const form = useFormContext<T>();
  const { data: categories, isLoading: isCategoriesLoading } = useCategories({
    params: {
      limit: 1000000,
    },
  });
  console.log("CONSOLE From SelectCategory Component");
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (form.control && categories && !isCategoriesLoading) {
      setIsReady(true);
    }
  }, [form.control, categories, isCategoriesLoading]);

  if (!isReady) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-5 w-44" />
        <Skeleton className="h-9 w-full" />
      </div>
    );
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <FormItem>
          <FormLabel>{label ?? "Pilih kategori"}</FormLabel>
          <Select
            onValueChange={onChange}
            value={value ?? ""}
            defaultValue={value}
          >
            <FormControl>
              <SelectTrigger className="capitalize">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {renderElements({
                of: categories?.data,
                keyExtractor: (category) => category.id,
                render: (category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                    className="capitalize"
                  >
                    {category.name}
                  </SelectItem>
                ),
                fallback: (
                  <SelectItem value={""}>
                    Tidak ada data kategori tersedia
                  </SelectItem>
                ),
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
