#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const art = require('./art.js');

program.version('0.0.2');

require('./speakers.js')(program);
require('./schedule.js')(program);
require('./venue.js')(program);
require('./sponsors.js')(program);
require('./staff.js')(program);

program.command('help').action(function() { program.help(); });

if (!process.argv.slice(2).length) {
  console.log(chalk.yellow(art.LUNAR_MODULE));
  program.help();
}

program.parse(process.argv);

