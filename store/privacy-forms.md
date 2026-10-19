# The stores' privacy forms - what to answer

Answered from what the code keeps, the same as the shop's privacy policy (`/privacy`) and the app's privacy
manifest (`ios/App/App/PrivacyInfo.xcprivacy`). If the code starts keeping something new, these change with it.

What is kept, and why:

| Data | Why | Kept |
|---|---|---|
| Full name | bookings; the barber sees who is coming | while the account exists |
| Mobile number | signing in by code; the owner can call | while the account exists |
| Bookings (time, service, barber, price, products kept, moves, cancellations) | the service itself | while the account exists; past ones stay with the shop without a name after deletion |
| Reviews (stars, optional words) | shown to the shop | stay after deletion, without a name |
| A note the staff write about the customer | the shop's own | until deleted |
| Device token (Firebase), if the customer allows notifications | notifications about their own bookings | until sign-out or deletion |
| IP address | limiting sign-in attempts and codes | failed sign-ins ~15 minutes, sign-ups ~1 hour |
| The SMS code | signing in | a keyed hash only, at most a day |

Nothing for advertising, no analytics, no crash reporting, no tracking across apps or sites, nothing sold. All of it
travels over https. The SMS provider receives the number and the code; Firebase receives the device token - nothing
else about the customer or the booking.

## App Store - App Privacy

**Do you or your third-party partners collect data from this app?** Yes.

| Data type | Collected | Linked to the user | Used for tracking | Purpose |
|---|---|---|---|---|
| Contact Info → Name | Yes | Yes | No | App Functionality |
| Contact Info → Phone Number | Yes | Yes | No | App Functionality |
| User Content → Other User Content (reviews) | Yes | Yes | No | App Functionality |
| Identifiers → Device ID (push token) | Yes | Yes | No | App Functionality |

Everything else: not collected. (Purchases: none - nothing is paid in the app. Location, contacts, photos, health,
browsing history, diagnostics: none.)

## Google Play - Data safety

- **Does your app collect or share any of the required user data types?** Yes.
- **Is all of the user data collected by your app encrypted in transit?** Yes.
- **Do you provide a way for users to request that their data is deleted?** Yes - in the app (personal area) and at
  `https://<the live shop>/delete-account`.

| Data type | Collected | Shared | Optional | Purposes |
|---|---|---|---|---|
| Personal info → Name | Yes | No | No (needed to book) | App functionality, Account management |
| Personal info → Phone number | Yes | No | No (it is the sign-in) | App functionality, Account management |
| App activity → Other user-generated content (reviews) | Yes | No | Yes | App functionality |
| Device or other IDs (push token) | Yes | No | Yes (only if notifications are allowed) | App functionality |

"Shared" is no: the SMS provider and Firebase process the number, the code and the token on the shop's behalf, which
Google does not count as sharing.

- **Ads:** the app contains no ads.
- **Target audience:** 18 and over is the safe answer - the app is not designed for children.
- **Government app / financial features / health:** no.
