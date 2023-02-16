const { Character, UniqueWeapon } = require('../models')

const index = async (req, res) => {
  try {
    const chars = await Character.findAll({
      include: [{ model: UniqueWeapon, as: 'uniqueWeapons'}]
    })
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

const update = async (req, res) => {
  try {
    const char = await Character.findByPk(req.params.id)
    if (req.body.level < 1) {
      res.status(500).json("Level needs to be greater than 0!")
    } else {

      // {throw new Error("Level needs to be greater than 0!")}
      char.set(req.body)
      char.save()
      res.status(200).json(char)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteChar = async (req, res) => {
  try {
    const numberOfCharsDestroyed = await Character.destroy(
      { where: {id: req.params.id}}
    )
    res.status(200).json(numberOfCharsDestroyed)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addUniqueWeapon = async (req, res) => {
  try {
    req.body.charId = req.params.id
    const weapon = await UniqueWeapon.create(req.body)
    res.status(200).json(weapon)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  index,
  create,
  addUniqueWeapon,
  update,
  delete: deleteChar,
}