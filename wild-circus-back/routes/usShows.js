const { UsShows }  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const oneUsShows = await UsShows.findOne({where: { id }})
    res.send(oneUsShows)
});


router.get('/', async(req, res) => {
    const { limit, q, _order, term, _sort, _end, _start } = req.query
    const { count, rows } = await UsShows.findAndCountAll()
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
  });



// router.get('/ddd', async(req, res) => {
//     const { limit, q, _order, term, _sort, _end, _start } = req.query
//     const { count, rows } = await UsShows.findAndCountAll({
//             where: {
//             ...q && {
//                 title: {
//                     [Op.substring]: q
//                 }
//             },
//             ...term && {
//                 id: {
//                     [Op.substring]: term
//                 }
//             }       
//         },
//         limit: _end - _start,
//         offset: Number(_start),
//         order: [
//             [
//                 _sort, _order
//             ]
//         ]
//     })
//     res.header('Access-Control-Expose-Headers', 'X-Total-Count');
//     res.header('X-Total-Count', count);
//     res.send(rows) 
// });
    
    
router.post('/', async (req, res) => {
    const {title, image, description, prix, dateStart, dateEnd} = req.body
    const NewUsShows =await UsShows.create({title, image, description, prix, dateStart, dateEnd})
    res.send(NewUsShows);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {title, image, description, prix, dateStart, dateEnd} = req.body;
    const UpdateUsShows = await UsShows.update({title, image, description, prix, dateStart, dateEnd}, {where: { id }});
    res.send(UpdateUsShows);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await UsShows.destroy({ where: { id }});
    res.send(id);
});

module.exports = router;