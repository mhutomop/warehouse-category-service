module.exports = (app) => {
  const express = require('express');
  const router = express.Router();
  const categories = require('../controllers/category.controller');

  /**
   * @swagger
   * /api/categories:
   *  get:
   *    summary: Get all categories.
   *    description: Get all categories by default.
   *    tags: ['categories']
   *    parameters:
   *      - in: query
   *        name: type
   *        schema:
   *          type: string
   *        required: false
   *        description: Filter categories by name.
   *        example: Senjata
   *    responses:
   *      200:
   *        description: Success get all categories.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - data
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                data:
   *                  type: array
   *                  items:
   *                    type: object
   *                    required:
   *                      - id
   *                      - name
   *                      - description
   *                    properties:
   *                      id:
   *                        type: string
   *                        description: The category ID.
   *                        example: 64056dc7c2c95ac1303b4b21
   *                      name:
   *                        type: string
   *                        description: The category's name
   *                        example: Senjata Api
   *                      description:
   *                        type: string
   *                        description: The product's description
   *                        example: Ini adalah senjata api.
  */
  router.get('/api/categories', categories.find);

  /**
   * @swagger
   * /api/categories:
   *  post:
   *    summary: Create a new category.
   *    description: Get a new category with parameters.
   *    tags: ['categories']
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            required:
   *              - name
   *              - description
   *            properties:
   *              name:
   *                type: string
   *                description: Name of new category.
   *                example: Senjata Tajam
   *              description:
   *                type: string
   *                description: Description of new category.
   *                example: Ini adalah senjata tajam.
   *    responses:
   *      200:
   *        description: Success add new category.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Category [Senjata Tajam] successfully added!
  */
  router.post('/api/categories', categories.create);

  /**
   * @swagger
   * /api/categories/{id}:
   *  put:
   *    summary: Update a category.
   *    description: Update a category by it's ID.
   *    tags: ['categories']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The category ID.
   *        example: 64056dc7c2c95ac1303b4b21
   *    requestBody:
   *      description: Body
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            properties:
   *              name:
   *                type: string
   *                description: New name of the category.
   *                example: Senjata Api Berat
   *              description:
   *                type: string
   *                description: New description of the category.
   *                example: Ini adalah senjata api berat.
   *    responses:
   *      200:
   *        description: Success update the product.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Category [Senjata Api] successfully updated!
  */
  router.put('/api/categories/:id', categories.updateOne);

  /**
   * @swagger
   * /api/categories/{id}:
   *  delete:
   *    summary: Delete a category.
   *    description: Delete a category by it's ID.
   *    tags: ['categories']
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The category ID.
   *        example: 64056dc7c2c95ac1303b4b21
   *    responses:
   *      200:
   *        description: Success delete the category.
   *        content:
   *          application/json:
   *            schema:
   *              type: object
   *              required:
   *                - success
   *                - message
   *              properties:
   *                success:
   *                  type: boolean
   *                  description: Success true/false.
   *                  example: true
   *                message:
   *                  type: string
   *                  example: Category [Senjata Api] successfully removed!
  */
  router.delete('/api/categories/:id', categories.deleteOne);

  app.use(router);
}