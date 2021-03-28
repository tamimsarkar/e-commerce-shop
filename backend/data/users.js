import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John',
        email: 'John@example.com',
        password: bcrypt.hashSync('123456', 10),
    
    },

    {
        name: 'Adam G',
        email: 'adam@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users