const generateImage = async (req, res ) => {
  res.status(200).json({ msg: "generate image now"})
}

module.exports = { generateImage };