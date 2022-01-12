const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const userRoutes = require("./routes/user")
const saucesRoutes = require ("./routes/sauce")


mongoose.connect('mongodb+srv://Ascryd:Barbouille123@Piiquante.xnmim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express()

app.use(express.json())


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use("/images", express.static(path.join(__dirname, 'images')))
  
// ----- On importe les routes/api pour l'authentification
app.use("/api/auth", userRoutes)

app.use("/api/sauces", saucesRoutes)



module.exports = app