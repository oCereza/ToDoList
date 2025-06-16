const validateFieldTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: "The field Tittle is required" });
  }

  if (body.title === "") {
    return res.status(400).json({ message: "Title cannot be empty" });
  }

  next();
};

const validateFieldStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: "The field Tittle is required" });
  }

  if (body.status === "") {
    return res.status(400).json({ message: "status cannot be empty" });
  }

  next();
};

module.exports = {
  validateFieldTitle,
  validateFieldStatus,
};
