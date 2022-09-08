import { useState } from "react";
import useFetch from "use-http";
import { INasaCuriosityParams } from "./interface";

export const useNasa = () => {
  const { REACT_APP_API_BASE_URL, REACT_APP_API_KEY } = process.env;
  const { get, error, response } = useFetch(REACT_APP_API_BASE_URL);

  const getCuriosityPhotos = async ({
    sol = 1000,
    page = 1,
    camera,
  }: INasaCuriosityParams) => {};
};
