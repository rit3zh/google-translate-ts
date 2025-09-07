type LanguageCode = "auto" | "af" | "sq" | "am" | "ar" | "hy" | "az" | "eu" | "be" | "bn" | "bs" | "bg" | "ca" | "ceb" | "ny" | "zh" | "zh-CN" | "zh-TW" | "co" | "hr" | "cs" | "da" | "nl" | "en" | "eo" | "et" | "tl" | "fi" | "fr" | "fy" | "gl" | "ka" | "de" | "el" | "gu" | "ht" | "ha" | "haw" | "he" | "hi" | "hmn" | "hu" | "is" | "ig" | "id" | "ga" | "it" | "ja" | "jw" | "kn" | "kk" | "km" | "ko" | "ku" | "ky" | "lo" | "la" | "lv" | "lt" | "lb" | "mk" | "mg" | "ms" | "ml" | "mt" | "mi" | "mr" | "mn" | "my" | "ne" | "no" | "or" | "ps" | "fa" | "pl" | "pt" | "pa" | "ro" | "ru" | "sm" | "gd" | "sr" | "st" | "sn" | "sd" | "si" | "sk" | "sl" | "so" | "es" | "su" | "sw" | "sv" | "tg" | "ta" | "tt" | "te" | "th" | "tr" | "tk" | "uk" | "ur" | "ug" | "uz" | "vi" | "cy" | "xh" | "yi" | "yo" | "zu";
interface TranslateOptions {
    text: string;
    sourceLang?: LanguageCode;
    targetLang: Exclude<LanguageCode, "auto">;
}
interface TranslationResponse {
    translatedText: string;
    detectedSourceLang?: string;
    raw: any;
}
declare function translate<T extends TranslateOptions>(options: T): Promise<TranslationResponse>;
export { translate, TranslationResponse, LanguageCode };
