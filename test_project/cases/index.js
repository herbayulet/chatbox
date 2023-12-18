const { remote } = require("webdriverio");
const config = require("config");
const path = require("path");

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || "localhost",
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: "info",
  capabilities,
};

(async () => {
  // Menggunakan path relatif ke wdio.conf.js
  const configPath = path.join(__dirname, "..", "wdio.conf.js"); // sesuaikan dengan struktur direktori Anda
  const config = require(configPath).config;

  // Membuat instance WebDriverIO dengan konfigurasi dari wdio.conf.js
  const driver = await remote(config);

  // Sekarang Anda dapat menggunakan driver.element, driver.click, dan fungsi WebDriverIO lainnya di sini

  let el1 = await driver.$(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText[1]"
  );
  await el1.setValue("Hallooo");

  let el2 = await driver.$(
    "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.EditText[2]"
  );
  await el2.setValue("81383931804");

  let el3 = await driver.$("~Kirim");
  await el3.click();

  // Setelah selesai, jangan lupa untuk menutup koneksi driver
  await driver.deleteSession();
})();
