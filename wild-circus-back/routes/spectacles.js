const { Spectacles, Sequelize }  = require('../models');
const express = require('express');
const router  = express.Router();
const { Op } = Sequelize;

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const oneSpectacles = await Spectacles.findOne({where: { id }})
    res.send(oneSpectacles)
});
      
router.get('/', async(req, res) => {
    const { limit, q, _order, term, _sort, _end, _start } = req.query
    const { count, rows } = await Spectacles.findAndCountAll({
            where: {
            ...q && {
                title: {
                    [Op.substring]: q
                }
            },
            ...term && {
                id: {
                    [Op.substring]: term
                }
            }       
        },
        limit: _end - _start,
        offset: Number(_start),
        order: [
            [
                _sort, _order
            ]
        ]
    })
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
});
    
    
router.post('/', async (req, res) => {
    const {title, img, description, prix, dateStart, dateEnd} = req.body
    const NewSpectacles =await Spectacles.create({title, imgage, description, prix, dateStart, dateEnd})
    res.send(NewSpectacles);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {title, img, description, prix, dateStart, dateEnd} = req.body;
    const UpdateSpectacles = await Spectacles.update({title, imgage, description, prix, dateStart, dateEnd}, {where: { id }});
    res.send(UpdateSpectacles);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Spectacles.destroy({ where: { id }});
    res.send(id);
});

module.exports = router;