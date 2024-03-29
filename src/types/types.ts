import { Category } from "@/types/constants"

export interface NewFeedback {
  id: string
  title: string
  detail: string
  category?: Category
  comments?: Array<String>
  nestedComments?: Array<String>
}