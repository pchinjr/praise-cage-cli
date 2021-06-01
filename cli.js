#!/usr/bin/env node
const tiny = require('tiny-json-http')

var argv = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 <cmd> [options]') // usage string of application.
  .option('h', {
    alias: 'help',
    description: 'display help message'
  })
  .help('help')
  .version('1.0.1', 'version', 'display version information') // the version string.
  .alias('version', 'v')
  .argv;

console.log('praise cage')
getImage()

async function getImage() {
  const result = await tiny.get({url:'https://light-28e-staging.begin.app'})
  console.log(result.body.image)
}
