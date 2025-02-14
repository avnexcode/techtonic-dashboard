import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateProduct } from "../api";

import { createProductFormSchema } from "../schemas";
import type { CreateProductFormSchema } from "../types";
import { CreateProductFormInner } from "./CreateProductFormInner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export const CreateProductForm = () => {
  const router = useRouter();
  const form = useForm<CreateProductFormSchema>({
    defaultValues: {
      name: "",
      category_id: "",
      price: "",
      image:
        "https://unsplash.com/photos/a-person-swimming-in-the-ocean-with-a-camera-NhWxAIs61MM",
      discount: 0,
      description: "ini product kontol",
      shopee_link: "https://shopee.co.id/",
      tokopedia_link: "https://www.tokopedia.com/",
      tiktok_link: "https://www.tiktok.com/",
    },
    resolver: zodResolver(createProductFormSchema),
  });

  const { mutate: createProduct, isPending: isCreateProductPending } =
    useCreateProduct({
      onSuccess: () => {
        toast.success("Berhasil menambahkan produk");
        router.push("/dashboard/product");
      },
    });

  const onSubmit = (values: CreateProductFormSchema) => createProduct(values);

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>KONTOL LU</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <CreateProductFormInner
            formId="create-product-form"
            onSubmit={onSubmit}
          />
        </Form>
      </CardContent>
      <CardFooter className="place-content-end">
        <Button
          form={"create-product-form"}
          disabled={isCreateProductPending}
          className="min-w-[150px]"
        >
          {!isCreateProductPending ? (
            "Tambahkan"
          ) : (
            <>
              <Loader2 className="animate-spin" />
              Menambahkan...
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
