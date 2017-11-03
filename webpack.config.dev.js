import path from 'path';

export default	{
    devtols: 'eval-source-map',
	entry: path.join(__dirname, '/client/index.js'),
	output: {
		path: '/'
	},

	module: {
		loaders: [
           {
             test: /\.js$/,
             include: path.join(__dirname, 'client'),
             loaders: [ 'babel' ]
           }
        ]
	},
	resolve: {
		extentions: ['', '.js']
	}
}