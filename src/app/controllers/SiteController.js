const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    search(req, res) {
        res.render('search');
    }
    index(req, res, next) {
        // res.render('home');
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}
module.exports = new SiteController();
