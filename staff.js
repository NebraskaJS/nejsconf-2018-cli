const chalk = require('chalk');
const fuzzy = require('fuzzy');

const organizers = [{
  "name": "Sandi Barr",
  "twitter": "sandikbarr"
}, {
  "name": "Blaine Kasten",
  "twitter": "blainekasten"
}, {
  "name": "Zach Leatherman",
  "twitter": "zachleat"
}, {
  "name": "Nick Nisi",
  "twitter": "nicknisi"
}, {
  "name": "Lindsey Pfeifer",
  "twitter": "l_pfeifer18"
}, {
  "name": "Jerod Santo",
  "twitter": "jerodsanto"
}, {
  "name": "Matt Steele",
  "twitter": "mattdsteele"
}, {
  "name": "John Hobbs",
  "twitter": "jmhobbs"
}];

module.exports = function (program) {
  program.command('staff').action(function(name) {
    console.log(chalk.cyan(".==============================."));
    console.log(chalk.cyan("|             STAFF            |"));
    console.log(chalk.cyan("'=============================='"));
    console.log("");
    console.log("NEJS Conf is organized by these lovely people, and run by a bunch of great volunteers!");
    console.log("");
    for (let organizer of organizers) {
      console.log(chalk.magenta("   Name: ") + organizer.name);
      console.log(chalk.magenta("Twitter: ") + "@" + organizer.twitter);
      console.log("");
    }
  });
};
