#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

const NEJS_MODULE = `

                                                ommh-
                                               \`NMMMy
                                               \`.+o/\`
                                             \`+/ \`/ -o.
                                            :o.  .s   ++
                                          \`o:    .s    .o-
                                     \`\`dddNmdddddmNddddddNddd.
                                   +NMMMMMMMMMMMMMMMMMMMMMMMMMMMh\`
                                  sMMs::://///////////////////+NMm.
                                \`hMM+                          .mMN:
                               -mMN-                            \`hMM+
                              /NMN:........\`             .........hMMs
                             oMMy----------\`             .---------+MMh\`
                           \`yMMo                                    :NMm.
                          .dMMy//////////////////////////////////////oNMN:
                         :NMN/......................\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`.dMM+
                        +MMh----------------------------::::::::::::::::sMMy
                       sMMs                                              /MMd\`
                     \`hMM+              \`shhhhyyyyyyyyyyyyy:              :NMm-
                    -mMN-               yMMyyyyyyyyyyyyyymMN\`              .dMN:
                   /NMd.      .yh/:/h\` -MMy              :MMo .h::/hy\`      \`hMMo
                  oMMy\`      \`h\`.s-//  dMN.     \`--\`      dMN\` s--s..y        sMMy\`
                \`yMMo        s:o- +h  /MMo    \`hMMMMd.    :MMs \`d/ :o/o        /MMd\`
               .dMN:        oy\` /os- \`mMm\`    sMMMMMMh     hMN. /oo: .h/        -NMm-
              :NMm.        /+\`+/ -s  oMM/     -mMMMMN:     -MMy  h. ++\`o-        .dMN/
             +MMh\`         .o. .oh\` \`NMd        :++:\`       hMM. .ys. -o.         \`yMMo
            sMMs             /+ //  yMM:                    -MMy  o-\`+/             oMMy\`
          \`dMM/               .oy  -MMh   .///////////////.  yMM- \`h+\`               /NMd.
         -mMMdssss-                hMM/----------------------/MMh                :////sMMm-
        /NMMMMMMMh                .NMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.               -NMMMMMMMN/
       oMMMMMMMMh\`                 \`.....................-------\`                 -NMMMMMMMMo
     \`hMMMMMMMMd\`                         :              :                         :NMMMMMMMMy\`
    .mMN+/////+//////////////////-        h    +ssss/    h        -/////////////////osssssssNMd.
   :NMm.                                  h    mMMMMd    h                                  -mMN-
  +MMh\`                                   +     \`\`\`\`     +                                   .dMN/
 yMMs                                                                                         \`yMMo
dMMMNNNNNNNNNNNmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmdddddddddddddddddddddddddddddddddddddhhhhMMMy
+NMMmooooooooooooooooooooooooooossssssssssssssssssssssssssssssssssssssssyyyyyyyyyyyyyyyyyyyyyyyNMMNo
 .yMMm+:::::::::-------------------------------------..................................\`\`\`\`\`.+mMMy.
   .sNMMd+.\`\`\`\`\`\`\`.....................................----------------------------------:sNMMNy.
     \`/hMMNh+.                                                                        .+hNMMd+\`
        \`/yNMMmy+-\`                                                               -+ymMMNh+.
            -+hNMMMmyo/-\`                                                   .:oydMMMNho:
                .:oymMMMMNdys+/-.\`                                \`.-/+oydmMMMMmhs/.
                      .:+sydNMMMMMMNmddhyysssoooooooooosssyyhddmNMMMMMMNmhso/-\`
                              \`-:/+ossyhhddmmmmmNNNNNmmmmddhhyyso+/:-.


                                            .-----------.
                                            | NEJS CONF |
                                            |   2018    |
                                            '-----------'
`;

program.version('0.0.1');

program.command('help').action(function() { program.help(); });

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

program.command('schedule').action(function () {
  console.log(chalk.cyan("================================"));
  console.log(chalk.cyan("|           SCHEDULE           |"));
  console.log(chalk.cyan("================================"));
  console.log("");
  console.log(chalk.yellow("July 26"));
  console.log(chalk.yellow("-------"));
  console.log(" 8:00 PM Informal pre-party, downtown LOCAL");
  console.log("");
  console.log(chalk.yellow("July 27"));
  console.log(chalk.yellow("-------"));
  console.log(" 8:00 AM  REGISTRATION");
  console.log("          Doors Open, Registration starts");
  console.log("");
  console.log(" 9:00 AM  WELCOME");
  console.log("          Introductions / Kick-off");
  console.log("");
  console.log(" 9:15 AM  LAURIE VOSS");
  console.log("          Keynote: npm and the Future of JavaScript");
  console.log("");
  console.log("10:00 AM  CARMEN BOURLON");
  console.log("          At Your Service with Service Workers");
  console.log("");
  console.log("10:30 AM  BREAK");
  console.log("");
  console.log("11:00 AM  KARL GROVES");
  console.log("          What Is This Thing and What Does It Do?");
  console.log("");
  console.log("11:30 AM  MICHAEL CHAN");
  console.log("          Hot Garbage: Clean Code is Dead");
  console.log("");
  console.log("12:00 PM  LUNCH");
  console.log("          Taco/Fajita Bar!");
  console.log("");
  console.log(" 1:30 PM  BEN ILEGBODU");
  console.log("          Let’s Web Dev Like It’s 1999!");
  console.log("");
  console.log(" 2:00 PM  ANDREY SITNIK");
  console.log("          CRDT: Conflict-free Data Types for Collaborative Editing and Offline-First");
  console.log("");
  console.log(" 2:30 PM  BETH HAUBERT");
  console.log("          WTF Are Serverless Apps? ¯\_(ツ)_/¯");
  console.log("");
  console.log(" 3:00 PM  BREAK");
  console.log("");
  console.log(" 3:30 PM  STEVE KINNEY");
  console.log("          Actually Understanding Asynchronous JavaScript");
  console.log("");
  console.log(" 4:00 PM  CLARISSA PETERSON");
  console.log("          Keynote—Code is Not Neutral: The Ethics of Web Development");
  console.log("");
  console.log(" 4:45 PM  CLOSING");
  console.log("          Closing Remarks and Post-Conference Happy Hour");
});

/*
// TODO
program.command('speaker [name]').action(function() {
  console.log('speakers');
})

// TODO
program.command('sponsors [name]').action(function() {
  console.log('sponsors');
})
*/

if (!process.argv.slice(2).length) {
  console.log(chalk.yellow(NEJS_MODULE));
  program.help();
}

program.parse(process.argv);

