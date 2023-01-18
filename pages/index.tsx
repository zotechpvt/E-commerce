import { Box } from "@mui/material";
import Head from "next/head";
import Promotions from "../src/components/promotions/promotions";
import Banner from "../src/components/banner/banner";
import WomanBanner from "../src/components/womenBanner/womenBanner";
import DealOfWeek from "../src/components/dealOf Week/dealOf Week";
import MenBanner from "../src/components/menBanner/menBanner";
import InstagramPhoto from "../src/components/instagramPhoto/instagramPhoto";
import Blog from "../src/components/blog/blog";
import BenefitItems from "../src/components/benefitItems/benefitItems";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../src/redux/products/productReducer";
import { itemData } from "../src/components/womenBanner/womenBannerData";
import { itemDatas } from "../src/components/menBanner/menBannerData";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProducts([...itemData, ...itemDatas]));
  }, []);
  return (
    <div>
      <Head>
        <title>E-Commerce</title>
      </Head>
      <main style={{ backgroundColor: "white" }}>
        <Promotions />
        <Banner />
        <WomanBanner />
        <DealOfWeek />
        <MenBanner />
        <InstagramPhoto />
        <Blog />
        <BenefitItems />
      </main>
    </div>
  );
}
