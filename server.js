const express = require("express");
const app = express();
const path = require('path');
const helmet = require('helmet')
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const products = require("./routes/products");
const user = require("./routes/user");
const order = require("./routes/order");
const uploadRoute = require("./routes/uploadRoute");
const { notFound, errorHandler } = require("./middleware/error");
const cors = require('cors')
require('dotenv').config()

//JSON.stringify(true);
app.use(express.json());
app.use(helmet())
app.use(
  cors({
      origin: process.env.CLIENT_BASE_URL,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
  }),
)

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use("/api/orders", order);
app.use("/api/products", products);
app.use("/api/user", user);
app.use("/api/upload", uploadRoute);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);


// //const __dirname = path.resolve()
// app.use('/uploads',express.static(path.join(path.resolve(),'/uploads')))

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')))

// if (process.env.NODE_ENV == 'production') {
//   console.log('ok...');
//   app.use(express.static(path.join(path.resolve(), '../frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(path.resolve(), 'frontend', 'build', 'index.html'))
//   )
// } else {
  
// }

app.use(notFound);
app.use(errorHandler);

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("");
});

const port = process.env.PORT || 4200;
app.listen(port, () =>
  console.log(`Listning on port ${port}...`.blue.underline.bold)
);
