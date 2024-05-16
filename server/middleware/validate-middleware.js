const validate = (schema) => async (req, res, next) => {
  try {
    const parseData = await schema.parseAsync(req.body);
    req.body = parseData;
    next();
  } catch (err) {
    const status = 401;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message;
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};

module.exports = validate;
