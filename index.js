const program = require('commander');
const _new = require('./cmds/new');

module.exports = () => {
    program
        .version('1.0.0', '-v, --version');

    program
        .command('new <name>')
        .alias('n')
        .description('Create new project')
        .option('-d, --default', 'Pass default values')
        .action((name, args) => { _new.newProject(name, args)});

    program.parse(process.argv);
}
