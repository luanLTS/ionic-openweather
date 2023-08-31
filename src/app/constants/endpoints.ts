export const API_BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const API_ICON_URL = `https://openweathermap.org/img/wn`;

export const getApiIconUrl = (cod: string) => {
  return `${API_ICON_URL}/${cod}@2x.png`;
};
