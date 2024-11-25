const notFound = (req, res, next) => {
  res.status(404).json({ error: "La risorsa richiesta non è stata trovata" });
};

module.exports = notFound;
