module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'database-name',
    user: process.env.DB_USER || 'database-username',
    password: process.env.DB_PASS || 'database-password',
    options: {
      dialect: process.env.DIALECT || 'mssql',
      host: process.env.HOST || 'localhost'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
