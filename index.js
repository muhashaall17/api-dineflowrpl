const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// CEK DEFAULT '/' AMAN
app.get('/', (req, res) => {
  res.send('🚀 Dineflow API Work!');
});

// Import routes
app.use("/api/meja", require("./routes/MejaRoutes"));

app.use('/api/menu', require('./routes/MenuRoutes'));
app.use('/api/user', require('./routes/UserRoutes'));

app.use('/api/transaksi', require('./routes/TransaksiRoutes'));




// Connect DB and Start server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
