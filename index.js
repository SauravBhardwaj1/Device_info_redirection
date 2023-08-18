const express = require("express");
const useragent = require("express-useragent");

const app = express();
app.use(useragent.express());

const PORT = process.env.PORT || 3000;

// Define a route for generating and redirecting dynamic invite links

app.get("/", (req, res) => {
  try {
    const userAgent = req.useragent;


    // Default destination URL
    let destinationURL = "https://platinx.exchange/exc/signup";

    // Update destination URL based on detected device
    if (userAgent.is("bot")) {
      // Handling bots if needed
      res.send("Bot detected.");
      return;
    } else if (userAgent.is("isAndroid")) {
      destinationURL =
        "https://play.google.com/store/apps/details?id=com.platinx.exchange.flutter_platinx_exchange";
    } else if (userAgent.is("isiPhone") || userAgent.is("iPad")) {
      destinationURL = "https://apps.apple.com/in/app/platinx/id1637866256";
    } else if (userAgent.is("isDesktop")) {
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






// // Define a route for generating and redirecting dynamic invite links
// app.get('/invite', (req, res) => {
//     const userAgent = req.useragent;

//     // Default destination URL
//     let destinationURL = 'https://yourapp.com';

//     // Update destination URL based on detected device
//     if (userAgent.isMobile) {
//         destinationURL = 'https://play.google.com/store/apps/yourapp'; // Change to your app's Google Play URL
//     } else if (userAgent.isDesktop) {
//         // Handle desktop redirection
//     }

//     // Redirect to the appropriate destination URL
//     res.redirect(destinationURL);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
