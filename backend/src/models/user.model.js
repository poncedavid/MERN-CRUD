import mongoose from 'mongoose'; // Importamos mongoose para conectarnos a la base de datos

const userSchema = new mongoose.Schema({ // Creando el esquema de usuario con mongoose
    username: { // El nombre de usuario
        type: String, //Tipo de dato
        required: true, //Para que sea obligatorio
        trim: true, //Para que no se guarden espacios en blanco
        unique: true //Para que no se repita
    },
    email:{
        type: String, 
        required: true,
        trim: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true //Para que guarde la fecha de creación y actualización del usuario (createdAt, updatedAt)
    
})

export default mongoose.model('User', userSchema); // Exportando el modelo de usuario