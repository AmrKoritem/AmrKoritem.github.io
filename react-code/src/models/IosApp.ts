import { BaseApp } from "./BaseApp"

export interface IosApp extends BaseApp {
    isSwiftUI: boolean
    link: string
  }