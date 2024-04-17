import Listing from "../../../model/Listing";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let newListing = new Listing({
            title: req.body.title,
            slug: req.body.slug,
            location: req.body.location,
            area: req.body.area,
            room: req.body.room,
            price: req.body.price,
        });
        await newListing.save();
    }
}