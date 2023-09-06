export const formatKey = (key) => {
  const formattedKey = {
    _id: "Id",
    name: "Name",
    email: "Email",
  };

  return formattedKey[key] ? formattedKey[key] : key;
};
