const jwt=require('jsonwebtoken')

const protect=async(req,res,next)=>{

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.secretkey)
            next();
        }
        catch(error)
        {
            res.status(401).send("NO TOKEN")
        }
    }
    if(!token)
    {
        res.status(401).send("NO TOKEN")
    }
}

module.exports=protect