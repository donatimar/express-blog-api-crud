const errorHandler = (err, req, res, next) => {
  console.error("Errore:", err.message || err);
  res.status(err.status || 500).json({
    error: err.message || "Errore interno del server",
  });
};

module.exports = errorHandler;
