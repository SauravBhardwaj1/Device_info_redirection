const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for generating and redirecting dynamic invite links

app.get("/", (req, res) => {
  try {
    const userAgent = req.headers["user-agent"];

    // Default destination URL
    let destinationURL = "https://platinx.exchange/exc/signup";

    // Update destination URL based on detected device
    if (userAgent.includes("bot")) {
      // Handling bots if needed
      res.send("Bot detected.");
      return;
    } else if (userAgent.includes("Android")) {
      destinationURL =
        "https://play.google.com/store/apps/details?id=com.platinx.exchange.flutter_platinx_exchange";
    } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
      destinationURL = "https://apps.apple.com/in/app/platinx/id1637866256";
    } else if (userAgent.includes("Windows")) {
      // Handle desktop redirection
      destinationURL = "https://platinx.exchange/exc/signup";
    } else {
      // Redirect to the appropriate destination URL
      res.redirect("https://platinx.exchange/exc/signup");
    }
  } catch (error) {
    console.log("error", error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
