
import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../models/Foto';


const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {

    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],

        });
      }
      const { originalname, filename } = req.file;

      try {
        const { aluno_id } = req.body;
        console.log(aluno_id)

        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);

      }
      catch (e) {
        return res.status(400).json({
          errors: ['Auno não existe', `${e}`]
        })
      }

    });


  }
}

export default new FotoController();
