const repository = require('../repositories/produto-repository.js')


exports.get = async (req, res, next) => {
    const data = await repository.get()
    return res.status(200).send(data)
}

exports.post = async (req, res) => {
    await repository.create(req.body)
    return res.status(201).send({ mensagem: "Criado com sucesso!" })
}
exports.put = async (req, res) => {
    const { ...params } = req.params;
    const data = await repository.edit(params, req.body)
    return res.status(201).send({ mensagem: "Alterado com sucesso!" })
}
