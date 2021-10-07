import { useEffect, useState } from "react";
import { PLATFORMS } from "../utils";

export const GetLeaks = () => {
  const [data, dataSet] = useState<any[]>([]);

  const detect = () => {
    const result = PLATFORMS.map(
      (network: { name: string; domain: string; redirect: string }) => {
        const img = document.createElement("img");
        img.referrerPolicy = "no-referrer";
        img.src = network.domain + network.redirect;
        img.onload = () => {
          dataSet((prevState): any[] => {
            const tempArray = {
              domain: network.domain,
              name: network.name,
              match: true,
            };

            if (!prevState?.[0]) {
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
        // img.onerror = () => { dataSet((network: any) => [ ...data, [{ provider: network.name, loggedIn: false }], ]); };

        return true;
      }
    );
  };

  useEffect(() => {
    detect();
  }, []);

  return data;
};
