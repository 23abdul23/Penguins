import React, { useState, useEffect } from "react";
import adilie from "./assets/adilie.png";
import chinstrap from "./assets/chinstrap.png";
import gentoo from "./assets/gentoo.png";

const images = [adilie, chinstrap, gentoo];

const info = {
    [adilie]: [
        "Adélie",
        "Adélie penguins are found along the entire Antarctic coast and are known for their bold, curious nature. They have a distinctive white ring around their eyes and feed mainly on krill.",
    ],
    [chinstrap]: [
        "Chinstrap",
        "Named for the thin black line under their head that looks like a helmet strap, Chinstrap penguins are energetic swimmers. They inhabit rocky islands and are among the most aggressive penguin species.",
    ],
    [gentoo]: [
        "Gentoo",
        "Gentoos are the fastest underwater swimmers among penguins, reaching speeds up to 36 km/h. They are recognized by their bright orange beaks and the white stripe across their heads.",
    ],
};

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentImage = images[currentIndex];
    const [name, description] = info[currentImage];

    return (
        <div
            className="slider-container"
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                padding: "30px 0",
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {images.map((image, index) => {
                    const isCurrent = index === currentIndex;
                    const isLeft = index === (currentIndex - 1 + images.length) % images.length;
                    const isRight = index === (currentIndex + 1) % images.length;

                    return (
                        <div
                            key={index}
                            className="slider-card"
                            style={{
                                position: "absolute",
                                transform: isCurrent
                                    ? "translateX(0) scale(1)"
                                    : isLeft
                                    ? "translateX(-200px) scale(0.7)"
                                    : isRight
                                    ? "translateX(200px) scale(0.7)"
                                    : "translateX(0) scale(0.5)",
                                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                                opacity: isCurrent || isLeft || isRight ? 1 : 0,
                                zIndex: isCurrent ? 2 : isLeft || isRight ? 1 : 0,
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                width: "500px",
                                height: "500px",
                                border: "solid",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        ></div>
                    );
                })}
            </div>

            {/* Info Section */}
            <div
                style={{
                    maxWidth: "800px",
                    textAlign: "center",
                    padding: "10px 20px",
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <h2 style={{ marginBottom: "10px" }}>{name}</h2>
                <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#444" }}>{description}</p>
            </div>
        </div>
    );
};

export default Slider;
