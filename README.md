# 🌐 google-translate-ts

A simple **TypeScript** wrapper for **Google Translate API** (unofficial) using `fetch` and **strong typings**. ⚡

---

## ✨ Features

✅ Fully typed in **TypeScript**
✅ No API key required – uses Google Translate public API
✅ Supports **100+ languages**
✅ Lightweight and easy to use

---

## 📦 Installation

```bash
npm install google-translate-ts
# or
yarn add google-translate-ts
# or
pnpm add google-translate-ts
```

---

## 🚀 Quick Example

```ts
import { translate } from "google-translate-ts";

(async () => {
  const result = await translate({
    text: "Ciao mondo",
    targetLang: "en",
  });

  console.log(result.translatedText); // "Hello world"
})();
```

---

## ✅ API

### **`translate(options: TranslateOptions): Promise<TranslationResponse>`**

#### **TranslateOptions**

```ts
interface TranslateOptions {
  text: string; // Text to translate
  sourceLang?: LanguageCode; // Source language (default: "auto")
  targetLang: Exclude<LanguageCode, "auto">; // Target language
}
```

#### **TranslationResponse**

```ts
interface TranslationResponse {
  translatedText: string; // Translated text
  detectedSourceLang?: string; // Detected source language
  raw: any; // Raw response from Google API
}
```

---

## 🌍 Supported Languages

```ts
type LanguageCode =
  | "auto"
  | "af"
  | "sq"
  | "am"
  | "ar"
  | "hy"
  | "az"
  | "eu"
  | "be"
  | "bn"
  | "bs"
  | "bg"
  | "ca"
  | "ceb"
  | "ny"
  | "zh"
  | "zh-CN"
  | "zh-TW"
  | "co"
  | "hr"
  | "cs"
  | "da"
  | "nl"
  | "en"
  | "eo"
  | "et"
  | "tl"
  | "fi"
  | "fr"
  | "fy"
  | "gl"
  | "ka"
  | "de"
  | "el"
  | "gu"
  | "ht"
  | "ha"
  | "haw"
  | "he"
  | "hi"
  | "hmn"
  | "hu"
  | "is"
  | "ig"
  | "id"
  | "ga"
  | "it"
  | "ja"
  | "jw"
  | "kn"
  | "kk"
  | "km"
  | "ko"
  | "ku"
  | "ky"
  | "lo"
  | "la"
  | "lv"
  | "lt"
  | "lb"
  | "mk"
  | "mg"
  | "ms"
  | "ml"
  | "mt"
  | "mi"
  | "mr"
  | "mn"
  | "my"
  | "ne"
  | "no"
  | "or"
  | "ps"
  | "fa"
  | "pl"
  | "pt"
  | "pa"
  | "ro"
  | "ru"
  | "sm"
  | "gd"
  | "sr"
  | "st"
  | "sn"
  | "sd"
  | "si"
  | "sk"
  | "sl"
  | "so"
  | "es"
  | "su"
  | "sw"
  | "sv"
  | "tg"
  | "ta"
  | "tt"
  | "te"
  | "th"
  | "tr"
  | "tk"
  | "uk"
  | "ur"
  | "ug"
  | "uz"
  | "vi"
  | "cy"
  | "xh"
  | "yi"
  | "yo"
  | "zu";
```

---

## ⚡ Example with Dynamic Language Codes

```ts
import { translate, LanguageCode } from "google-translate-ts";

const text = "Bonjour";
const targetLang: LanguageCode = "en";

translate({ text, targetLang }).then((res) => {
  console.log(res.translatedText); // "Hello"
});
```

---

## 📜 License

MIT © rit3zh
