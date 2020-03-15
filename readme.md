## Installation Guide

Fist you will need to run an `npm install`

After that, you should create `config.json` file and add it in the config file.

The `config.json` file should have the information regarding the Database connection and any other enviroment settings:

```json
{
  "development": {
    "username": "your_local_db_usr",
    "password": "your_local_db_pwd",
    "database": "your_local_db_name",
    "host": "your_local_db_address",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

Now you are able to generate the Database:

First make sure that your mysql daemon is running `mysql -u your_local_db_usr -p`

Run the migrations that will generate the Database structure using `npx sequelize-cli db:migrate`

Run de Database seeds `npx sequelize-cli db:seed:all`

Finally you can start the project by doing `node app.js`

