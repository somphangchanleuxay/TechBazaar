const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    // Find all products and include associated Category and Tag data
    const products = await Product.findAll({ include: [Category, Tag] });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    // Find a single product by its `id` and include associated Category and Tag data
    const product = await Product.findByPk(req.params.id, { include: [Category, Tag] });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

// create new product
router.post('/', async (req, res) => {
  try {
    // Create a new product
    const product = await Product.create(req.body);

    // If there are product tags, create pairings to bulk create in the ProductTag model
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(201).json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    // Update product data
    const [rowsAffected, [updatedProduct]] = await Product.update(req.body, {
      where: { id: req.params.id },
      returning: true, // Include the updated product in the response
    });

    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // If there are product tags to update
    if (req.body.tagIds && req.body.tagIds.length) {
      // Find existing product tags
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });

      // Get the array of existing tag IDs
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Get the array of new tag IDs
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => ({ product_id: req.params.id, tag_id }));

      // Get the array of product tag IDs to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Bulk create new product tags and delete removed product tags
      await Promise.all([
        ProductTag.bulkCreate(newProductTags),
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ]);
    }

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    // Delete one product by its `id` value
    const rowsAffected = await Product.destroy({ where: { id: req.params.id } });
    if (rowsAffected === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;