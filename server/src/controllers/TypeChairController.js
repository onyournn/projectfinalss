const {TypeChair} = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const types = await TypeChair.findAll()
            res.send(types)
        } catch (err) {
            res.status(500).send({
                error: 'The users information was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const type = await TypeChair.create(req.body)
            res.send(type.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await TypeChair.update(req.body, {
                where: {
                    id: req.params.typeId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const type = await TypeChair.findOne({
                where: {
                    id: req.params.typeId
                }
            })
            if (!type) {
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }
            await type.destroy()
            res.send(type)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const type = await TypeChair.findByPk(req.params.typeId)
            res.send(type)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


