// Writes capacitor.config.json and www/shop.js for the shop the app opens:
//   SHOP_URL=https://tomgoldin.co.il npm run configure        the live shop
//   npm run configure                                        an Android emulator, the dev shop on this computer
// A plain http address is allowed only for a development copy - the live shop is https.
import { writeFileSync } from "node:fs";

const url = process.env.SHOP_URL || "http://10.0.2.2:8100";
const dev = url.startsWith("http://");
const config = {
  appId: "il.co.tomgoldin.booking",
  appName: "TomGoldin",
  webDir: "www",
  server: {
    url,
    cleartext: dev,
    // When the shop cannot be reached, the app shows its own page instead of the system's error.
    errorPath: "offline.html",
  },
  android: { backgroundColor: "#111111" },
  ios: { backgroundColor: "#ffffff", contentInset: "never" },
  plugins: {
    SplashScreen: { launchShowDuration: 1200, launchAutoHide: true, backgroundColor: "#111111", showSpinner: false },
    // The page asks for the whole screen (viewport-fit=cover); Android is told before it loads, so nothing shifts.
    SystemBars: { insetsHandling: "css", initialViewportFitValueHint: "cover", style: "LIGHT" },
    FirebaseMessaging: { presentationOptions: ["badge", "sound", "alert"] },
  },
};
writeFileSync("capacitor.config.json", JSON.stringify(config, null, 2) + "\n");
writeFileSync("www/shop.js", `window.SHOP_URL = ${JSON.stringify(url)};\n`);
console.log(`the app opens ${url}${dev ? " (development: plain http allowed)" : ""}`);
