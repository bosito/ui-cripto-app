import React, { useState, useCallback } from "react";
import { Axios } from "../core/axios";

export default function useFech() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  /**
   * @function handleFechGet
   * @description this function is for making simple get requests with all the necessary logic.
   */

  const handleFechGet = useCallback(async (uri: string): Promise<any> => {
    try {
      setError(false);
      setLoading(true);

      const response = await Axios.get(uri);

      setError(false);
      setLoading(false);

      return response.data;
    } catch (error) {
      setError(true);
      setLoading(false);

      //console.log('response -->', error);
    }
  }, []);

  return {
    loading: loading,
    error: error,
    handleFechGet,
  };
}
