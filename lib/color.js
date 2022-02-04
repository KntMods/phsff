const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const KentzLog = (text, color) => {
	return !color ? chalk.cyan('[Kentz] ') + chalk.yellow(text) : chalk.cyan('[Kentz] ') + chalk.keyword(color)(text)
}

module.exports = {
  color,
  KentzLog
}