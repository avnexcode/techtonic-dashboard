import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useProductId, useUpdateProduct } from "../api";
import { updateProductFormSchema } from "../schemas";
import type { UpdateProductFormSchema } from "../types";
import { EditProductFormInner } from "./EditProductFormInner";
import { useEffect } from "react";
import { toast } from "sonner";

type EditProductFormProps = {
  productId: string;
};

export const EditProductForm = ({ productId }: EditProductFormProps) => {
  const router = useRouter();
  const form = useForm<UpdateProductFormSchema>({
    defaultValues: {
      name: "",
      category_id: "",
      price: "",
      image: "",
      discount: 0,
      description: "",
      shopee_link: "",
      tokopedia_link: "",
      tiktok_link: "",
    },
    resolver: zodResolver(updateProductFormSchema),
  });

  const { data: product } = useProductId({ id: productId });

  const { mutate: updateProduct, isPending: isUpdateProductPending } =
    useUpdateProduct({
      onSuccess: () => {
        toast.success("Berhasil memperbarui produk");
        void router.push("/dashboard/product");
      },
    });

  const onSubmit = (values: UpdateProductFormSchema) =>
    updateProduct({ id: productId, values });

  useEffect(() => {
    if (product) {
      form.reset(product);
    }
  }, [form, product]);

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>KONTOL LU</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <EditProductFormInner
            formId="update-product-form"
            onSubmit={onSubmit}
          />
        </Form>
      </CardContent>
      <CardFooter className="place-content-end">
        <Button
          form={"update-product-form"}
          disabled={isUpdateProductPending || !form.formState.isDirty}
          className="min-w-[150px]"
        >
          {!isUpdateProductPending ? (
            "Perbarui"
          ) : (
            <>
              <Loader2 className="animate-spin" />
              Memperbarui...
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
