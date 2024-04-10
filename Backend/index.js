const express = require('express');
const app = express()
const port = 3000;
const cors = require('cors');

const userRouter = require('./Routers/User')

app.use(cors({
    origin:['http://localhost:5174']
}))

//middlewear
app.use(express.json())
app.use('/user',userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});