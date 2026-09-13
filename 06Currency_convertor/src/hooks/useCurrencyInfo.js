import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const fetchCurrency = async () => {
      try {
        // Primary API
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );

        if (!response.ok) {
          throw new Error("Primary API failed");
        }

        const result = await response.json();

        console.log("Currency Data:", result);

        setData(result[currency] || {});
      } catch (error) {
        console.log("Primary API failed, trying fallback...");

        try {
          // Fallback API
          const response = await fetch(
            `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
          );

          if (!response.ok) {
            throw new Error("Fallback API failed");
          }

          const result = await response.json();

          console.log("Fallback Currency Data:", result);

          setData(result[currency] || {});
        } catch (error) {
          console.log("Both APIs failed:", error);
          setData({});
        }
      }
    };

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;