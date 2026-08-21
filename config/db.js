import mongoose from 'mongoose'


const db = async () => {
 try {

   const dbconnect = await mongoose.connect('mongodb://localhost:27017/websitedb')
      console.log('db connect succesffull')
 } 
 
 catch (error) {
    console.log(error)
    
 }
}

export default db