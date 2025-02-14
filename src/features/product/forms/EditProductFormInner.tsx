import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import type { UpdateProductFormSchema } from "../types";
import { SelectCategory } from "@/features/category/components";
import { inputHandle, inputParse } from "@/utils/form-input";
import { Textarea } from "@/components/ui/textarea";

type EditProductFormInnerProps = {
  formId: string;
  onSubmit: (values: UpdateProductFormSchema) => void;
};

export const EditProductFormInner = ({
  formId,
  onSubmit,
}: EditProductFormInnerProps) => {
  const form = useFormContext<UpdateProductFormSchema>();
  return (
    <form
      id={formId}
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nama produk</FormLabel>
            <FormControl>
              <Input type="text" placeholder="input here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <SelectCategory name="category_id" />
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Harga</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="input here"
                {...field}
                onChange={(e) => {
                  inputHandle("onChange", "number", e);
                  field.onChange(e);
                }}
                onPaste={(e) => {
                  inputHandle("onPaste", "number", e);
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image URL</FormLabel>
            <FormControl>
              <Input type="text" placeholder="input here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="discount"
        render={({ field: { onChange, value, ...field } }) => (
          <FormItem>
            <FormLabel>Discount</FormLabel>
            <FormControl>
              <Input
                placeholder="input here"
                {...field}
                value={value ?? ""}
                onChange={(e) => {
                  inputHandle("onChange", "number", e);
                  onChange(inputParse("string-to-number", e.target.value));
                }}
                onPaste={(e) => {
                  inputHandle("onPaste", "number", e);
                  onChange(
                    inputParse(
                      "string-to-number",
                      (e.target as HTMLInputElement).value,
                    ),
                  );
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="shopee_link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link Shopee</FormLabel>
            <FormControl>
              <Input type="text" placeholder="input here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tokopedia_link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link Tokopedia</FormLabel>
            <FormControl>
              <Input type="text" placeholder="input here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="tiktok_link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link Tiktok</FormLabel>
            <FormControl>
              <Input type="text" placeholder="input here" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};
