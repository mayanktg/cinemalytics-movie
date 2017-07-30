const utils =
  {
    isMobile: () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mobi|Opera Mini|SymbianOS/i.test(navigator.userAgent);
    }
  };

export default utils;
