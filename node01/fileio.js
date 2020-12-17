const fs = require('fs');

fs.exist('nodeserver.js', (exist) => {  
     console.log("มีไฟล์ nodeserver อยู่");
}
)
console.log("แม่น....")