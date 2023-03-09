const Sequelize=require('sequelize');
const sequelize=require('../util/database')

const User=sequelize.define('users',{
    username:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    phoneNumber:Sequelize.DOUBLE
})

module.exports=User;