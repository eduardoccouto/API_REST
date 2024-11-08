import express from "express";

import homeRoutes from "./src/routes/homeRoutes";
import user from "./src/routes/UserRoutes";
import token from "./src/routes/tokenRoutes";
import dotenv from 'dotenv';
import aluno from './src/routes/alunoRoutes';
import fotos from './src/routes/FotoRoutes';

dotenv.config();

import './src/database';

class App {

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

  }

  middlewares() {

    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

  }


  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', user);
    this.app.use('/tokens/', token);
    this.app.use('/alunos/', aluno);
    this.app.use('/fotos/', fotos);
  }
}

export default new App().app;

