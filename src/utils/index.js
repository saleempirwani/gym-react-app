export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnk4bkzuUzVLzA", //process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url = "", options = {}) => {
  const resp = await fetch(url, options);
  return await resp.json();
};
