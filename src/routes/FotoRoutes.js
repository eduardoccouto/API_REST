import { Router } from 'express';

import logingRequired from '../middlewares/loginRequired';

import fotoController from '../controllers/FotoController';


const router = new Router();

router.post('/', logingRequired, fotoController.store);

export default router;
