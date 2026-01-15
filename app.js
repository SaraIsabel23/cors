const express = require("express");
const routes   = require("./routes/rickRoutes")
const app     = express();
const PORT    = 3000;

app.use("/characters", routes);

app.listen(PORT, () => console.log(`El servidor está escuchando en el puerto http://localhost:${PORT}`));
