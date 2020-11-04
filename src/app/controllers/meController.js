const Course = require('../models/Course');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongoose');
class meController {
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/storedCourses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}
module.exports = new meController();
