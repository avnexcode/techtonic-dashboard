import type { ApiProps, ApiResponse } from "@/types/api";
import type { CreateProductFormSchema, Product } from "../types";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";

export const createProduct = async (values: CreateProductFormSchema) => {
  const response = await axiosInstance.post<ApiResponse<Product>>(
    "/products",
    values,
  );
  return response.data;
};

export const useCreateProduct = ({
  onMutate,
  onSuccess,
  onError,
}: ApiProps) => {
  return useMutation({
    mutationKey: ["mutation", "product"],
    mutationFn: createProduct,
    onMutate,
    onSuccess,
    onError,
  });
};
