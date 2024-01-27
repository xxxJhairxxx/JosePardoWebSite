module.exports = {
  apps: [
    {
      name: "3001-pardo-strapi",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3001, // El puerto donde se ejecute el proyecto
      },
    },
  ],
};
