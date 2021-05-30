// node 6.js 로 실행한다.

// http://localhost:3000 으로 접속하면
// root url 이 화면에 나타나야 한다.

// http://localhost:3000/admin/products 으로 접속하면
// admin url 이 화면에 나타나야 된다

const express = require("express");

// 이 아래로 작성해주세요.
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('root url');
});
app.get('/admin/products', (req,res) => {
    res.send('admin url');
});
app.listen(port, () => {
    console.log("Express listening on port", port);
});