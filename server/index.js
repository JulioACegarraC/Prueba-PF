const server = require("./src/app.js");
const PORT = 3001;
//importo instancia de sequelize con conn
//const { conn } = require("./DB_connection.js");

//cambiar el valor de force a false cuando tenga el server listo

server.listen(PORT, async () => {
   console.log('Server raised in port: ' + PORT);
})
