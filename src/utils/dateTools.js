const tranformDateTime = date => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? '0'+minutes : minutes

  return `${hours}:${minutes}: ${ampm}`
}

export const formatDate = dateString => {
  const date = new Date(dateString)
  const newDate = date.toLocaleDateString(
    'en-gb',
    {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'utc'
    })
  const newTime = tranformDateTime(date)

  return `${newDate} ${newTime}`
}