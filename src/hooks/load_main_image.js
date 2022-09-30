import {useState, useEffect} from 'react';

const useLoadMainImage = (mainImg) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const homeImage = new Image();
    homeImage.src = mainImg;
    homeImage.addEventListener('load', handleImageLoad);

    return () => homeImage.removeEventListener('load', handleImageLoad);
  }, [mainImg]);

  return isLoading;
};

export default useLoadMainImage;
