const express = require("express");
const csvToJson = require("convert-csv-to-json");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");

router.get("/:stock", [auth], async (req, res) => {
  const stock = req.params["stock"].toUpperCase();

  var json;

  if (stock === "NSE") {
    json = csvToJson.getJsonFromCsv(`./data/NSE.V.csv`);
  } else {
    try {
      json = csvToJson.getJsonFromCsv(`./data/${stock}.NS.csv`);
    } catch (error) {
        res.status(500).json({error});
    }
  }

  return res.send(json);
});

module.exports = router;
