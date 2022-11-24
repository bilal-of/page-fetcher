const fs = require('fs'); 
const request = require('request');

const content = process.argv.slice(2);

request(content[0], (err, response, body) => {
  if (err) {
    console.error(err); 
    return 
  }
  fs.writeFile(content[1], body, error => {
    if (error) {
       console.error(error); 
       return 
    }
    // file written successfully 
      console.log('Downloaded and saved ', body.length, ' bytes to ', content[1]);
  ;
  });  
    
})