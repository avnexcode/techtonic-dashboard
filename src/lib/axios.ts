import { env } from "@/configs/env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});
