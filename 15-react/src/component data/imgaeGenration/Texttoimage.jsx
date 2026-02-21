import { useState } from "react";

function ImageTest() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);

    const response = await fetch(
      "https://router.huggingface.co/nscale/v1/images/generations",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "stabilityai/stable-diffusion-xl-base-1.0",
          prompt: "Astronaut riding a horse",
          response_format: "b64_json",
        }),
      }
    );

    const data = await response.json();

    const base64Image = data.data[0].b64_json;
    setImage(`data:image/png;base64,${base64Image}`);

    setLoading(false);
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>

      {loading && <p>Generating...</p>}

      {image && <img src={image} alt="Generated" width="400" />}
    </div>
  );
}

export default ImageTest;