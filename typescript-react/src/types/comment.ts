import z from "zod";

export interface CommentType {
  writer: {
    image: string;
    nickname: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export const ItemCommentSchema = z.object({
  productId: z.number(),
  content: z.string().min(1),
});
export type ItemCommentValues = z.infer<typeof ItemCommentSchema>;

export const CommentUpdateSchema = z.object({
  content: z.string().min(1),
});
export type CommentUpdateValues = z.infer<typeof CommentUpdateSchema>;
