const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Movie = require('../models/movie');
// Creating the index route
// index route should show all the fruits
router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all');
  try {
    const allMovies = await Movie.find();

    // This is the response to react
    res.json({
      status: {
        code: 200,
        message: 'Success'
      },
      data: allMovies
    });
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body, ' this is req.body');
    const createdMovie = await Movie.create(req.body);
    console.log('response happening?');
    res.json({
      status: {
        code: 201,
        message: 'Resource successfully created'
      },
      data: createdMovie
    });
    console.log('res.json :>> ', res.json);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.get('/:_id', async (req, res, next) => {
  try {
    const foundMovie = await Movie.findById(req.params._id);
    res.json({
      status: {
        code: 200,
        message: 'Success'
      },
      data: foundMovie
    });
  } catch (err) {
    res.send(err);
  }
});

router.put('/:_id', async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({
      status: {
        code: 201,
        message: 'Resource successfully updated'
      },
      data: updatedMovie
    });
  } catch (err) {
    res.send(err);
  }
});

// Delete route
router.delete('/:_id', async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndRemove(req.params._id);
    res.json({
      status: {
        code: 200,
        message: 'Resource successfully deleted'
      },
      data: deletedMovie
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
