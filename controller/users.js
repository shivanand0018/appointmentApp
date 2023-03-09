const user=require('../models/user');
const path=require('path')



exports.getUsers=async (req, res, next) => {
    const data=await user.findAll();
    res.json({userData: data})
}

exports.getView=async (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}

exports.deleteUser=async(req, res, next) => {
    try{
        console.log(req.params);
        const email=req.params.id
        const resp= await user.destroy({where: {email : email}})
        res.status(204).json({resp});
        console.log("user deleted");
    }
    catch(err){
        console.log(err);
    }
}
