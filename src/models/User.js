import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Tamanho do inválido'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'Email inválido'
            }
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'Tamanho de senha inválido'
            }
          }
        },

      }, {
      sequelize,

    });

    this.addHook('beforeSave', async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;

  }
}
