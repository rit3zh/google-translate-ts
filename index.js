"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = translate;
async function translate(options) {
    if (!options)
        throw new Error("❌ [Options] is required!");
    if (!options.text)
        throw new Error("❌ [Text] is required!");
    if (!options.targetLang)
        throw new Error("❌ [Target language] is required!");
    const { text, sourceLang = "auto", targetLang } = options;
    const params = new URLSearchParams({
        client: "gtx",
        sl: sourceLang,
        tl: targetLang,
        dt: "t",
        q: text,
    });
    const API_URL = `https://translate.googleapis.com/translate_a/single?${params.toString()}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    const translatedText = data[0]?.map((item) => item[0]).join("") || "";
    return {
        translatedText,
        detectedSourceLang: data[2] || sourceLang,
        raw: data,
    };
}
