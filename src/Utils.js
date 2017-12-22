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

export const getPostImageURL = (post) => {
  const fallbackURL = ''

  if (!post && !post.images) {
    return fallbackURL
  }

  const matches = _.filter(post.images, { ratio: '4:3' })

  if (matches.length > 0) {
    return matches[0].url
  }

  return fallbackURL
}
