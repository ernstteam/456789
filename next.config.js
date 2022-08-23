/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    redirects: async () => [
        {
            source: "/publicbeta",
            destination: "/",
            permanent: false,
        },
        {
            source: "/beta",
            destination: "/",
            permanent: false,
        },
        {
            // Temporary
            source: "/about",
            destination:
                "https://raaees.com",
            permanent: false,
        },
    ],
};

module.exports = nextConfig;
