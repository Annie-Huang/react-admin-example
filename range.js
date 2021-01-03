module.exports = (req, res, next) => {
  // res.header('X-Hello', 'World');
  res.header('Content-Range', 'posts 0-20/20');
  next();
};
