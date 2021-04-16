const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try{
  const categoryData = await Category.findAll({
    include:[{ model:Product }]
  }
  );
  res.status(200).json(categoryData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
      console.log(`HERE IS THE ID: ${req.params.id}`)
      const categoryData = await Category.findByPk(req.params.id,
        {
          include: [{ model: Product }]
        }
      );

      if (!categoryData) {
          res.status(404).json({ message: 'No location found with that id!' });
          return;
      }
      res.status(200).json(categoryData)
      console.log("test");
  } catch (err) {
      res.status(500).json(err)

      console.log(err);
  }
});

router.post('/', async (req, res) => {
  try {
  const categoryData = await Category.create({
    category_name: req.body.category_name
  });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try { 
    const bookData = await Category.update(req.params.id);
    if(!bookData){
      res.status(400).json(err);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } 
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy(req.params.id,);

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }});

module.exports = router;
