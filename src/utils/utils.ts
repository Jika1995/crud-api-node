import fs from 'fs';
import { User } from './types.js';

export const writeDataToFile = (filename: string, content: User[] | []) => {

    try {
        fs.writeFileSync(filename, JSON.stringify(content), 'utf8')
    } catch (err) {
        console.log(err);
    }
}

export const getPostData = (req: any) => {
    return new Promise<string>((resolve, reject) => {
        try {
            let body = "";
            req.on('data', (chunk: any) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (err) {
            reject(err)
        }
    })
};

