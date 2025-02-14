import { axiosInstance } from "@/lib/axios";
import type { ApiProps, ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";

export const deleteProduct = async (id?: string) => {
  if (!id) throw new Error("Id is required");
  const response = await axiosInstance.delete<ApiResponse<{ id: string }>>(
    `/products/${id}`,
  );
  return response.data;
};

export const useDeleteProduct = ({
  id,
  onMutate,
  onSuccess,
  onError,
}: ApiProps<string>) => {
  return useMutation({
    mutationKey: ["delete", "product", id],
    mutationFn: () => deleteProduct(id),
    onMutate,
    onSuccess,
    onError,
  });
};
