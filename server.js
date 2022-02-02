const { app } = require("./src/app");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(
    `DB is connected & server started listenng on http://localhost:${PORT}`
  );
});
