const express = require("express");
const useragent = require("express-useragent");

const app = express();
app.use(useragent.express());

const PORT = process.env.PORT || 3000;

// Definning a route for generating and redirecting dynamic invite links

app.get("/", (req, res) => {
  try {
    const userAgent = req.useragent;


    // Default destination URL
    let destinationURL = "https://platinx.exchange/exc/signup";

    if (userAgent.isMobile) {     
        if (userAgent.isiPhone) {
             // Handling IPhone redirection
            destinationURL = 'https://apps.apple.com/in/app/platinx/id1637866256'; 
        } else if (userAgent.isAndroid) {
            // Handling Android redirection
            destinationURL = 'https://play.google.com/store/apps/details?id=com.platinx.exchange.flutter_platinx_exchange'; 
        }
    } else if (userAgent.isDesktop) {
        // Handling desktop redirection
        destinationURL = "https://platinx.exchange/exc/signup";
    }
    

    // Redirect to the appropriate destination URL
    res.redirect(destinationURL);
  } catch (error) {
    console.log("error", error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




