import { axiosInstance } from "@/lib/axios";
import type { Product, UpdateProductFormSchema } from "../types";
import type { ApiProps, ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

export const updateProduct = async ({
  id,
  values,
}: {
  id?: string;
  values: UpdateProductFormSchema;
}) => {
  if (!id) throw new Error("Id is required");
  const response = await axiosInstance.put<ApiResponse<Product>>(
    `/products/${id}`,
    values,
  );
  return response.data;
};

export const useUpdateProduct = ({
  onMutate,
  onSuccess,
  onError,
}: ApiProps) => {
  return useMutation({
    mutationKey: ["update", "products"],
    mutationFn: updateProduct,
    onMutate,
    onSuccess,
    onError,
  });
};
