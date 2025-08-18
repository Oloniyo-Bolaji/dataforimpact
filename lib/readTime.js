import { toPlainText } from '@portabletext/react'

export default function getReadingTime(content) {
  const text = toPlainText(content)
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}
