const { Beverage } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const beverages = await Beverage.findAll()
            res.send(beverages)
        } catch (err) {
            res.status(500).send({
                error: 'error'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const beverage = await Beverage.create(req.body)
            res.send(beverage.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Beverage incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await Beverage.update(req.body, {
                where: {
                    id: req.params.beverageId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Beverage incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const beverage = await Beverage.findOne({
                where: {
                    id: req.params.beverageId
                }
            })
            if (!beverage) {
                return res.status(403).send({
                    error: 'The Beverage information was incorrect'
                })
            }
            await beverage.destroy()
            res.send(beverage)
        } catch (err) {
            res.status(500).send({
                error: 'The Beverage information was incorrect'
            })
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const beverage = await Beverage.findByPk(req.params.beverageId)
            res.send(beverage)
        } catch (err) {
            res.status(500).send({
                error: 'The Beverage information was incorrect'
            })
        }
    }
}


