module.exports = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Category Service API",
      description: "Category Service API information.",
      version: "1.0.0",
      contact: {
        name: "Muhammad Hutomo Padmanaba"
      }
    },
    servers: [
      {
        url: "http://localhost:3001",
        description: "WMS Category Service Server"
      }
    ]
  },
  apis: [`${__dirname}/../routes/*.js`]
}