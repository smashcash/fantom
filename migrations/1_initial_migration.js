/* global artifacts */
const Migrations = artifacts.require('Migrations')

module.exports = function(deployer) {
  if(deployer.network === 'ftm') {
    return
  }
  deployer.deploy(Migrations)
}
