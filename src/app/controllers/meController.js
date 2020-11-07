const Course = require("../models/Course");

const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require("../../util/mongoose");
class meController {
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
          .then(([courses, deletedCount]) =>
            res.render("me/storedCourses", {
              deletedCount,
              courses: mutipleMongooseToObject(courses),
            })
          )
          .catch(next);
      }
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render("me/trashCourses", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}
module.exports = new meController();
