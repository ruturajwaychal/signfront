const { request } = require("express");
const express = require("express");

const router = express.Router();

const signUpTemplateCopy = require("../models/signupmodels");

router.post("/signup", (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    // image: req.body.file,
  });

  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/signup", async (req, res) => {
  try {
    const signupData = await signUpTemplateCopy.find();
    res.send(signupData);
  } catch (e) {
    res.send(e);
  }
});

//get individual data

router.get("/signup/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const studentData = await signUpTemplateCopy.findById(id);
    res.json(studentData);
    console.log(studentData);

    if (!studentData) {
      return res.status(404).send();
    } else {
      res.send(studentData);
    }
  } catch (e) {
    res.send(e);
  }
});

//put request

router.put("/signup/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(req.params.id);
  const sData = await signUpTemplateCopy
    .findOneAndUpdate(
      { id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        updated_data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("./signin");
module.exports = router;
