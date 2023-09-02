module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'Romeo Barros', mail: 'romeocostabarros@gmail.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };
};
