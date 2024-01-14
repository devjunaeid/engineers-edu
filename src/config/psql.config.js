const config = {
  // HOST: "127.0.0.1",
  // USER: "blue",
  // PASSWORD: "ademtj",
  // DB: "blue",
  HOST: process.env.PDB_HOST,
  USER: process.env.PDB_USER,
  PASSWORD: process.env.PDB_PASS,
  DB: process.env.PDB_DBNAME,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default config;