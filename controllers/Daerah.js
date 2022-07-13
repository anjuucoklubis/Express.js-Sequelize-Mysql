import Daerah from "../models/Daerah.js";

//Get All Daerah
export const getDaerahs = async (req, res) => {
    try{
        const daerah = await Daerah.findAll();  
        res.send(daerah);
    }catch(err){
        console.log(err);
    }
}

//Create Daerah
export const createDaerah = async (req, res) => {
    try{
        await Daerah.create(req.body);
        res.json({
            "message" : "Daerah Berhasil ditambahkan!"
        });
    }catch(err){
        console.log(err);
    }
}

//Get 1 daerah by ID
export const getDaerahId = async (req, res) => {
    try{
        const daerah = await Daerah.findAll({
            where:{
                id: req.params.id,
            }
        });  
        res.send(daerah);
    }catch(err){
        console.log(err);
    }
}

//Update Daerah
export const updateDaerah = async (req, res) => {
    try{
        await Daerah.update(req.body,{
            where:{
                id:req.params.id,
            }
        });
        res.json({
            "message" : "Daerah Berhasil diupdate!"
        });
    }catch(err){
        console.log(err);
    }
}

//Delete Daerah
export const deleteDaerah = async (req, res) => {
    try{
        await Daerah.destroy({
            where:{
                id:req.params.id,
            }
        });
        res.json({
            "message" : "Daerah Berhasil dihapus!"
        });   
    }catch(err){
        console.log(err);
    }
}
