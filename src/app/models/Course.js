const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
    {
        name: { type: String, maxLength: 255 },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
Course.plugin(mongoose_delete, { deleteAt: true, overrideMethods: 'all' });
module.exports = mongoose.model('Course', Course);
