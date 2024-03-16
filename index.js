import express from 'express'
import { mongoConection } from './DataBase/dbConnection.js'
const app = express()
import path from 'path'
import { UserModel } from './DataBase/Modules/Users.js'
const port = 3000
app.use(express.static("Public"))
app.use(express.json())
app.use(express.urlencoded({extended :true}))

app.get("/",async(req,res)=>{

    let users=  await UserModel.find()

    res.render('index.ejs' , {users})
})


app.get("/update/:id",async(req,res)=>{

   let user= await UserModel.findById(req.params.id)

    res.render("update.ejs", {user})
})



app.post("/addUser",async(req,res)=>{
    await UserModel.insertMany(req.body)
    res.redirect("/")
})


app.get("/delete/:id",async(req,res)=>{
    await UserModel.findByIdAndDelete(req.params.id)
    res.redirect("/")
})



app.post("/handelUpdate/:id",async(req,res)=>{
    await UserModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/")
})

mongoConection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))