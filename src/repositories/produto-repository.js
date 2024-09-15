const mongoose = require('mongoose')
const Produto = mongoose.model('Produto')
exports.get = async () => {
    const result = await Produto.find({})
    return result
}
exports.create = async (data) => {
    const produto = Produto(data)
    await produto.save()
}
exports.edit = async (id,data) => {
    const produto = await Produto.findOneAndUpdate(id,data)
    return produto
}

