import React, { FC, useState, useEffect } from "react";
import { getDummyImage } from "utils/product";
import { Box } from "zmp-ui";

export const Banner: FC = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 5;
  const delay = 5000; // Thời gian chuyển ảnh (3 giây)

  useEffect(() => {
    const interval = setInterval(() => {
      // Tự động chuyển ảnh sang ảnh tiếp theo
      setCurrentImage((prevImage) => (prevImage % totalImages) + 1);
    }, delay);

    // Xóa interval khi component unmount
    return () => clearInterval(interval);
  }, []);

  const imageUrl = getDummyImage(`banner-${currentImage}.jpg`);

  return (
    <Box className="bg-white" pb={4}>
      <div
        className="w-full rounded-lg aspect-[2/1] bg-cover bg-center bg-skeleton"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </Box>
  );
};
