//modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//routes
const authRouter = require("./routes/authRoutes");

//config
const dbName = "artemovUsers";
const port = 3000;

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//atrelar as rotas ao express
app.use("/api/auth", authRouter);

//conexão mongodb
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
    }
);

app.get("/", (req, res)=> {
    //primeira rota de teste
    res.json({message : "Rota de teste rotando!!!"});
});

//executando a porta
    app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
});