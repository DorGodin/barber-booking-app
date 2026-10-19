# צ'קליסט לפני שליחה לחנויות

הטקסטים נמצאים ב־`listing.md`, תשובות הפרטיות ב־`privacy-forms.md` והתמונות בתיקייה הזו.
המספר והקוד של הבודקים לא נשמרים כאן, כי המאגר ציבורי. הם נמצאים ב־`.env` של השרת, בשדות `REVIEW_PHONE` ו־`REVIEW_CODE`.

## לפני הכול

- [ ] דומיין נקנה, ובקובץ `listing.md` הוחלף `<the live shop>` בכתובת האמיתית
- [ ] השרת האמיתי באוויר בכתובת הדומיין, עם https
- [ ] ספק SMS מחובר, וקוד מגיע לטלפון אמיתי
- [ ] בשרת הוגדרו `REVIEW_PHONE` ו־`REVIEW_CODE`, והכניסה עם המספר והקוד האלה עובדת
- [ ] הכתובות `/privacy`, `/accessibility` ו־`/delete-account` נפתחות בדומיין
- [ ] Firebase מוגדר, וקבצי התצורה נמצאים באפליקציה (ראו סעיף Firebase בהמשך)
- [ ] מספר הגרסה נקבע: `npm run set-version -- 1.0.0 1`

## אפל: App Store Connect

### החשבון
- [ ] נפתח חשבון Apple Developer Program (‏99$ לשנה), אישי או עסקי
- [ ] נוצר ה־App ID ‏`il.co.tomgoldin.booking` עם Push Notifications
- [ ] נוצר מפתח APNs (קובץ ‎.p8), ונרשמו ה־Key ID וה־Team ID
- [ ] נוצרה אפליקציה ב־App Store Connect בשפה עברית, עם SKU לבחירתך

### דף האפליקציה
| | שדה | מה לשים | מאיפה |
|---|---|---|---|
| [ ] | שם | TomGoldin Hair Design | `listing.md` |
| [ ] | כותרת משנה | קביעת תורים במספרה בנס ציונה | `listing.md` |
| [ ] | טקסט קידום | מוכן | `listing.md` |
| [ ] | מילות מפתח | מוכנות | `listing.md` |
| [ ] | תיאור | מוכן | `listing.md` |
| [ ] | קטגוריה | Lifestyle | `listing.md` |
| [ ] | דירוג גיל | ‎4+‎, עונים "לא" על כל השאלון | `listing.md` |
| [ ] | Support URL | `https://<הדומיין>/` | הדומיין |
| [ ] | Privacy Policy URL | `https://<הדומיין>/privacy` | הדומיין |
| [ ] | מייל ליצירת קשר | GoldinSupport@gmail.com | `listing.md` |
| [ ] | App Privacy | שם, טלפון, ביקורות, מזהה מכשיר; הכול לא למעקב | `privacy-forms.md` |
| [ ] | צילומי מסך | 7 תמונות בגודל 6.9 אינץ׳, לפי הסדר | `screenshots/iphone-6.9-*` |
| [ ] | מחיר | חינם | — |
| [ ] | הערות לבודקים | הטקסט מוכן, ומוסיפים את המספר והקוד | `listing.md` + `.env` |

### בנייה ושליחה
- [ ] ב־Xcode, תחת Signing & Capabilities, נבחר הצוות
- [ ] ב־`App.entitlements` הערך `aps-environment` הוא `production`
- [ ] בוצע Product, ואז Archive, ואז Upload
- [ ] הבנייה נבדקה ב־TestFlight: כניסה, קביעת תור, התראה, מחיקת חשבון
- [ ] הבנייה נבחרה בגרסה, והאפליקציה נשלחה לבדיקה (Submit for Review)

## גוגל: Play Console

### החשבון
- [ ] נפתח חשבון Play Console (‏25$ חד־פעמי) והושלם אימות הזהות
- [ ] נוצרה אפליקציה: שפה עברית, אפליקציה ולא משחק, חינמית
- [ ] נוצר מפתח העלאה לפי ה־README, ונשמר גיבוי שלו ושל הסיסמה במקום בטוח
- [ ] Play App Signing פעיל

### דף האפליקציה
| | שדה | מה לשים | מאיפה |
|---|---|---|---|
| [ ] | שם | TomGoldin Hair Design | `listing.md` |
| [ ] | תיאור קצר | מוכן | `listing.md` |
| [ ] | תיאור מלא | התיאור של אפל, כמו שהוא | `listing.md` |
| [ ] | אייקון 512×512 | `play-icon-512.png` | התיקייה הזו |
| [ ] | תמונה ראשית 1024×500 | `play-feature-1024x500.png` | התיקייה הזו |
| [ ] | צילומי מסך | 7 תמונות | `screenshots/android-*` |
| [ ] | קטגוריה | Beauty | `listing.md` |
| [ ] | מייל ליצירת קשר | GoldinSupport@gmail.com | `listing.md` |
| [ ] | Privacy Policy URL | `https://<הדומיין>/privacy` | הדומיין |

### תוכן האפליקציה (App content)
- [ ] Data safety, לפי `privacy-forms.md`
- [ ] דירוג תוכן: Everyone
- [ ] קהל יעד: ‎18+‎
- [ ] מודעות: אין
- [ ] App access: מספר הבודקים והקוד, מתוך `.env`
- [ ] מחיקת חשבון: `https://<הדומיין>/delete-account`
- [ ] אפליקציה ממשלתית, פיננסית או בריאותית: לא

### בדיקה סגורה ופרסום
- [ ] נאספו 12 כתובות Gmail לפחות של בודקים
- [ ] נבנה קובץ AAB: `./gradlew bundleRelease`
- [ ] הקובץ הועלה ל־Closed testing, והבודקים צורפו
- [ ] הבודקים התקינו, ועברו 14 יום ברצף
- [ ] נשלחה בקשת גישה ל־Production, והאפליקציה נשלחה לבדיקה

## Firebase

- [ ] נוצר פרויקט ב־console.firebase.google.com (בלי Analytics)
- [ ] נוספה אפליקציית Android ‏`il.co.tomgoldin.booking`, והורד הקובץ `google-services.json`
- [ ] נוספה אפליקציית iOS ‏`il.co.tomgoldin.booking`, והורד הקובץ `GoogleService-Info.plist`
- [ ] מפתח ה־APNs ‏(‎.p8) הועלה ל־Cloud Messaging, עם ה־Key ID וה־Team ID
- [ ] נוצר מפתח שרת ב־Service accounts, דרך Generate new private key
- [ ] הקבצים נכנסו לאפליקציה בלי להיכנס ל־git
- [ ] בשרת הוגדרו `FCM_CREDENTIALS` ו־`FCM_PROJECT_ID` ב־`.env`
- [ ] התראה הגיעה לאייפון ולאנדרואיד אמיתיים
