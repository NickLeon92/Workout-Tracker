const router = require("express").Router();
const Workout = require("../models/workout")


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
              totalDuration: { $sum: "$exercises.duration" } , 
            }
          },
    ]).then(data => {res.json(data)})
    
  });

router.put("/api/workouts/:id", (req, res) => {
    const derp = req.body
    console.log(derp)
    console.log(req.params.id)

    
    
    Workout.findOneAndUpdate(
        {
          _id: req.params.id
        },
        { $push: { exercises: derp } },
        {new:true}, 
    
        (error, edited) => {
          if (error) {
            console.log(error);
            res.send(error);
          } else {
            console.log(edited);
            res.send(edited);
          }
        }
      );
  });

router.post("/api/workouts", (req,res) => {
    Workout.create(req.body)
    .then(workoutData => {
      res.json(workoutData);
    })
    .catch(err => {
      res.status(400).json(err);
    });
} )

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
          $addFields: {
              totalDuration: { $sum: "$exercises.duration" } , 
            }
          },
    ]).then(data => {res.json(data)})
})
module.exports = router;
