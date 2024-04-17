import Listing from "../../../model/Listing";
import connectDb from "../../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == 'GET') {
        let listings = await Listing.find();

        res.status(200).json({ listings });
    } else {
        res.status(400).json({ error: "This method is not allowed"});
    }
}

export default connectDb(handler);