const { app } = require('./app');
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    // Authenticate and synchronize the database
    await db.authenticate();
    await db.sync();

    // Set server to listen
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log('Express app running!');
    });
  } catch (e) {
    console.log(e);
  }
};

// To start server
startServer();
