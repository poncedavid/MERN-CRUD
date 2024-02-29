export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        res.status(400)
        .json({ error: error.errors.map((err) => err.message)});
    }
    }