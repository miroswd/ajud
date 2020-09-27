const {hash} = require('bcrypt');
const {v4} = require('uuid');
const Judiciary = require('../models/Judiciary');

class JudiciaryController {
  async store(request,response){
    try {

    const {email,password, name, latitude, longitude, address} = request.body;

    const checkJudiciaryExists = await Judiciary.findOne({where:{email}})

    if (checkJudiciaryExists){
      return response.status(401).json({error:'User already exists'})
    }

    const passwordHash = await hash(password,8)

    const data = {
      id:v4(),
      email,
      name,
      password:passwordHash,
      latitude,
      longitude,
      address,
    }

    await Judiciary.create(data)

    delete data.password;

    return response.status(200).json(data)
    } catch (error) {
      console.log(error)
      return response.status(401).json('error')
    }
  }

  async index(request,response){
    const judiciaries = await Judiciary.findAll({attributes:['id','email','latitude','longitude','address','created_at','updated_at']})
    return response.status(200).json(judiciaries)
  }
}

module.exports = new JudiciaryController();
