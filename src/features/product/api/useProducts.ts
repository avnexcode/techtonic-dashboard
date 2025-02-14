import { axiosInstance } from "@/lib/axios";
import type {
  ApiProps,
  ApiResponse,
  QueryParams,
  QueryResponse,
} from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import type { ProductWithRelations } from "../types";

export const getProducts = async (params?: QueryParams) => {
  const filteredParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([_, value]) => value !== null && value !== undefined && value !== "",
        ),
      )
    : {};

  const response = await axiosInstance.get<
    ApiResponse<QueryResponse<ProductWithRelations>>
  >("/products", {
    params: filteredParams,
  });
  return response.data.data;
};

export const useProducts = ({
  params,
  enabled = true,
  staleTime = 30000,
}: ApiProps) => {
  return useQuery({
    queryKey: ["query", "products", params],
    queryFn: () => getProducts(params),
    enabled,
    staleTime,
  });
};
