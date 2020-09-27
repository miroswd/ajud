const {hash} = require('bcrypt');
const {v4} = require('uuid');
const User = require('../models/User');

class UserController {
  async store(request,response){
    try {

    const {email,password} = request.body;

    const checkUserExists = await User.findOne({where:{email}})

    if (checkUserExists){
      return response.status(401).json({error:'User already exists'})
    }

    const passwordHash = await hash(password,8)

    const data = {
      id:v4(),
      email,
      password:passwordHash
    }

    await User.create(data)

    delete data.password;

    return response.status(200).json(data)
    } catch (error) {
      console.log(error)
      return response.status(401).json('error')
    }
  }

  async index(request,response){
    const users = await User.findAll({attributes:['id','email','created_at','updated_at']})
    return response.status(200).json(users)
  }
}

module.exports = new UserController();
