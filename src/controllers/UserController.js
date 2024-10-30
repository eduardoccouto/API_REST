import User from '../models/User';


class UserController {

  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Luiz',
        email: 'email@email.com',
        password: '123456',

      })
      res.json(novoUser);


    } catch (e) {
      console.log(e)
      res.status(400).json('Erro');
    }
  }
}

export default new UserController();
