const Resultado = require("../model/Resultado");


class ResultadoController{
    async store(req, res){
        const data = await Resultado.create(req.body);
        return res.json(data);
    }
    async list(req, res){
        const data = await Resultado.find({});
        return res.json(data);
    }
    async delete(req, res){
            const {id} = req.body;
            const end = await Resultado.findOne({where: {"id": id}})
            console.log(end)
            if(end){
                await Resultado.remove(end);
                return console.log(204);
            }else{
                return console.log(404)
            }
    }
    async update(req, res){
        await Resultado.findOneAndUpdate(req.body);
    }
}
module.exports = new ResultadoController();