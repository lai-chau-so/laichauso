import React, { Suspense } from "react";
import { Box, Page } from "zmp-ui";
// import { Inquiry } from "./inquiry";
import { Welcome } from "./welcome";
import { Banner } from "./banner";
import { Categories } from "./categories";
import { RecommendContent } from "./recommend";
// import { ProductList } from "./product-list";
import { Divider } from "components/divider";
import WeatherByCoordinates from "./WeatherByCoordinates";
import htmlContent from "./ScrapedDataList";
const HomePage: React.FunctionComponent = () => {
  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box className="flex-1 overflow-auto">
        {/* <Inquiry /> */}
        <Banner />
        <WeatherByCoordinates />
        <Suspense>
          <Categories />
        </Suspense>
        <Divider />
        <RecommendContent />
        <Divider />
        {/* <ProductList /> */}
        <Divider />
        {/* <SqlContent /> */}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Box>
    </Page>
  );
};

export default HomePage;
