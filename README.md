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
