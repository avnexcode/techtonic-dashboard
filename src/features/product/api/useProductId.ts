import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import type { ApiProps, ApiResponse } from "@/types/api";
import type { Product } from "../types";

const getProductId = async (id?: string) => {
  if (!id) throw new Error("Id is required");
  const response = await axiosInstance.get<ApiResponse<Product>>(
    `/products/${id}`,
  );
  return response.data.data;
};

export const useProductId = ({ id }: ApiProps<string>) => {
  return useQuery({
    queryKey: ["query", "products", id],
    queryFn: () => getProductId(id),
  });
};
