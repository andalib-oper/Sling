"use client";
import React, { useState, useEffect } from "react";
import ImageComp from "./component/ImageComp";

export default function ImageMain() {
  return (
    <div
      className="w-full overflow-hidden relative"
      // style={{ height: "30vh" }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#9747ff",
        height: "100vh",
      }}
    >
      <ImageComp />
    </div>
  );
}
