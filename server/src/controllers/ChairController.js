const { Chair } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const chairs = await Chair.findAll()
            res.send(chairs)
        } catch (err) {
            res.status(500).send({
                error: 'error ไรวะ'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const chair = await Chair.create(req.body)
            res.send(chair.toJSON())
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
            await Chair.update(req.body, {
                where: {
                    id: req.params.chairId
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
            const chair = await Chair.findOne({
                where: {
                    id: req.params.chairId
                }
            })
            if (!chair) {
                return res.status(403).send({
                    error: 'The user information was incorrect'
                })
            }
            await chair.destroy()
            res.send(chair)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const chair = await Chair.findByPk(req.params.chairId)
            res.send(chair)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


