// import { FinalPrice } from "components/display/final-price";
// import { DisplayPrice } from "components/display/price";
// import { ProductPicker } from "components/product/picker";
// import { Section } from "components/section";
// import { ProductSlideSkeleton } from "components/skeletons";
// import React, { Suspense } from "react";
// import { FC } from "react";
// import { useRecoilValue } from "recoil";
// import { recommendProductsState } from "state";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Box, Text } from "zmp-ui";

// export const RecommendContent: FC = () => {
//   const recommendProducts = useRecoilValue(recommendProductsState);

//   return (
//     <Box className="bg-white p-4">
//       <Text size="large" className="font-medium text-primary">
//         Tin tức
//       </Text>
//       <Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
//         {recommendProducts.map((product) => (
//           <SwiperSlide key={product.id}>
//             <ProductPicker product={product}>
//               {({ open }) => (
//                 <div onClick={open} className="space-y-3">
//                   <Box
//                     className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
//                     style={{ backgroundImage: `url(${product.image})` }}
//                   >
//                     {product.sale && (
//                       <Text
//                         size="xxxxSmall"
//                         className="absolute right-2 top-2 uppercase bg-green text-white h-4 px-[6px] rounded-full"
//                       >
//                         Giảm{" "}
//                         {product.sale.type === "percent" ? (
//                           `${product.sale.percent * 100}%`
//                         ) : (
//                           <DisplayPrice>{product.sale.amount}</DisplayPrice>
//                         )}
//                       </Text>
//                     )}
//                   </Box>
//                   <Box className="space-y-1">
//                     <Text size="small">{product.name}</Text>
//                     <Text size="xxSmall" className="line-through text-gray">
//                       <DisplayPrice>{product.price}</DisplayPrice>
//                     </Text>
//                     <Text size="large" className="font-medium text-primary">
//                       <FinalPrice>{product}</FinalPrice>
//                     </Text>
//                   </Box>
//                 </div>
//               )}
//             </ProductPicker>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export const RecommendFallback: FC = () => {
//   const recommendProducts = [...new Array(3)];

//   return (
//     <Section title="Gợi ý cho bạn" padding="title-only">
//       <Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
//         {recommendProducts.map((_, i) => (
//           <SwiperSlide key={i}>
//             <ProductSlideSkeleton />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Section>
//   );
// };

// export const Recommend: FC = () => {
//   return (
//     <Suspense fallback={<RecommendFallback />}>
//       <RecommendContent />
//     </Suspense>
//   );
// };

// // Hiển thị ảnh từ file JSON trên GITHUB
// import React, { FC, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Box, Text } from "zmp-ui";

// const ScraperData = () => {
//   // State để lưu trữ dữ liệu từ scraperData.json
//   const [scraperData, setScraperData] = useState<
//     { imageUrl: string; title: string }[]
//   >([]);

//   // Sử dụng useEffect để đọc dữ liệu từ scraperData.json khi component được mount
//   useEffect(() => {
//     // Sử dụng fetch để đọc tệp scraperData.json
//     fetch(
//       "https://raw.githubusercontent.com/lai-chau-so/laichauso/master/src/pages/index/scraperData.json#L2"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // Lưu trữ dữ liệu vào state scraperData
//         setScraperData(data);
//       })
//       .catch((error) => {
//         console.error("Lỗi khi đọc tệp scraperData.json", error);
//       });
//   }, []);

//   return (
//     <Box className="bg-white p-4">
//       <Text size="large" className="font-medium text-primary">
//         Tin tức
//       </Text>
//       <Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
//         {scraperData.map((data, index) => (
//           <SwiperSlide key={index}>
//             <div className="space-y-3">
//               <Box
//                 className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
//                 style={{ backgroundImage: `url(${data.imageUrl})` }}
//               >
//                 {/* Không có dữ liệu sale ở đây */}
//               </Box>
//               <Box className="space-y-1">
//                 <Text size="small">{data.title}</Text>
//                 {/* Không có dữ liệu giá ở đây */}
//               </Box>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export const RecommendContent: FC = () => {
//   return <ScraperData />;
// };
import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text } from "zmp-ui";

const ScraperData = () => {
  // State để lưu trữ dữ liệu từ scraperData.json
  const [scraperData, setScraperData] = useState<
    { imageUrl: string; title: string }[]
  >([]);

  // Sử dụng useEffect để đọc dữ liệu từ scraperData.json khi component được mount
  useEffect(() => {
    // Sử dụng fetch để đọc tệp scraperData.json
    fetch(
      "https://raw.githubusercontent.com/lai-chau-so/laichauso/master/src/pages/index/scraperData.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Lưu trữ dữ liệu vào state scraperData
        setScraperData(data);
      })
      .catch((error) => {
        console.error("Lỗi khi đọc tệp scraperData.json", error);
      });
  }, []);

  // Hàm kiểm tra định dạng hình ảnh
  const isImageFormatValid = (imageUrl) => {
    return imageUrl.match(/\.(jpeg|jpg|png|gif)$/);
  };

  return (
    <Box className="bg-white p-4">
      <Text size="large" className="font-medium text-primary">
        Tin tức
      </Text>
      <Swiper slidesPerView={1.25} spaceBetween={16} className="px-4">
        {scraperData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-3">
              <Box
                className="relative aspect-video rounded-lg bg-cover bg-center bg-skeleton"
                style={{
                  backgroundImage: `url(${data.imageUrl})`,
                  // Kiểm tra và cài đặt kiểu hiển thị hình ảnh
                  backgroundSize: isImageFormatValid(data.imageUrl)
                    ? "cover"
                    : "contain",
                }}
              >
                {/* Không có dữ liệu sale ở đây */}
              </Box>
              <Box className="space-y-1">
                <Text size="small">{data.title}</Text>
                {/* Không có dữ liệu giá ở đây */}
              </Box>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export const RecommendContent: FC = () => {
  return <ScraperData />;
};
