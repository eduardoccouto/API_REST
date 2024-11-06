import User from '../models/User';


class UserController {

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)
      res.json(novoUser);


    } catch (e) {
      console.log(e)
      res.status(400).json({ errors: e.errors.map(err => err.message) });
    }
  }

  //index
  async index(req, res) {
    try {

      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log(req.userId, req.userEmail)
      return res.json(users);

    }
    catch {
      return res.json(null)
    }
  }
  //show

  async show(req, res) {
    try {

      const { id } = req.params;
      const users = await User.findByPk(id);
      const { nome, email } = users;
      return res.json(id, nome, email);

    }
    catch {
      return res.json(null)
    }
  }

  //update
  async update(req, res) {

    try {

      const users = await User.findByPk(req.userId);

      if (!users) {
        return res.status(400).json({
          errors: ['can not find user'],
        })
      }

      const novos_dados = await users.update(req.body);

      return res.json(novos_dados);

    }
    catch (e) {
      console.log(e)
      return res.json(res.status(400).json({ errors: e.errors.map(err => err.message) }))
    }
  }
  //delete

  async delete(req, res) {

    try {


      const users = await User.findByPk(req.userId);
      if (!users) {
        return res.status(400).json({
          errors: ['can not find user'],
        })
      }

      const user_destroy = await users.destroy(users);


      return res.json("Deletado");

    }
    catch (e) {
      console.log(e)
      return res.json(res.status(400).json({ errors: e.errors.map(err => err.message) }))
    }
  }
}

export default new UserController();
