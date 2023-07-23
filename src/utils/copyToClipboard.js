export const copyToClipboard = (text, success, error) => {
  navigator.clipboard
    .writeText(text)
    .then(() => success())
    .catch((err) => error(err))
}
