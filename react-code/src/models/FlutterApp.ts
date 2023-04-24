import { BaseApp } from "./BaseApp"

export interface FlutterApp extends BaseApp {
    links: {
      app_store: string,
      play_store: string
    }
  }