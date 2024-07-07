import { connect } from "mongoose";


 export const dbConn=connect('mongodb://127.0.0.1/notes2').then(()=>{

    console.log('database conncted successfully.');
})