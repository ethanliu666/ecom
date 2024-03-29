import React from "react";
import Head from "next/head";
import { client } from "@/lib/client";
import {
  FeaturedProducts,
  Footer,
  Hero,
  ImageSection,
  Info,
  Layout,
  Navbar,
  StatsSection,
} from "../components";

const Home = ({ products }) => {
  const copyWrite =
    "Upgrading your photo game has never been easier. With over 40+ Lightroom mobile (XMP files) and Lightroom desktop presets (DNG files) in our Master Collection, each designed to enhance your creative workflow, you can be sure that there will be a preset to make every photo look spectacular.";

  return (
    <>
      <Head>
        <title>PnutPresets</title>
        <meta name="description" content="Empowering Creativity" />
        <meta property="og:title" content="PnutPresets" />
        <meta property="og:description" content="Empowering Creativity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Navbar />
        <Hero />
        <FeaturedProducts products={products} />
        <StatsSection text={copyWrite} showIncludes={false} />
        <Info />
        <ImageSection />
      </Layout>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]'; // get all products
  const products = await client.fetch(query);

  return {
    props: { products },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default Home;
