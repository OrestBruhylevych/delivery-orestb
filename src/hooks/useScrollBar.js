import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

const config = {};

export const useScrollBar = root => {
  useEffect(() => {
    let scrollbars;

    if (root.current) {
      scrollbars = OverlayScrollbars(root.current, config);
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root]);

  return [];
};
