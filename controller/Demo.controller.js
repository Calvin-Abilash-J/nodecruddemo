export const demoRequestData = (req,res)=>{
    res.send("demorequestdata has send a request");
}

export const demoCreateData = (req,res) =>{
    // res.send("demoCreateData has send a createRequest");

    console.log(req.body);

    return res.json(req.body);
    
}

export const demoDeleteData = (req,res) =>{
    res.send("demoCreateData has send a deleteRequest");
}
export const demoUpdateData = (req,res) =>{
    res.send("demoCreateData has send a updateRequest");
}
