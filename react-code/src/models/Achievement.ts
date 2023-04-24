import { Image } from "./Image"

export interface Achievement {
    name: string
    image: Image
    description: string
    is_from_scratch: boolean
    is_maintained: boolean
    is_add_feat: boolean
    is_handed_over: boolean
    tags: string[]
}