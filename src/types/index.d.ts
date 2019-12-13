export interface News {
  title: string
  description: string
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
