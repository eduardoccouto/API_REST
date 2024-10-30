import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.post('/', UserController.store);

export default router;


/*
  cada controller tem até 5 metodos

  index -> lista todos os usuarios ->GET

  store/create -> cria um novo usuario -> POST

  delete->apaga um usuario -> DELETE

  show -> mostra um usuario -> GET

  update -> atualiza um usuário -> PUT OU PATCH


*/
