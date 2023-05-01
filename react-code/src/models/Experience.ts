export class Experience {
    inova: CompanyExperience
    vois: CompanyExperience

    constructor(json: any) {
        if (!("inova" in json && "vois" in json)) {
            throw new Error("Can't instantiate a Experience object. Invalid json used.")
        }
        this.inova = new CompanyExperience(json.inova)
        this.vois = new CompanyExperience(json.vois)
    }
}

export class CompanyExperience {
    from: string
    to: string
    color: string

    constructor(json: any) {
        if (!("from" in json && "to" in json && "color" in json)) {
            throw new Error("Can't instantiate a Duration object. Invalid json used.")
        }
        this.from = json.from
        this.to = json.to
        this.color = json.color
    }

    getFromDate = () => {
        const fromArr = this.from.split("/")
        return new Date(+fromArr[2], +fromArr[1] - 1, +fromArr[0])
    }

    getToDate = () => {
        if (this.to === "present") {
            return new Date()
        }
        const toArr = this.to.split("/")
        return new Date(+toArr[2], +toArr[1] - 1, +toArr[0])
    }

    getMilliSeconds = () => {
        return this.getToDate().getTime() - this.getFromDate().getTime()
    }

    getPercentageComparedToNow = () => {
        const workStartDate = new Date(2019, 7, 1)
        const nowMilliSeconds = (new Date()).getTime() - workStartDate.getTime()
        return `${this.getMilliSeconds() / nowMilliSeconds * 100}%`
    }

    getMonthsYearsStr = () => {
        let months = this.getToDate().getMonth() - this.getFromDate().getMonth()
        let years = this.getToDate().getFullYear() - this.getFromDate().getFullYear()
        if (months < 0) {
            years -= 1
            months = 12 + months
        }
        return `${years}y, ${months}m`
    }
}