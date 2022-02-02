const db = require("./src/models");
const { app } = require("./src/app");

async function bootstrap() {
  console.log("Please wait for the server and db to run .....");
  const PORT = process.env.PORT || 9000;

  try {
    await db.sequelize.sync();
    app.listen(PORT, () => {
      console.clear();
      console.log(
        `DB is connected & server started listenng on http://localhost:${PORT}`
      );
    });
  } catch (err) {
    console.clear();
    console.log("Some error while bootstraping the app", err);
  }
}

bootstrap();
