export function extractPersonId(url: string) {
  const BASE_LENGTH_TO_ID_NUMBER = 29;
  const id = url.slice(BASE_LENGTH_TO_ID_NUMBER, url.length - 1);
  return Number(id);
}
