var nib = require('nib');

var config = {
	paths: {
		base: './',
		sass: './static/sass/',
		stylus: './static/stylus/',
		styles: './static/css/',
        scripts: './static/js/'
	},
	server: {
		dev: {
            server: {
            	// Array with all the static folders to serve
                baseDir: [
                    './'
                ],
                // List with the url and folders to serve, like node_modules or bower folder
                // i.e: route /node_modules url to node_modules folder
                routes: {
                    '/node_modules': 'node_modules'
                }
            },
            port: 3002,
            logLevel: 'info', // Three options, debug, info or silent
            logFileChanges: true, // Log if a file change
        }
	},
	sass: {
		// Array with all the folders with sass dependencies, like node_modules or bower
        includePaths: []
    },
    stylus: {
		use: nib,
		compress: true
    },
    unusedCss: {
        globals: [],
        ignore: []
    }
};

module.exports = config;