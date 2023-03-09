const express = require('express');
const path=require('path')
const cors = require('cors')

const app = express();
const bodyparser = require('body-parser');

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())

const sequelize = require('./util/database')

const homeRoutes = require('./routes/home');

app.use('/home', homeRoutes)

sequelize.sync()
.then(result =>{
   app.listen(3000)
}).catch(err =>console.log(err))
