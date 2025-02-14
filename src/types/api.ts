import { type ZodError } from "zod";

export type ApiResponse<T = undefined> = {
  status: boolean;
  statusCode: number;
  message: string;
  data?: T;
  errors?: string;
  details?: ZodError;
};

export type MetaResponse = {
  total: number;
  limit: number;
  page: number;
  last_page: number;
  next_page_url: string | null;
  prev_page_url: string | null;
};

export type QueryResponse<T> = {
  data: T[];
  meta: MetaResponse;
};

export type QueryParams = {
  search?: string;
  page?: number;
  limit?: number;
  sort?: SortParams;
  order?: OrderParams;
};

export type ApiProps<T = undefined> = {
  id?: T;
  params?: QueryParams;
  enabled?: boolean;
  staleTime?: number;
  onSuccess?: () => void;
  onError?: () => void;
  onMutate?: () => void;
};

export type SortParams = "name" | "created_at" | "price";
export type OrderParams = "asc" | "desc";
