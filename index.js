const express = require("express");
const device = require("device");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Define a route for generating and redirecting dynamic invite links

app.get("/", (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];

    const userDevice = device(userAgent);

    // Default destination URL
    let destinationURL = "https://platinx.exchange/exc/signup";

    // Update destination URL based on detected device
    if (userDevice.is("bot")) {
      // Handling bots if needed
      res.send("Bot detected.");
      return;
    } else if (userDevice.is("Android")) {
      destinationURL =
        "https://play.google.com/store/apps/details?id=com.platinx.exchange.flutter_platinx_exchange";
    } else if (userDevice.is("iPhone") || userDevice.is("iPad")) {
      destinationURL = "https://apps.apple.com/in/app/platinx/id1637866256";
    } else if (userDevice.is("Windows")) {
      // Handle desktop redirection
      destinationURL = "https://platinx.exchange/exc/signup";
    } else {
      // Redirect to the appropriate destination URL
      res.redirect(destinationURL);
    }
  } catch (error) {
    console.log("error", error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



