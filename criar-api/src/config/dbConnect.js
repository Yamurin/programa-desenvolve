// Script para conectar a API ao banco de dados em nuvem, utilizaando a bilbioteca Mongoose

import mongoose from "mongoose"

async function conectarNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    
    return mongoose.connection;
};

export default conectarNaDatabase; 



