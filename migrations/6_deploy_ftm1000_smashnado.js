/* global artifacts */
require('dotenv').config({ path: '../.env' })
const FTMSmashnado = artifacts.require('FTMSmashnado')
const Verifier = artifacts.require('Verifier')
const hasherContract = artifacts.require('Hasher')


module.exports = function(deployer, network, accounts) {
  return deployer.then(async () => {
    const { MERKLE_TREE_HEIGHT, FTM_AMOUNT_TH } = process.env
    const verifier = await Verifier.deployed()
    const hasherInstance = await hasherContract.deployed()
    await FTMSmashnado.link(hasherContract, hasherInstance.address)
    const smashnado = await deployer.deploy(FTMSmashnado, verifier.address, FTM_AMOUNT_TH, MERKLE_TREE_HEIGHT, accounts[0])
    console.log('FTM Smashnado\'s address ', smashnado.address)
  })
}
