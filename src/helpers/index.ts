export const capitalizeEveryWord = (str: string) => {

  const capitalize = (matchString: string) => {
    return matchString.slice(0, 1).toUpperCase() + matchString.slice(1)
  }

  return str.replace(/\w+/g, capitalize)
}
