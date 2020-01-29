const { Spectacles }  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const onePartners = await Spectacles.findOne({where: { id }})
    res.send(onePartners)
    });
      
router.get('/', async(req, res) => {
    const { count, rows } = await Spectacles.findAndCountAll()
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
    });
    
    
router.post('/', async (req, res) => {
    const {title, img, description, prix, dateStart, dateEnd} = req.body
    const NewSpectacles =await Spectacles.create({title, img, description, prix, dateStart, dateEnd})
    res.send(NewSpectacles);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {title, img, description, prix, dateStart, dateEnd} = req.body;
    const UpdateSpectacles = await Spectacles.update({title, img, description, prix, dateStart, dateEnd}, {where: { id }});
    res.send(UpdateSpectacles);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Spectacles.destroy({ where: { id }});
    res.send(id);
});

module.exports = router;