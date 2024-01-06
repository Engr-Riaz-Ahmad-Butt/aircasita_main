import Default from '../layout/Default';

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function MyApp({ Component, pageProps }) {
	// Use the layout defined at the page level, if available
	const Layout = Component.Layout || Default;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
