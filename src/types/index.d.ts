export interface Article {
  titleImgUrl: string
  title: string
  description: string
  author: string
  date: string
  to: string
}

export interface Introduction {
  title: string
  description: string
  imgUrl: {
    default: string
    large: string
  }
}

export interface Partner {
  name: string
  imgUrl: {
    default: string
    large: string
  },
  width: number
  height: number
}
