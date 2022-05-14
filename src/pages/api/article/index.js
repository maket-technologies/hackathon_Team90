import dbConnect from "../../../utils/dbConnect";
import {Article} from "../../../models";

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) { 
        case 'GET':
            try {
                const users = await Article.find({});
                res.status(200).json({ success: true, data: users})                
            } catch (error) {
                res.status(404).json({ success: false, message: error})
            }
            break;
        case 'POST':
            try {
                const user = await Article.create(req.body);
                res.status(201).json({ success: true, data: user})
                
            } catch (error) {
                res.status(404).json({ success: false, message: error})
            }
            break;
    
        default:
            res.status(404).json({ success: false })
            break;
    }
}
