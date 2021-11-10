require('dotenv').config()

module.exports = {
  deployments: {
    netId250: {
      ftm: {
        instanceAddress: {
          '1': '',
          '100': '',
          '1000': '',
          '10000': ''
        },
        symbol: 'FTM',
        decimals: 18
      }
    }
    // ,
    // netId1666700000: {
    //   eth: {
    //     instanceAddress: {
    //       '10': '',
    //       '100': '',
    //       '1000': '',
    //       '10000': '',
    //       '100000': '',
    //     },
    //     symbol: 'ONE',
    //     decimals: 18
    //   }
    // }
  }
}
