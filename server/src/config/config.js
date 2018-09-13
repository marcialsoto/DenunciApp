module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'dbtabtracker',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASS || 'Hacker147',
    options: {
      dialect: process.env.DIALECT || 'mssql',
      host: process.env.HOST || 'localhost'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
