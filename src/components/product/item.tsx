import React, { FC } from "react";
import { Product } from "types/product";
import { Box, Text } from "zmp-ui";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
  const handleProductClick = () => {
    redirectToURL(product.id);
  };

  const redirectToURL = (productId: number) => {
    const productUrls = {
      1: "https://dichvucong.laichau.gov.vn/dich-vu-cong/cong-dan/dang-nhap?return-url=%2Fdichvucong%2Ftiepnhanonline",
      2: "https://dichvucong.laichau.gov.vn/dichvucong/tracuu",
      3: "https://dichvucong.gov.vn/p/phananhkiennghi/pakn-gui-pakn.html",
      // Thêm các URL tương ứng với các ID sản phẩm khác
    };

    const productUrl = productUrls[productId];
    if (productUrl) {
      window.location.href = productUrl;
    }
  };

  return (
    <div className="space-y-2">
      <div onClick={handleProductClick} style={{ cursor: "pointer" }}>
        <Box className="w-full aspect-square relative">
          <img
            loading="lazy"
            src={product.image}
            className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
          />
        </Box>
        <Text className="text-center">{product.name}</Text>{" "}
        {/* Sử dụng lớp text-center để căn giữa */}
      </div>
    </div>
  );
};
