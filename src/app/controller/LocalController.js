const Local = require("../model/Local");
class LocalController {
    async store(req, res) {
        const data = await Local.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Local.find({});
        return res.json(data);
    }
    async delete(req, res){
        const {id} = req.body;
        const end = await Local.findOne({where: {"id": id}})
        console.log(end)
        if(end){
            await Local.remove(end);
            return console.log(204);
        }else{
            return console.log(404)
        }
}
}
module.exports = new LocalController();