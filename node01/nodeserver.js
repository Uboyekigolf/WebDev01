const http = require('http');
http
.createServer((req,res) => {
    console.log('เอาอีกแล้ว');
    res.write('สวัสดี จาก node web server');
    res.end();
}
)
.listen(80); 