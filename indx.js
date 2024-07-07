import express from 'express'
import { dbConn } from './database/dbConnnection.js'
import userRouter from './controllers/user.controller.js'
import authRouter from './controllers/auth.controller.js'
import companyRouter from './controllers/company.controller.js'
import { IsAuth } from './middleware/auth.middleware.js'

const app = express()
const port = 3000


 app.use(express.json())
 app.use('/auth',userRouter)
 app.use('/user',IsAuth,userRouter)
 app.use('/company',IsAuth,userRouter)

 dbconnection()
app.get('/', (req , res)=> res.send('Hello World! mohamed'))
app.listen(port,()=>console.log(`example app listen on port ${port}!`))