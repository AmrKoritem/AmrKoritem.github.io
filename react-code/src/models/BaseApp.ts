import { Migration } from "./Migration"
import { Achievement } from "./Achievement"

export interface BaseApp extends Achievement {
    is_redesign: boolean
    migration?: Migration
}