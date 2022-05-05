function setItem(name: string, data: any) {
  window.localStorage.setItem(name, JSON.stringify(data));
}
function getItem(name: string) {
  const data = window.localStorage.getItem(name);
  return JSON.parse(data!);
}
function clearItem() {
  window.localStorage.clear();
}
function removeItem(name: string) {
  window.localStorage.removeItem(name);
}
export { setItem, getItem, clearItem, removeItem };
