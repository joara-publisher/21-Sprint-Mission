import z from "zod";

export interface ItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  ownerNickname: string;
  favoriteCount: number;
  updatedAt: string;
}

export const ItemFormSchema = z.object({
  name: z.string().nonempty("상품명을 입력해주세요."),
  description: z.string().nonempty("상품 소개를 입력해주세요."),
  price: z.number().positive("0보다 큰 숫자를 입력해주세요."),
  tags: z
    .array(z.string())
    .min(1, "태그를 1개 이상 입력해주세요.")
    .refine((items) => new Set(items).size === items.length, {
      message: "중복된 태그가 있습니다.",
    }),
  images: z
    .array(z.union([z.string(), z.instanceof(File)]))
    .superRefine((val, ctx) => {
      val.forEach((item) => {
        if (item instanceof File) {
          // 크기 제한
          if (item.size > 5 * 1024 * 1024) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "최대 파일 크기는 5MB입니다.",
            });
          }
          // 형식 제한
          const ACCEPTED_TYPES = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
          ];
          if (!ACCEPTED_TYPES.includes(item.type)) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "JPG, JPEG, PNG, WEBP 형식만 지원합니다.",
            });
          }
        }
      });
    }),
});
export type ItemValues = z.infer<typeof ItemFormSchema>;
