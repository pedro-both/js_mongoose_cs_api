const Round = require("../model/Round");

class RoundController {
    async store(req, res) {
        const data = await Round.create(req.body);
        return res.json(data);
    }
    async list(req, res) {
        const data = await Round.find({});
        return res.json(data);
    }
    async delete(req, res) {
        const { id } = req.body;
        const end = await Round.findOne({ where: { "id": id } })
        console.log(end)
        if (end) {
            await Round.remove(end);
            return console.log(204);
        } else {
            return console.log(404)
        }
    }
    async update(req, res) {       
        await Round.findOneAndUpdate(req.body);
    }
}
module.exports = new RoundController();