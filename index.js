'use strict'

const parseArgv = require('@dkh-dev/parse-argv')


const argv = parseArgv(process.argv.slice(2))

module.exports = argv
