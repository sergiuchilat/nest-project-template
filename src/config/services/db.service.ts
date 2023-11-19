export function generateDatabaseUrl (dbConfig: any) {
  const dbDriver = dbConfig.driver;
  const dbUser = dbConfig.user;
  const dbPassword = dbConfig.password;
  const dbHost = dbConfig.host;
  const dbPort = dbConfig.port;
  const dbName = dbConfig.name;
  const urlParts = [dbDriver, '://'];
  if(dbUser.length){
    urlParts.push(dbUser);
    if(dbPassword.length){
      urlParts.push(`:${dbPassword}`);
    }
    urlParts.push('@');
  }
  urlParts.push(dbHost);
  if(dbPort.length){
    urlParts.push(`:${dbPort}`);
  }
  urlParts.push('/');
  urlParts.push(dbName);
  if(dbConfig.name.schema){
    urlParts.push(`?schema=${dbConfig.name.schema}`);
  }
  console.log('*****');
  console.log(urlParts.join(''));
  console.log('*****');
  return urlParts.join('');
}

export default {};