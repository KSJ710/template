const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  const pRoot = require("app-root-path");
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        host: 'http://localhost:3000/'
      }
    }
  }

  return {
    env: {
    }
  }
}