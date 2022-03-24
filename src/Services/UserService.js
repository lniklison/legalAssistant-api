import express from "express";
import UserRepository from '../Repositories/UserRepository.js';
var userRepository = new UserRepository();

class UserService {
    getAll = async () => {
        return await userRepository.get();
    }

    getById = async (id) => {
        return await userRepository.get(id);
    }

    post = async (user) => {
        return await userRepository.post(user);
    }

    put = async (id, user) => {
        return await userRepository.put(id, user);
    }

    delete = async (id) => {
        return await userRepository.delete(id);
    }
}

export default UserService;