module.exports = {
  type:'postgres',
  url:process.env.DATABASE_URL,
  username: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DATABASE_DB,
  host: process.env.HOST_DB,
  port:process.env.PORT_DB,
  dialect: "postgres",
  define:{
    timestamp:true,
    underscored:true,
    underscoredAll:true
  }
}
