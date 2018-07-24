const chalk = require('chalk');

module.exports = function (program) {
  program.command('venue').action(function () {
    console.log(chalk.cyan(".==============================."));
    console.log(chalk.cyan("|            VENUE             |"));
    console.log(chalk.cyan("'=============================='"));
    console.log("");
    console.log("The Holland Performing Arts Center");
    console.log("1200 Douglas St, Omaha, NE 68102");
    console.log("");
    console.log(chalk.green("https://omahaperformingarts.org/our-venues/holland"));
  });
};
