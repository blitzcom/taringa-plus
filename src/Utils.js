import _ from 'lodash'
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"

const spanishStrings = {
  prefixAgo: "hace",
  prefixFromNow: "dentro de",
  suffixAgo: "",
  suffixFromNow: "justo ahora",
  seconds: "%d segundos",
  minute: "1 minuto",
  minutes: "%d minutos",
  hour: "1 hora",
  hours: "%d horas",
  day: "1 día",
  days: "%d días",
  month: "1 mes",
  months: "%d meses",
  year: "1 año",
  years: "%d años"
}

export const esFormatter = buildFormatter(spanishStrings)

export const getPostImageURL = (post, ratio = '4:3') => {
  const fallbackURL = ''

  if (!post && !post.images) {
    return fallbackURL
  }

  const matches = _.filter(post.images, { ratio })

  if (matches.length > 0) {
    return matches[0].url
  }

  return fallbackURL
}

export const addClass = (selector, klass) => {
  const elements = document.querySelectorAll(selector)

  _.each(elements, e => e.classList.add(klass))
}

export const removeClass = (selector, klass) => {
  const elements = document.querySelectorAll(selector)

  _.each(elements, e => e.classList.remove(klass))
}

export const canonicalURLToRaw = (canonical) => {
  return canonical.replace('https://www.taringa.net/', '/raw/')
}

export const humanizeNum = (number, decimals = 1) => {
  decimals = Math.pow(10, decimals)

  const abbreviations = ['k', 'm', 'b', 't']

  for(let i = abbreviations.length - 1; i >= 0; i--) {
    const size  = Math.pow(10, (i + 1) * 3)

    if (size <= number) {
      number = Math.round(number * decimals / size) / decimals

      if ((number === 1000) && (i < abbreviations.length - 1)) {
        number = 1;
        i++
      }

      number += abbreviations[i]

      break
    }
  }

  return number.toString()
}
