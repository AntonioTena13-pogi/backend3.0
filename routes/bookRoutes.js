import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchallBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.put('/:id', bookController.editBook);


export default bookRoutes;