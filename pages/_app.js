// pages/_app.js
import '../app/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
