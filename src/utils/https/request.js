import axios from "axios";

export const baseDomain = "http://localhost:8000/api/";

export async function apiPost(url, payload, header) {
  url = baseDomain + url;
  const { data } = await axios.post(url, payload, {
    headers: header,
  });
  return data;
}

export async function apiPut(url, payload, header) {
  url = baseDomain + url;
  const { data } = await axios.put(url, payload, {
    headers: header,
  });
  return data;
}

export async function apiGet(url, header) {
  url = baseDomain + url;
  const { data } = await axios.get(url, {
    headers: header,
  });
  return data;
}
