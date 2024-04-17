const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    area: {
        type: Number,
        required: true,
    },
    room: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

mongoose.models = {};
export default mongoose.model("Listing", ListingSchema);