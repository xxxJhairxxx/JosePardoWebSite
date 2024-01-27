module.exports = {
  apps: [
    {
      name: '3000-josepardo-next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', //running on port 3000
      cwd: './app', //busca el proyecto si esta en subcarpeta
      exec_mode: 'fork',
      watch: false
    }
  ]
}
