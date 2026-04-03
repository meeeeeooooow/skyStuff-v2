export const cleanText = (text: string) => {
  return text.replace(/§[0-9a-fk-or]/gi, "");
};