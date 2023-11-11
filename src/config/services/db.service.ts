export function generateDatabaseUrl (dbConfig) {
  const dbDriver = dbConfig.driver;
  const dbUser = dbConfig.user;
  const dbPassword = dbConfig.password;
  const dbHost = dbConfig.host;
  const dbPort = dbConfig.port;
  const dbName = dbConfig.name;
  const dbSchema = dbConfig.name.schema || 'public';
  return `${dbDriver}://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?schema=${dbSchema}`;
}

export default {};