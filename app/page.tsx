"use client";
import ApiUrls from "@/helper/ApiUrls";
import { API } from "@/services/axios.service";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    API.get(ApiUrls.GET_USER) // Make sure the closing parenthesis is after the method argument
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setFetchingConvo(false);
      });
  }, []);

  return <div>Home page</div>;
};

export default Page;
