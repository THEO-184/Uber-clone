/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**i.ibb.co",
				pathname: "**",
				port: "",
			},
			{
				protocol: "https",
				hostname: "**img.icons8.com",
				pathname: "**",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
