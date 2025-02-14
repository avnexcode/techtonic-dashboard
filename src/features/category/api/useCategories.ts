import { axiosInstance } from "@/lib/axios";
import type {
  ApiProps,
  ApiResponse,
  QueryParams,
  QueryResponse,
} from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import type { Category } from "../types";

export const getCategories = async (params?: QueryParams) => {
  const filteredParams = params
    ? Object.fromEntries(
        Object.entries(params).filter(
          ([_, value]) => value !== null && value !== undefined && value !== "",
        ),
      )
    : {};
  const response = await axiosInstance.get<
    ApiResponse<QueryResponse<Category>>
  >("/categories", {
    params: filteredParams,
  });
  return response.data.data;
};

export const useCategories = ({
  params,
  enabled = true,
  staleTime = 30000,
}: ApiProps) => {
  return useQuery({
    queryKey: ["query", "categories", params],
    queryFn: () => getCategories(params),
    enabled,
    staleTime,
  });
};
