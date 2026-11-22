import { useState } from "react";

function ImageCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="relative border rounded">
        <img
          src={images[index]}
          alt="product"
          className="w-full h-80 object-contain"
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        >
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 bg-gray-800 text-white px-3 py-1 rounded"
        >
          &gt;
        </button>
      </div>

      <div className="flex gap-2 mt-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="thumbnail"
            onClick={() => setIndex(i)}
            className="w-16 h-16 object-contain border rounded cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;