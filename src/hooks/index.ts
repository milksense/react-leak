import { useEffect, useState } from "react";
import { IPlatformsSort, TPlatformsSort } from "../types/hooks";
import { PLATFORMS } from "../utils";

export const GetLeaks = () => {
  const [data, dataSet] = useState<any[]>([]);
  const [current, currentSet] = useState<number>(0);
  const [notFound, notFoundSet] = useState<boolean>(true);

  const detectNetworks = () => {
    PLATFORMS.map((network: IPlatformsSort, i: number): TPlatformsSort => {
      const img = document.createElement("img");
      img.referrerPolicy = "no-referrer";
      img.src = network.domain + network.redirect;
      img.onload = () => {
        currentSet(i);
        dataSet((prevState): any[] => {
          const tempArray = {
            domain: network.domain,
            name: network.name,
            match: true,
          };

          if (!prevState?.[0]) {
            notFoundSet(false);
            return [
              {
                ...prevState,
                ...tempArray,
              },
            ];
          } else {
            prevState.push(tempArray);

            return [...prevState];
          }
        });
      };

      /**
       * Special condition on next time 🤷‍♀️
       */
      img.onerror = () => {
        currentSet(i);
      };

      return true;
    });
  };

  useEffect(() => {
    detectNetworks();
  }, []);

  return { data: data, current: current, notFound: notFound };
};
