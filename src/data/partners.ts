import { Partner } from '~type'

export const polkadot: Partner = {
  name: 'polkaworld',
  to: 'https://www.polkaworld.org',
  imgUrl: {
    type: 'svg',
    svg: require('~asset/images/partner/polka_world.svg')
  },
  width: 192,
  height: 27
}

export const rustcc: Partner = {
  name: 'rust.cc',
  to: 'https://rust.cc',
  imgUrl: {
    type: 'image',
    default: require('~asset/images/partner/rust.cc.png'),
    large: require('~asset/images/partner/rust.cc@2x.png')
  },
  width: 154,
  height: 40
}

export const polkabase: Partner = {
  name: 'polkbase.',
  to: 'https://www.polkabase.com',
  imgUrl: {
    type: 'svg',
    svg: require('~asset/images/partner/polkabase.svg')
  },
  width: 184,
  height: 35
}

export const oneBlockPlus: Partner = {
  name: 'one block+',
  to: '/contact',
  imgUrl: {
    type: 'svg',
    svg: require('~asset/images/partner/one_block+.svg')
  },
  width: 130,
  height: 49
}
