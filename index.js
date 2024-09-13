import express from 'express'
import makeDirectory from './mkDir.js';  // Adjust the path accordingly
import path from 'path';

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("hello this is test")
})

app.get('/user',(req,res)=>{
    res.send("hey this is user page")
})

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(dirname,'dir name is')

const newFolderPath = path.join(__dirname, '/public');

// Call the makeDirectory function
(async () => {
  try {
    await makeDirectory(newFolderPath);
    console.log(`Directory created at: ${newFolderPath}`);
  } catch (error) {
    console.log(`Failed to create directory: ${error}`);
  }
})();

app.listen(port,()=>{
    console.log("Server is starting in port ",port)
})