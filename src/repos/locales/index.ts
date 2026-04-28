// #region Helpers
import en from "./en.ts"
import tr from "./tr.ts"

export const kDictionaries = { en, tr } as const
export type Dictionary = typeof en
export type Locale = keyof typeof kDictionaries
export const kDefaultLocale: Locale = "en"
export const kLocales: Locale[] = Object.keys(kDictionaries) as Locale[]

function _isLocale(val: unknown): val is Locale {
  return typeof val === "string" && val in kLocales
}
// #endregion

export function getLocaleName(loc: Locale): string {
  switch (loc) {
    case "en":
      return "English"
    case "tr":
      return "Türkçe"
  }
}

export function getLocaleFlag(loc: Locale): string {
  switch (loc) {
    case "en":
      return "🇺🇸"
    case "tr":
      return "🇹🇷"
  }
}

export function getDictionaryOf(loc: Locale): Dictionary {
  return kDictionaries[loc] || kDictionaries[kDefaultLocale]
}

export function getUserLocale(): Locale {
  // i.e., "en-US" -> "en", "tr-TR" -> "tr"
  const localeCode = navigator.language.split("-")[0]
  const resolvedLocale = _isLocale(localeCode) ? localeCode : kDefaultLocale

  return resolvedLocale
}

export function redirectToLanguage(locale: Locale, subPath?: string) {
  const { pathname } = window.location

  let target: string
  if (subPath !== undefined) {
    target = "/" + subPath.replace(/^\/+/, "")
  } else if (pathname.startsWith(`/${locale}/`)) {
    target = pathname.substring(locale.length + 1)
  } else if (pathname === `/${locale}`) {
    target = ""
  } else {
    target = pathname
  }

  //const redirectUrl = `${locale}${target}`
  if (!window.location.pathname.startsWith(locale)) {
    window.location.replace(target)
  }
}
