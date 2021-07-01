type IPerson = {
  id: string
  createdDate: Date
  modifedDate: Date
  name: string
  email: string
  avatar: string
  image: string
  comments: string
  counts: {
    comment: number
    retweet: number
    heart: number
  }
}

export type { IPerson }