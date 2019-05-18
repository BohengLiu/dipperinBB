const path = require('path');
const CracoLessPlugin = require("craco-less");

module.exports = {
	webpack: {
		alias: {
			// '@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@containers': path.resolve(__dirname, 'src/containers'),
			'@images': path.resolve(__dirname, 'src/images'),
			'@i18n': path.resolve(__dirname, 'src/i18n'),
			'@models': path.resolve(__dirname, 'src/models'),
			'@routes': path.resolve(__dirname, 'src/routes'),
			'@stores': path.resolve(__dirname, 'src/stores'),
			'@server': path.resolve(__dirname, 'src/server'),
			'@tests': path.resolve(__dirname, `src/tests`),
			'@utils': path.resolve(__dirname, 'src/utils/')
		}
	},
	jest: {
		configure: {
			moduleNameMapper: {
				'^@components(.*)$': '<rootDir>/src/components$1',
				'^@containers(.*)$': '<rootDir>/src/containers$1',
				'^@images(.*)$': '<rootDir>/src/images$1',
				'^@i18n(.*)$': '<rootDir>/src/i18n$1',
				'^@models(.*)$': '<rootDir>/src/models$1',
				'^@routes(.*)$': '<rootDir>/src/routes$1',
				'^@stores(.*)$': '<rootDir>/src/stores$1',
				'^@server(.*)$': '<rootDir>/src/server$1',
				'^@tests(.*)$': '<rootDir>/src/tests$1',
				'^@utils(.*)$': '<rootDir>/src/utils$1'
			}
		}
	},
	plugins: [{
		plugin: CracoLessPlugin
	}]
}