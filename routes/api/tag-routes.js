const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// router.get('/', (req, res) => {
//   try {
//     const tagData = await Tag.findAll({
//       include: [{ model: Product }],
//     });
//     res.status(200).json(libraryCardData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', (req, res) => {
//   try {
//     const libraryCardData = await LibraryCard.findByPk(req.params.id, {
//       include: [{ model: Reader }],
//     });

//     if (!libraryCardData) {
//       res.status(404).json({ message: 'No library card found with that id!' });
//       return;
//     }

//     res.status(200).json(libraryCardData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;


outer.get('/', async (req, res) => {
  try {
    const libraryCardData = await LibraryCard.findAll({
      include: [{ model: Reader }],
    });
    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});