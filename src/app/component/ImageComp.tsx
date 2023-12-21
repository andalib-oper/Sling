import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { io } from "socket.io-client";

export default function ImageComp() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjZW5lcnl8ZW58MHx8MHx8fDA="
  );
  const socket = io("https://sling-backend.onrender.com");

  socket.on("imageUploaded", (data) => {
    setImageUrl(`data:image/png;base64,${data.data.image}`);
  });

  useEffect(() => {
    axios
      .get(`https://sling-backend.onrender.com/api/get-image`)
      .then((response) => {
        console.log("response", response?.data?.data?.image);
        setImageUrl(`data:image/png;base64,${response?.data?.data?.image}`);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);
const imageStyle = {
  width: `200px`,
  height: `250px`,
  borderRadius: "50%",
  objectFit: "cover", // Ensures the image covers the entire container
};
  return (
    <div
      className="flex h-[532px] w-[532px]" //👈 here is Tailwind
      style={{
        position: "relative",
        backgroundColor: "#ffa629",
        justifyContent: "center",
      }}
    >
      {imageUrl && (
        <Image
          className="pointer-events-none round-md rounded-full"
          src={imageUrl}
          alt={"Capture"}
          width={500} // Set the width of the image
          height={100}
        />
      )}
    </div>
  );
}
