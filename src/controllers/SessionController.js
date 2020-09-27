const {compare} = require('bcrypt');
const User = require('../models/User');

class SessionController {
  async store(request,response){
    try {
      const {email, password} = request.body;

      const user = await User.findOne({where:{email}})

      if (!user) {
        return response.status(401).json({error:'email/password is wrong'})
      }

      const comparePass = await compare(password, user.password)

      if (!comparePass) {
        return response.status(401).json({error:'email/password is wrong'})
      }

      return response.status(200).json('autorizado')
    } catch (error) {
      return response.status(401).json('error')
    }
  }
}

module.exports = new SessionController();
