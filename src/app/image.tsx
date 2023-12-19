import React ,{useState,useEffect}from 'react'
import axios from 'axios';

export default function ImageComp() {
    const [imageUrl, setImageUrl] = useState(
      "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjZW5lcnl8ZW58MHx8MHx8fDA="
    );

    useEffect(() => {
      // Fetch the image from your Node.js server
      axios
        .get("YOUR_NODE_SERVER_IMAGE_URL")
        .then((response) => {
          setImageUrl(response.data.imageUrl);
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });
    }, []);
  return <div>
    <p>Andalib</p>
    {imageUrl && <img src={imageUrl} alt="Captured" />}
    </div>;
}
