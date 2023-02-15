
import {data }from './constants/data.js'
import news from './model/news-schema.js'
const DefaultData = async() =>{
    try{
        await news.insertMany(data);
        console.log('data impoted sucessfully')

    }catch(error){
        console.log(`errror`,error.message)
    }
}

export default DefaultData;