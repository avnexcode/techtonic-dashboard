import { z } from "zod";

export const tiktok_link = z
  .string()
  .url({ message: "URL TikTok tidak valid." })
  .min(1, { message: "URL TikTok tidak boleh kosong." })
  .max(255, { message: "URL TikTok tidak boleh lebih dari 255 karakter." })
  .refine((value) => value.startsWith("https://www.tiktok.com/"), {
    message: "URL TikTok harus diawali dengan https://www.tiktok.com/",
  })
  .optional();

export const shopee_link = z
  .string()
  .url({ message: "URL Shopee tidak valid." })
  .min(1, { message: "URL Shopee tidak boleh kosong." })
  .max(255, { message: "URL Shopee tidak boleh lebih dari 255 karakter." })
  .refine((value) => value.startsWith("https://shopee.co.id/"), {
    message: "URL Shopee harus diawali dengan https://shopee.co.id/",
  });

export const tokopedia_link = z
  .string()
  .url({ message: "URL Tokopedia tidak valid." })
  .min(1, { message: "URL Tokopedia tidak boleh kosong." })
  .max(255, { message: "URL Tokopedia tidak boleh lebih dari 255 karakter." })
  .refine((value) => value.startsWith("https://www.tokopedia.com/"), {
    message: "URL Tokopedia harus diawali dengan https://www.tokopedia.com/",
  });

export const createProductFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Nama produk tidak boleh kosong." })
    .max(150, { message: "Nama produk tidak boleh lebih dari 150 karakter." }),

  price: z
    .string()
    .min(1, { message: "Harga tidak boleh kosong." })
    .max(50, { message: "Harga tidak boleh lebih dari 50 karakter." }),

  image: z
    .string()
    .url({ message: "URL gambar tidak valid." })
    .min(1, { message: "URL gambar tidak boleh kosong." }),

  discount: z
    .number()
    .int({ message: "Diskon harus berupa bilangan bulat." })
    .optional(),

  description: z
    .string()
    .min(1, { message: "Deskripsi tidak boleh kosong." })
    .optional(),

  tokopedia_link,
  shopee_link,
  tiktok_link,

  category_id: z.string().min(1, { message: "Kategori tidak boleh kosong." }),
});

export const updateProductFormSchema = createProductFormSchema.partial();
