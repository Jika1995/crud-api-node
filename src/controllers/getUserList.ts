import { findAll } from "../models/userModel.js";

export const getUsers = async (req: any, res: any) => {

    try {
        const users = await findAll();
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(users))
    } catch (err) {

        console.log(err);

    }
}