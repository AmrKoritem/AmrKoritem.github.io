import { Achievement } from "./Achievement"

export class Company {
    name: string
    achievement: Achievement

    constructor(name: string, achievement: Achievement) {
        this.name = name
        this.achievement = achievement
    }
}