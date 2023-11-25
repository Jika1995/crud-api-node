import { findById } from "../models/userModel.js";

export const getUserById = async (req: any, res: any, id: string) => {
    try {
        const user = await findById(id);

        if (!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: 'User not found' }))
        }
    } catch (err) {
        console.log(err);
    }
}