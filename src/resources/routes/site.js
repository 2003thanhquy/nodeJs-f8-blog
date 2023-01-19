import express from 'express';
import { siteController } from '../app/controllers/SiteController.js';
const siteRouter = express.Router();

siteRouter.use('/:plus', siteController.search);
siteRouter.use('/', siteController.index);

export { siteRouter };
