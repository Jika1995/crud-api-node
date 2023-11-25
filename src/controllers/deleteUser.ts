import { remove, findById } from "../models/userModel.js";

export const deleteUser = async (req: any, res: any, id: string) => {

    try {
        const user = await findById(id);

        if (!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "User Not Found" }));
        } else {
            await remove(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: ` User ${id} removed` }));
        }
    } catch (err) {
        console.log(err);

    }
}