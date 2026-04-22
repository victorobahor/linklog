export const generateString = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyz1234567890";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
};

export const generateUniqueId = (checkFunction) => {
  const id = generateString(5);
  if (checkFunction(id)) {
    return generateUniqueId(checkFunction);
  }
  return id;
};

export const validateUrl = (url) => {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (err) {
    return false;
  }
};

export const tryAsync = async (fn) => {
  try {
    return await fn();
  } catch {
    return null;
  }
};
