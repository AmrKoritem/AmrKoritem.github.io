import { Migration } from "./Migration"
import { Image } from "./Image"

export interface IosApp {
    name: string
    image: Image
    description: string
    is_from_scratch: boolean
    is_maintained: boolean
    is_add_feat: boolean
    is_redesign: boolean
    is_handed_over: boolean
    isSwiftUI: boolean
    migration?: Migration
    link: string
    tags: string[]
  }