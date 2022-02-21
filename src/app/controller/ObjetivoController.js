const Local = require("../model/Local");
const Objetivo =  require("../model/Objetivo");
class ObjetivoController{
    async store(req, res){
        const data = await Objetivo.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Objetivo.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const end = await Objetivo.findOne({where: {"id": id}})
            console.log(end)
            if(end){
                await Objetivo.remove(end);
                return console.log(204)
            }else{
                console.log(404)
            }
    }
    async update(req, res){
        await Objetivo.findOneAndUpdate(req.body);
        return res.send("Sucesso");
    
    }
    
}
module.exports = new ObjetivoController();