const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => { // Make the route handler async
  try {
    // Find all categories and include associated products
    const categories = await Category.findAll({ include: Product });
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find one category by its `id` value and include associated products
    const category = await Category.findByPk(req.params.id, { include: Product });
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve category' });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new category
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Update a category by its `id` value
    const [rowsAffected] = await Category.update(req.body, { where: { id: req.params.id } });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update category' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete a category by its `id` value
    const rowsAffected = await Category.destroy({ where: { id: req.params.id } });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete category' });
  }
});

module.exports = router;
