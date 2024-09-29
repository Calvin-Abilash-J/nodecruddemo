import userInfo from "../model/demoApiTable.js";

export const demoRequestData = (req,res)=>{
    res.send("demorequestdata has send a request");
}

export const demoCreateData =async (req,res) =>{
    // res.send("demoCreateData has send a createRequest");

    console.log(req.body);

    const UserInfo =  new userInfo({
        useraname: req.body.username,
        password:req.body.password 
    }) 

    try{
        const result = await UserInfo.save();
        return res.status(201).json(result);
    }
    catch(error){
        return res.status(400).json({message:error.message});

    }

    return res.json(req.body);
    
}

export const demoDeleteData = (req,res) =>{
    res.send("demoCreateData has send a deleteRequest");
}
export const demoUpdateData = (req,res) =>{
    res.send("demoCreateData has send a updateRequest");
}
