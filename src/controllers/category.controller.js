const db = require('../models/index')
const Category = db.categories;

exports.find = (req, res, next) => {
  const name = req.query.name ? req.query.name : '';
  Category.find({ name: { $regex: name, $options: "i" } })
    .then((result) => {
      res.send({
        success: true,
        data: result
      });
    })
    .catch((err) => {
      next(err);
    })
}

exports.create = (req, res, next) => {
  const category = new Category({
    name: req.body.name,
    description: req.body.description
  })

  category.save()
    .then((result) => {
      res.send({
        success: true,
        message: `Category [${result.name}] successfully added!`
      });
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.status(422).send({
          success: false,
          message: `Category [${result.name}] is already exists!`
        });
      }
      next(err);
    })
}

exports.updateOne = async (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  const update = req.body;
  const category = await Category.findOne({ _id: id }).exec();
  if (category) {
    for (let field in update) {
      category[field] = update[field];
    }

    category.save()
      .then((result) => {
        res.send({
          success: true,
          message: `Category [${result.name}] successfully updated!`
        });
      })
      .catch((err) => {
        next(err);
      })
  }
  else {
    res.status(422).send({
      success: false,
      message: `Category not found!`
    });
  }
}

exports.deleteOne = async (req, res, next) => {
  const id = new db.mongoose.Types.ObjectId(req.params.id);
  const category = await Category.findOne({ _id: id }).exec();
  if (category) {
    category.deleteOne()
      .then(() => {
        res.send({
          success: true,
          message: `Category [${category.name}] successfully removed!`
        });
      })
      .catch((err) => {
        next(err);
      })
  }
  else {
    res.status(422).send({
      success: false,
      message: `Category not found!`
    });
  }
}