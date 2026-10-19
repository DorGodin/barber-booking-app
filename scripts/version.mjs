// Sets the version the stores show and the build number they count, on both phones at once:
//   npm run set-version -- 1.0.0 3    version 1.0.0, build 3
// Each upload to a store needs a build number higher than the last; the version is what people see.
import { readFileSync, writeFileSync } from "node:fs";

const [version, build] = process.argv.slice(2);
if (!/^\d+\.\d+(\.\d+)?$/.test(version || "") || !/^\d+$/.test(build || "")) {
  console.error("usage: npm run set-version -- <version, e.g. 1.0.0> <build number, e.g. 3>");
  process.exit(1);
}

function replace(path, pairs) {
  let text = readFileSync(path, "utf8");
  for (const [pattern, value] of pairs) {
    if (!pattern.test(text)) throw new Error(`${path}: ${pattern} not found`);
    text = text.replace(pattern, value);
  }
  writeFileSync(path, text);
}

replace("ios/App/App.xcodeproj/project.pbxproj", [
  [/MARKETING_VERSION = [^;]+;/g, `MARKETING_VERSION = ${version};`],
  [/CURRENT_PROJECT_VERSION = [^;]+;/g, `CURRENT_PROJECT_VERSION = ${build};`],
]);
replace("android/app/build.gradle", [
  [/versionCode \d+/, `versionCode ${build}`],
  [/versionName "[^"]+"/, `versionName "${version}"`],
]);
console.log(`version ${version}, build ${build} - on the iPhone and on Android`);
