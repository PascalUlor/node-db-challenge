const express = require("express");
const helmet = require("helmet");
const router = require("./routes");

const app = express();
app.use(helmet());
app.use(express.json());

app.use("/api/projects", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
