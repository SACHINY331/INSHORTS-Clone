import mongoose from "mongoose";

const Connection =async () =>{

    const URL =`mongodb+srv://sachin:TqQdhHEGB8o2F5pd@cluster0.3brifgm.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('database connected secessfully')

    }catch(error){
        console.log(`error while connection with the database`,error);
    }
} 

export default Connection;