import express from "express";
import db from './Config/Database.js';


class UserRepository {
    get = async (id) => {
        var users = await db.query(`SELECT * FROM dbo.user ${id ? `WHERE Id = ${id}` : '' }`);
        return db.isEmpty(users);
    }

    post = async (user) => {
        const result = await db.query(
            `INSERT INTO dbo.user 
            (FirstName, LastName, Email, GovId, IdType, Password, Active) 
            VALUES 
            ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.govId}', ${user.idType}, '${user.password}', 1)`
          );

        let message = 'Error creating user';

        if (result.affectedRows) {
            message = 'User created successfully';
        }

        return {message};
    }

    put = async (id, user) => {
        const result = await db.query(
            `UPDATE dbo.user 
            SET 
            ${user.firstName ? `FirstName = '${user.firstName}',` : ''}
            ${user.lastName ? `LastName = '${user.lastName}',` : ''}
            ${user.email ? `Email = '${user.email}',` : ''}
            ${user.govId ? `GovId = '${user.govId}',` : ''}
            ${user.idType ? `IdType = ${user.idType},` : ''}
            ${user.password ? `Password = '${user.password}'` : ''}
            WHERE Id=${id}` 
        );
        
        let message = 'Error in updating user';
        
        if (result.affectedRows) {
            message = 'User updated successfully';
        }
        
        return {message};
    }

    delete = async (id) => {
        const result = await db.query(
            `UPDATE dbo.user 
            SET 
            Active = 0
            WHERE Id=${id}` 
        );
        
        let message = 'Error in deleting user';

        if (result.affectedRows) {
            message = 'User deleted successfully';
        }
        
        return {message};
    }
}

export default UserRepository;