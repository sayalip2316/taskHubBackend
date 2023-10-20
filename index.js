const express=require("express");
const app=express();
const {connection}=require("./Config/db");
const {userRouter}=require("./Routes/user.router");
const {projectRouter}=require("./Routes/project.router");
const {taskRouter}=require("./Routes/tasks.router");
const cors=require("cors");
const dotenv=require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/user",userRouter);
app.use("/project",projectRouter);
app.use("/task",taskRouter);

app.listen(process.env.PORT,async(req,res)=>{
    try {
        await connection
        console.log("connected to db");
        console.log(`Server is listening on the port ${process.env.PORT}`);
    } catch (error) {
        console.log(error)
    }
    
})