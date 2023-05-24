module.exports = {
    apps: [
      {
        name: 'Jav4Free',
        port: '8080',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }