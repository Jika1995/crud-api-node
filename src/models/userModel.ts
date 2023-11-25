import users from '../data/users.json'
import { v4 as uuidv4, v4 } from 'uuid';
import { writeDataToFile } from '../utils/utils.js';
import { User } from '../utils/types.js';

export const findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(users)
    })
}

export const findById = (userId: string) => {
    return new Promise<User>((resolve, reject) => {
        const user = users.find((u: User) => u.id === userId)
        if (user) resolve(user)
    })
}

export const create = (user: Omit<User, 'id'>) => {
    const newUser = {
        id: v4(),
        ...user
    }
    return new Promise((resolve, reject) => {
        writeDataToFile('./data/users.json', users);
        resolve(newUser)
    })
}

export const update = (userId: string, user: Omit<User, 'id'>) => {
    return new Promise((resolve, reject) => {
        const index = users.findIndex((u: User) => u.id === userId)
        users[index] = { id: userId, ...user }
        writeDataToFile('./data/users.json', users)
        resolve(users[index])
    })
}

export const remove = (userId: string) => {
    return new Promise<void>((resolve, reject) => {
        const updatedUsers = users.filter((u: User) => u.id !== userId);
        writeDataToFile('./data/users.json', updatedUsers);
        resolve()
    })
}