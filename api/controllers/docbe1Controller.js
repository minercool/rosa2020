const router = require("express").Router();
const connection = require("../../database/db");
module.exports = router;

router.get("/get", async (req, res) => {
  try {
    connection.query("SELECT * FROM docbondentree1", (error, rows, fields) => {
      if (rows.length > 0) {
        res.status(200).send(rows);
      } else {
        res.status(404).send("empty");
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    connection.query(
      "SELECT * FROM docbondentree1 WHERE id = ?",
      [req.params.id],
      (error, rows, fields) => {
        if (rows.length > 0) {
          res.status(200).send(rows[0]);
        } else {
          res.status(404).send("id not found");
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    connection.query(
      "DELETE FROM docbondentree1 WHERE id = ?",
      [req.params.id],
      (error, rows, fields) => {
        if (rows.affectedRows != 0) {
          res.status(200).send("deleted successfully");
        } else {
          res.status(404).send("id not found");
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    connection.query(
      "UPDATE docbondentree1 SET documentno = ?,num_contrat = ?, zone = ?, region = ? WHERE id = ?",
      [req.body.documentno, req.body.num_contrat,req.body.zone,req.body.region, req.params.id],
      (error, rows, fields) => {
        if (rows.affectedRows != 0) {
          res.status(200).send("updated succesffuly");
        } else {
          res.status(404).send("id not found");
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.post("/post", async (req, res) => {
  try {
    connection.query(
      "INSERT INTO docbondentree1(documentno,num_contrat,zone,region) VALUES(?,?,?,?)",
      [req.body.documentno, req.body.num_contrat,req.body.zone,req.body.region],
      (error, rows, fields) => {
        if (rows.affectedRows != 0) {
          res.status(200).send(rows);
        } else {
          res.status(500).send("something went wrong");
        }
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});
