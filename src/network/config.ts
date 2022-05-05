let baseUrl = 'http://127.0.0.1:7012';
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://127.0.0.1:7012';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'http://127.0.0.1:7012';
} else {
  baseUrl = 'http://127.0.0.1:7012';
}
export default baseUrl;
