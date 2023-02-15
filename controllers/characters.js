const { Character } = require('../models')

const index = async (req, res) => {
  try {
    const chars = await Character.findAll({})
    res.status(200).json(chars)
  } catch (error) {
    res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try {
    const char = await Character.create(req.body)
    res.status(200).json(char)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  index,
  create,
}