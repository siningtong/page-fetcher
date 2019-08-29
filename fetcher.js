const request = require('request');
const fs = require('fs')
const args = process.argv;
request(args[2], (error, response, body) => {
 
  fs.writeFile(args[3],body,()=>{
    console.log(`Downloaded and saved ${body.length} bytes to ${args[3]}`)
  })
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
});
