import {connect} from 'mongoose'


export const dbconnection = ()=> connect('mongodb://localhost:27017/notes2').then( ()=> {

    console.log("database connected successfully."); 
})