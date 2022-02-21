const Partida =  require("../model/Partida")
class PartidaController{
    async store(req, res){
        const data = await Partida.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Partida.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const end = await Partida.findOne({where: {"id": id}})
            console.log(end)
            if(end){
                await Partida.remove(end);
                return console.log(204)
            }else{
                console.log(404)
            }
    }
    async find(req, res){
        const {id, nickname} = req.body;
        const end = await Objetivo.findOne({where: {id}})
        if(end){
            return res.json(end)
        }else{
            return console.log(404)
        }
    }
}
module.exports = new PartidaController();