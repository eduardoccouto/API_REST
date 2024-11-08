import Aluno from '../models/Aluno';


class alunoController {
  async index(req, res) {


    const alunos = await Aluno.findAll();


    res.json(alunos);
  }


  async store(req, res) {

    const aluno = req.body;

    try {

      await Aluno.create(aluno);

      return res.json(aluno);


    } catch (e) {
      console.log(e);
      res.status(404).json("não funfou mana");
    }

  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({
        erros: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({
        erros: ['Aluno not find'],
      });

      return res.json(aluno);


    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }

  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({
        erros: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({
        erros: ['Aluno not find'],
      });

      await aluno.destroy();

      return res.json("Deleted");


    }
    catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }
  }

  async update(req, res) {

    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({
        erros: ['Missing ID'],
      });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({
        erros: ['Aluno not find'],
      });

      const aluno_atualizado = await aluno.update(req.body);

      return res.json(aluno_atualizado);


    }
    catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });

    }
  }
}

export default new alunoController();
