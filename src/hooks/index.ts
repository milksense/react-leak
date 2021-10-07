import { useEffect, useState } from "react";
import { PLATFORMS } from "../utils";

export const GetLeaks = () => {
  const [data, dataSet] = useState<any[]>([]);

  const detect = () => {
    const result = PLATFORMS.map((network: any) => {
      const img = document.createElement("img");
      img.referrerPolicy = "no-referrer";
      img.src = network.domain + network.redirect;
      img.onload = () => {
        /* @ts-ignore */
        dataSet((prevState): any[] => {
          const tArray = {
            provider: network.name,
            loggedIn: true,
          };

          if (!prevState?.[0]) {
            return [
              {
                ...prevState,
                ...tArray,
              },
            ];
          } else {
            prevState.push(tArray);

            return [...prevState];
          }
        });
      };

      /**
       * Special condition on next time 🤷‍♀️
       */
      // img.onerror = () => { dataSet((network: any) => [ ...data, [{ provider: network.name, loggedIn: false }], ]); };

      return true;
    });
  };

  useEffect(() => {
    detect();
  }, []);

  return data;
};
