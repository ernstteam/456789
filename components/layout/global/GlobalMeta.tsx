import Head from "next/head";

const GlobalMeta = () => {
    return (
        <Head>
            <title>Raaees - Find Your Community</title>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=0.9, user-scalable=0"
            />
            <meta property="og:title" content="Raaees" />
            <meta property="og:url" content="https://raaees.com" />
            <meta
                property="og:image"
                content="https://i.ibb.co/zNvt9LV/opengraph.png"
            />
            <meta
                property="og:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
            />
            <meta property="twitter:title" content="Raaees" />
            <meta property="twitter:site" content="@raaees_com" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
                property="twitter:image"
                content="https://i.ibb.co/zNvt9LV/opengraph.png"
            />
            <meta
                property="twitter:image:alt"
                content="Raaees. Find your community, connect with the world. Illustration of the Raaees app."
            />
            <meta
                property="twitter:description"
                content="Find your community, connect with the world. The chat platform that puts you first."
            />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1280" />
            <meta property="og:image:height" content="720" />
        </Head>
    );
};

export default GlobalMeta;
