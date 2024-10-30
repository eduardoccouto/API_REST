import Aluno from '../models/Aluno';


class HomeController {
  async index(req, res){
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      email: 'email@email.com',
      idade: 400,
      peso: 300,
      altura: 280,

    })
    res.json(novoAluno);
  }
}

export default new HomeController();
