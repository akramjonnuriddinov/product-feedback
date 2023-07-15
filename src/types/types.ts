import { Category } from "@/types/constants"

export type NewFeedback = {
  id: string
  title: string
  detail: string
  category: Category
}

type Category = typeof Category