
import mongoose from 'mongoose';
async function connect(){
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://127.0.0.1/f8_education_dev');
        
    }catch(error){

    }
}
export {connect}