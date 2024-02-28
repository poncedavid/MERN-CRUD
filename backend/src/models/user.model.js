import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String, //Tipo de dato
        required: true, //Para que sea obligatorio
        trim: true, //Para que no se guarden espacios en blanco
        unique: true //Para que no se repita
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true //Para que no se repita
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true //Para que guarde la fecha de creación y actualización
    
})

export default mongoose.model('User', userSchema);