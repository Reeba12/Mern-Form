const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const dataModel = require('./controller/addUser');
const app = express();

const url="mongodb+srv://crud:crud@cluster0.4h3wm.mongodb.net/firstCrudApp?retryWrites=true&w=majority"

app.use(cors());
app.use(express.json())
mongoose.connect(url,{ useNewUrlParser : true});


app.post("/",async (req,res)=>{
    const addNewUser= new dataModel({
        clientAgency: req.body.clientAgency,
        email: req.body.email,
        name: req.body.name,
        uniqueIdentifier: req.body.uniqueIdentifier,
        govwinId: req.body.govwinId,
        opportunityDesc: req.body.opportunityDesc,
        anticipatedSubDate: req.body.anticipatedSubDate,
        leadAndSupport: req.body.leadAndSupport,
        personName: req.body.personName,
        Inputdate:req.body.Inputdate
    })
    try{
        await addNewUser.save()
        res.send("inserted")
    }
    catch(error){
        console.log(error)
    }
})

app.get("/read", (req,res)=>{
    // res.send("data")
    dataModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })
});
app.delete("/delete/:id", async (req,res)=>{
    // dataModel.deleteOne({$where :Id})
    const id=req.params.id
    // res.send(id)
    // res.send(dataModel)
    // dataModel.find({$where {_id:"6238149e2f9e97ac64fc4ade"}})
    await dataModel.findByIdAndDelete(id);
    res.send("deleted")
})
app.get('/new/:id', (req,res)=>{
    const id = req.params.id
   dataModel.find({_id: id},(err,result)=>{
        // console.log(result)
        if(err){
            res.send(err)
            return
        }
        res.send(result)
    })
})
app.put('/update/:id',async (req,res)=>{
    const id = req.params.id
    
    dataModel.findByIdAndUpdate({_id:id},async (err,result)=>{
        
        result.clientAgency= req.body.clientAgency,
        result.email= req.body.email,
        result.name= req.body.name,
        result.uniqueIdentifier= req.body.uniqueIdentifier,
        result.govwinId= req.body.govwinId,
        result.opportunityDesc= req.body.opportunityDesc,
        result.anticipatedSubDate= req.body.anticipatedSubDate,
        result.leadAndSupport= req.body.leadAndSupport,
        result.personName= req.body.personName,
        result.Inputdate=req.body.Inputdate
        if(err){
            res.send(err)
            return
        }
        res.send(result)
    })
    
})
app.listen(4001,()=>{
    console.log("Server is Running on 4001")
})