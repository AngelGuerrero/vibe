import Base from './Base'

export default class Project extends Base {
  constructor (pName, pDescription, pProgress, pPcolor, pPriority, pDeadLine) {
    super()

    this.name = pName
    this.description = pDescription
    this.progress = pProgress
    this.color = pPcolor
    this.priority = pPriority
  }
}
