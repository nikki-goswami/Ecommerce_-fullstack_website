// utlis response.js


// success response
const sendSuccess = (res,message="success",deta={})=>{
    return res.status(200).json({
        success:true,
        message,
        deta
    })
};

//created response
const sendCreated = (res,message ="Created successfully",data={})=>{
    return res.status(201).json({
        success:true,
        message,
        data

    })
};

// updated response


const sendUpdated = (res,message ="Updated successfully",data={})=>{
    return res.status(201).json({
        success:true,
        message,
        data

    })
};
// delete response

const sendDeleted= (res,message ="Delete successfully",data={})=>{
    return res.status(201).json({
        success:true,
        message,
        data

    })
};


// all feild are required

const sendAllfeildRequired = (res,message ="All feild are required",data={})=>{
    return res.status(201).json({
        success:false,
        message,
        data

    })
};


// not found

const sendNotfound = (res,message ="Resources are not found",data={})=>{
    return res.status(404).json({
        success:false,
        message,
        

    })
};

// Already Exits
const sendallReadyexites = (res,message ="Data already exits",data={})=>{
    return res.status(409).json({
        success:false,
        message,
        

    })
};



// server error

const sendServerError = (res,error)=>{
    console.log(error)  // log internenaly
    return res.status(500).json({
        success:false,
        message:"Internal server error"
        

    })
};



module.exports={sendSuccess,sendCreated,sendDeleted,sendNotfound,sendServerError,sendUpdated,sendAllfeildRequired,sendallReadyexites};