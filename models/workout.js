const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    excersises: [{
      type:{  
          type: String,
          trim: true
      },
      name: {
          type: String,
          trim: true
      },
      weight: {
          type: Number
      },
      sets: {
        type: Number
      },
      reps: {
          type: Number
      },
      duration: {
        type: Number
    }
}]
},
{
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.excercises.reduce((total, excercise) => {
        return total + excercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;