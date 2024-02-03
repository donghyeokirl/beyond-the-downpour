const set = (key, value, ttl = 99999999999999) => {
  const now = new Date();
  const expiry = now.getTime() + ttl * 1000;

  const item = { value, expiry };
  localStorage.setItem(key, JSON.stringify(item));
  return expiry;
};

const get = (key, withExpiry = false) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  if (withExpiry) {
    return item;
  }
  return item.value;
};

const _localStorage = { get, set };
export default _localStorage;
