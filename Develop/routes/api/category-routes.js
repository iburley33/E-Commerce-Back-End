const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
    }
  }).then(data =>  {
    return res.json(data);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne(
    {
      where: { 
        id: req.params.id 
      },
      include: {
        model: Product,
      }
    }
  ).then((bookData) => {
    res.json(bookData);
  });
});

router.post('/', (req, res) => {
  // create a new category

});

router.put('/:id', (req, res) => {
  Category.update(
    {
      id: req.body.id,
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
      include: {
        model: Product,
      }
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
