import { create } from "../models/userModel.js";
import { getPostData } from "../utils/utils.js";

export const createUser = async (req: any, res: any) => {
    try {
        const body = await getPostData(req)

        const { username, age, hobbies } = JSON.parse(body)

        const user = {
            username,
            age,
            hobbies
        }

        const newUser = await create(user);
        res.writeHead(201, { "Content-Type": "application/json" })
        return res.end(JSON.stringify(newUser))

    } catch (err) {
        console.log(err);

    }
}