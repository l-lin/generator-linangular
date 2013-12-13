'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var LinangularGenerator = module.exports = function LinangularGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);
	
	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});
	
	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(LinangularGenerator, yeoman.generators.Base);

LinangularGenerator.prototype.askFor = function askFor() {
	var cb = this.async();
	
	// have Yeoman greet the user.
	console.log(this.yeoman);
	
	var prompts = [{
		type: 'confirm',
		name: 'someOption',
		message: 'Would you like to enable this option?',
		default: true
	}];
	
	this.prompt(prompts, function (props) {
		this.someOption = props.someOption;
		
		cb();
	}.bind(this));
};

LinangularGenerator.prototype.app = function app() {
	this.copy('_package.json', 'package.json');
	this.copy('_bower.json', 'bower.json');
};

LinangularGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
	this.copy('bowerrc', '.bowerrc');
	this.copy('Gruntfile.js', 'Gruntfile.js');
	this.directory('server', 'server');
	this.directory('src', 'src');
	this.directory('test', 'test');
};
