const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Get all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Product],
    });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a tag
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a tag
router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).end();
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
