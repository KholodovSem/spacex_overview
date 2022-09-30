import {useEffect} from 'react';

const usePreCacheImage = (images) => {
  useEffect(() => {
    (() => {
      images.forEach((image) => (new Image().src = image));
    })();
  }, [images]);
};

export default usePreCacheImage;
