import express from 'express'
import db from './config/db.js'
import { user } from './schema/user.model.js'
import { product } from './schema/product.model.js'
import { order } from './schema/order.model.js'
import { brand } from './schema/brand.model.js'
const app=express()
app.use(express.json())
db()


app.get('/',(req,res)=>{
    res.send('Hello World')

})
app.get('/getproducts',(req,res)=>{

res.send('chilling words')

})

app.get('/geticons',(req,res)=>{
    res.send('available icons')

})

app.get('/hero',(req,res)=>{
    res.json({
        id:1,
        name:"dikshya"
        
    })

})
// app.get('/lol', async(req,res)=>{
// try {
// const data= await user.create({
//     fullName:"dikshya",
//     Age:19,
//     Email:"dikshyaacharyaa1517@gmail.com"


// })
// res.status(200).json({
//     message:"user created successfully",
//     data:data
// })
// } 
// catch (error) {
//     console.log(error)
// }

//  })
 
 
//   app.get('/product',async(req,res)=>{
//      try {
//          const dopo=await product.create({
            
//             Name:"Dikshya Acharya",
            
//             Title:"hiii",
//             category:"beauty",
//             price:9.99,
//             rating: 2.56
 
//          })


//        res.status(200).json({
//      message:"user successfully ",
//      data:dopo
//  })
//  } 
         
//      catch (error) {
//          console.log(error)
         
//      }
//   })
app.get('/product',async(req,res)=>{

try {
    const{Name,Title,category,price,rating}=req.body

    const demo= await product.create({

        Name,
        Title,
        category,
        price,
        rating
    })

    res.status(200).json({
message:"user successfully",
data:demo
    })
    
} catch (error) {
    console.log(error)
    
}


})




app.post('/order',async(req,res)=>{
    
    try {
        const { Name,totalPrice,status}=req.body

        const userdetail= await order.create ({
          
            Name,
            totalPrice,
            status

        })
          res.status(200).json({
       message:"user successfully created ",
           data:userdetail
    })
        
    } 
    catch (error) {
        console.log(error)
         res.status(500).json({
            message: "error",
            error: error.message
        })
       
        
    }


})

    app.get('/orderdetail',async(req,res)=>{
        try {
            const data= await order.find()
            res.status(200).json({
                message:"order sucessfully",
                data:data
            })
            
            } 
        
        catch (error) {
            console.log(error)
            res.status(500).json({
                message:"error occur!!!",
                error: error.message
            })
            
        }

    })


app.post('/brand',async(req,res)=>{
    try {
        const{name,description,logo}=req.body
        const dimple= await brand.create({
            name,
            description,
            logo
        
        })
              res.status(200).json({
       message:"user successfully created ",
           data:dimple
    })
        
    } catch (error) {
        console.log(error)
         res.status(500).json({
            message: "error",
            error: error.message
        })
       
        
    }

})


app.get("/brand", async (req, res) => {
    try {
        const data = await brand.find();

        res.status(200).json({
            message: "Brand list successfully fetched",
            data: data
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error",
            error: error.message
        });
    }
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})



