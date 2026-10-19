# The store listing - App Store and Google Play

Hebrew is the listing's language; the app is Hebrew only. Lengths are the stores' limits, checked.
The shop's real details (support e-mail, live address) go where `<...>` stands.

## Both stores

| Field | Text |
|---|---|
| Name | TomGoldin Hair Design |
| Support URL | `https://<the live shop>/` |
| Privacy policy URL | `https://<the live shop>/privacy` |
| Account deletion URL (Google) | `https://<the live shop>/delete-account` |
| Category | Apple: Lifestyle · Google: Beauty |
| Age rating | Apple: 4+ · Google: Everyone (no violence, no user-to-user chat, no purchases) |
| Contact e-mail | `<the shop's e-mail>` |

## App Store

**Subtitle** (30): קביעת תורים במספרה בנס ציונה

**Promotional text** (170, can change without a new build):
קובעים תור אצל הספר שלכם בכמה לחיצות, מוסיפים ילד או חבר מיד אחריכם, והופכים את התור לקבוע - כל שבועיים, שלושה או ארבעה.

**Keywords** (100, comma, no spaces):
מספרה,תספורת,תור,ספר,זקן,גילוח,ברבר,נס ציונה,תספורת גבר,barber,haircut

**Description** (4000):

TomGoldin Hair Design - המספרה בשביט 8, נס ציונה, מאז 1991. עכשיו קובעים תור באפליקציה.

• בוחרים ספר ושירות, ורואים מיד את הימים והשעות הפנויים - עם המחיר ומשך התור.
• תור גם לילד או לחבר: מוסיפים אדם נוסף מיד אחרי התור שלכם, אצל אותו ספר, בתור אחד.
• תור קבוע: כל שבועיים, שלושה או ארבעה שבועות - התור הבא נקבע לבד אחרי כל ביקור.
• כל התורים במקום אחד: הזזה וביטול בלחיצה, ותזכורת לפני התור.
• מוצרים: שומרים מוצר מהמדף לתור הקרוב, והוא מחכה לכם במספרה.
• קורסים: קורסי ברברינג וסדנאות, עם כל הפרטים.
• כניסה עם מספר הטלפון וקוד ב־SMS - בלי סיסמה.

האפליקציה בעברית, נגישה לקוראי מסך, ולא אוספת דבר מעבר למה שצריך כדי לקבוע את התור. אפשר למחוק את החשבון בכל רגע, באפליקציה עצמה.

**Review notes** (for Apple's reviewers):
The app books appointments at one barbershop. Sign in with name "App Review", mobile `<REVIEW_PHONE>` and code
`<REVIEW_CODE>` - no SMS is sent to this number. The booking tab: pick a barber, a service, a day and a time, then
"קביעת התור". After booking, "🔁 להפוך לתור קבוע" makes it a standing booking. Deleting the account: the "איזור אישי"
tab → "מחיקת החשבון". Notifications are sent only about the reviewer's own bookings.

## Google Play

**Short description** (80): קובעים תור במספרה בכמה לחיצות - גם לילד או לחבר, וגם תור קבוע.

**Full description** (4000): the App Store description above, as is.

**Graphics** (in this folder):
- `play-icon-512.png` - the 512×512 icon
- `play-feature-1024x500.png` - the feature graphic
- `screenshots/android-*.png` - 1080×2160, seven of them (two to eight are allowed)

**Testing track:** a new personal developer account must run a closed test with at least 12 testers for 14 days
before it can publish. Their Google accounts go in Play Console → Testing → Closed testing.

## App Store screenshots

`screenshots/iphone-6.9-*.png` - 1290×2796, the 6.9" display size; Apple scales them down for smaller iPhones.
iPhone only (`TARGETED_DEVICE_FAMILY = 1`), so no iPad screenshots are needed. Order:

1. The shop and its barbers
2. The services, each with its minutes and price
3. The day and the time, and the offer of a second person
4. Booked - and the offer to make it a standing booking
5. My bookings, one of them standing
6. Courses
7. Products kept for a booking
