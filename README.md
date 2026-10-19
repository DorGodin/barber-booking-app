# TomGoldin - the app

The shop's app for iPhone and Android: [Capacitor](https://capacitorjs.com) around the booking page of
[barber-booking-api](https://github.com/DorGodin/barber-booking-api). The page is the app - this repository
holds what only a phone has: the icon, the black splash, the page shown when the shop cannot be reached,
and notifications through Firebase.

| | |
|---|---|
| `scripts/configure.mjs` | which shop the app opens - `SHOP_URL=https://... npm run configure`; plain http only for a development copy |
| `www/offline.html` | shown when the shop cannot be reached; opens the shop again once the connection is back |
| `assets/` | the icon and splash, drawn from the shop's logo; `npm run assets` makes every size from them |
| `android/`, `ios/` | the native projects (Capacitor 8, Swift Package Manager on iOS) |

## Running it

    npm install
    npm run android          # an Android emulator, the dev shop on http://10.0.2.2:8100
    SHOP_URL=http://localhost:8100 npm run ios   # the iPhone simulator

## Notifications

The page registers the phone with the shop (`POST /push/devices`) through `@capacitor-firebase/messaging`.
Each copy needs its own Firebase project: `android/app/google-services.json` and
`ios/App/App/GoogleService-Info.plist` - never committed - and, for iPhones, an APNs key uploaded to Firebase.

## Building for the stores

1. **The shop it opens:** `SHOP_URL=https://<the live shop> npm run sync` - an https address; plain http is for development only.
2. **The version:** `npm run set-version -- 1.0.0 1` sets the version people see and the build number on both phones.
   Every upload needs a higher build number than the last.
3. **iPhone:** open `ios/App/App.xcworkspace` (or `.xcodeproj`) in Xcode, choose the shop's Apple Developer team under
   Signing & Capabilities (Push Notifications is already declared in `App/App.entitlements`), then Product → Archive
   and upload. iPhone only, portrait only. `PrivacyInfo.xcprivacy` declares what the app collects - the name, the phone
   and the device's token for notifications, for the app's own use, no tracking - and `Info.plist` that it uses no
   encryption beyond https.
4. **Android:** make the upload key once and keep it safe - losing it means a new app listing:

       keytool -genkeypair -v -keystore android/tomgoldin-upload.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000

   then write `android/keystore.properties` (never committed):

       storeFile=tomgoldin-upload.jks
       storePassword=...
       keyAlias=upload
       keyPassword=...

   and build the bundle Google Play takes: `cd android && ./gradlew bundleRelease` →
   `android/app/build/outputs/bundle/release/app-release.aab`. Android 13 and on ask before showing notifications
   (`POST_NOTIFICATIONS`), and the app's data is not backed up to the cloud (`allowBackup="false"`).
