import User from '../models/User';
import jwt from 'jsonwebtoken';


class TokenController {
  async store(req, res) {

    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ['Credenciais inválidas'] });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe']
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida']
      });
    }
    const { id } = user;
    const webtoken = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION});
    return res.json({token: webtoken})
  }

}

export default new TokenController();
