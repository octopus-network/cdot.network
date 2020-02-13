import React from 'react'

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
    hover: string
  }
}

export interface Partner {
  name: string
  to: string
  imgUrl: {
    type: 'image'
    default: string
    large: string
  } | {
    type: 'svg'
    svg: string
  }
  width: number
  height: number
}

export interface Participant {
  title: string
  description: string
  icon: () => React.ReactElement
}
