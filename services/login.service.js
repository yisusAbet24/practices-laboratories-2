const { getConnection } = require("../connection/connection")
let knex = getConnection()
const {generateToken} = require("../utils/token")
const bcrypt = require('bcrypt');

validateUser = async (req, res) => {
  const { user, password } = req.body;
 
  try {
    //valida si existe un usuario 
    const user1 = await knex('user').where({ ['user']: user }).first();
    if (!user1) {
      return res.status(401).json({ "status":401, msg: 'unauthorized' });
    }
    //valida si la contraseña es correcta
    const validPassword = await bcrypt.compare(password, user1.password);
    if (!validPassword) {
      return res.status(401).json({ "status":401, msg: 'unauthorized' });
    }

    const token = generateToken(user1.id);
    return res.status(200).json({ "status":200, msg: 'Authorized ', token });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ "status":500, msg: 'Internal Server Error' });
  }
}

module.exports = {
  validateUser
} 