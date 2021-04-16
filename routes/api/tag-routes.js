const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
  const tagData = await Tag.findAll({
    include:[{ model: Product, as: 'tags' }]
  }
  );
  res.status(200).json(tagData);
  } catch (err){
    res.status(500).json(err);
    console.log(`Elaborate: ${err}`)
  }
});

router.get('/:id', async (req, res) => {
  try {
      const tagData = await Tag.findByPk(req.params.id,
        {
          include: [{ model: Product, as: 'tags' } ]
        }
      );

      if (!tagData) {
          res.status(404).json({ message: 'No location found with that id!' });
          return;
      }
      res.status(200).json(tagData)
      console.log("test");
  } catch (err) {
      res.status(500).json(err)

      console.log(err);
  }
});

router.post('/', async (req, res) => {
    try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    });
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tags.update(req.params.id);
    if(!tagData){
        console.log(err)
      res.status(400).json(err);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } 
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy(req.params.id,);

    if (!tagData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;
