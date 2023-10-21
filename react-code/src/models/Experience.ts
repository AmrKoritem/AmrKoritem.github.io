export class Experience {
    inova: CompanyExperience
    vois: CompanyExperience
    objects: CompanyExperience

    constructor(json: any) {
        if (!("inova" in json && "vois" in json && "objects" in json)) {
            throw new Error("Can't instantiate a Experience object. Invalid json used.")
        }
        this.inova = new CompanyExperience(json.inova)
        this.vois = new CompanyExperience(json.vois)
        this.objects = new CompanyExperience(json.objects)
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
        return this.getMilliSeconds() / nowMilliSeconds * 100
    }

    getMonths = () => {
        const inclusionFactor = 1
        const toDay = this.getToDate().getDate()
        const fromDay = this.getFromDate().getDate()
        const toMonth = this.getToDate().getMonth() - (toDay < 15 ? 1 : 0)
        const fromMonth = this.getFromDate().getMonth() + (fromDay > 15 ? 1 : 0)
        let months = toMonth - fromMonth + inclusionFactor
        if (months < 0) {
            months = 12 + months
        }
        return months
    }

    getYears = () => {
        const timeDiff = this.getToDate().getTime() - this.getFromDate().getTime()
        const diffInDays = timeDiff / (1000 * 3600 * 24)
        return Math.trunc(diffInDays / 365)
    }

    getMonthsYearsStr = () => {
        let months = this.getMonths()
        const years = this.getYears()
        const yearsStr = years == 0 ? '' : `${years}y,`
        const space = years == 0 || months == 0 ? '' : ' '
        const monthsStr = months == 0 ? '' : `${months}m`
        return `${yearsStr}${space}${monthsStr}`
    }
}