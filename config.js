const config = {
  dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_backendNode:OdTGDijnJnFUMSkh@cluster0.63u4m.mongodb.net/db_backendNode?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;