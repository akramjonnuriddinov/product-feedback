import { Category } from "@/types/constants"

export type NewFeedback = {
  id: string
  title: string
  detail: string
  category: Category
}

export type Category = typeof Category