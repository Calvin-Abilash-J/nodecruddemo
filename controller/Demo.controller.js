import userInfo from "../model/demoApiTable.js";

export const demoRequestData =async (req,res)=>{
    // res.send("demorequestdata has send a request");
    const result = await userInfo.find();
    res.json(result);
}

export const demoRequestDetails = async(req,res)=>{
    try{
        const result = await userInfo.findById(req.params.id);

        if(result == null){
            return res.status(404).json({message:"user not found"});
        }
        else{
            res.json(result);
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const demoCreateData =async (req,res) =>{
    // res.send("demoCreateData has send a createRequest");

    console.log(req.body);

    const UserInfo =  new userInfo({
        username: req.body.username,
        password:req.body.password 
    }) 

    try{
        const result = await UserInfo.save();
        return res.status(201).json(result);
    }
    catch(error){
        return res.status(400).json({message:error.message});
    }    
}

export const demoDeleteData = async (req,res) =>{
    const result = await userInfo.deleteMany()
}


export const demoUpdateData = async(req,res) =>{

    try{
        const responce = await userInfo.findOneAndUpdate({_id:req.params.id},{
            username:req.body.username,
            password:req.body.password
        })
        res.status(200).json(responce);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
    
    


    // const user = await userInfo.findById(req.params.id);
    
    // if(req.body.username!=null){
    //     user.username = req.body.username;
    // }
    // if(req.body.password!=null){
    //     user.password = req.body.password;
    // }
    // try
    // {
    //     const result = await user.save();
    //     return res.json(result);
    // }
    // catch(error){
    //     res.status(400).json({message:error.message});
    // }
}
