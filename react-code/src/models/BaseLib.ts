import { Achievement } from "./Achievement"

export interface BaseLib extends Achievement {
    latest_version: string
    link: string
    support: string[]
    compatiblity: string[]
    integration: string[]
}