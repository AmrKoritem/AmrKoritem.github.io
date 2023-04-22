import { Image } from "./Image"

export interface FlutterApp {
    name: string
    image: Image
    description: string
    is_from_scratch: boolean
    is_maintained: boolean
    is_add_feat: boolean
    is_redesign: boolean
    is_handed_over: boolean
    links: {
      app_store: string,
      play_store: string
  }
    tags: string[]
  }