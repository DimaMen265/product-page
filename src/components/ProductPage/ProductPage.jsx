import React, { useState } from 'react';
import image1 from '../../images/iphone-1.jpg';
import image2 from '../../images/iphone-2.jpg';
import image3 from '../../images/iphone-3.jpg';
import image4 from '../../images/iphone-4.jpg';
import styles from './ProductPage.module.css';
import * as Select from '@radix-ui/react-select';
import * as Slider from '@radix-ui/react-slider';

function ProductPage() {
    const [selectedColor, setSelectedColor] = useState('Natural Titanium');
    const [selectedSize, setSelectedSize] = useState('256GB');
    const [currentImage, setCurrentImage] = useState(0);

    const images = [image1, image2, image3, image4];

    const handleSlideChange = (value) => {
        setCurrentImage(value[0]);
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePreviousImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <button className={styles.navButtonPrev} onClick={handlePreviousImage}>&lt;</button>
                <img src={images[currentImage]} alt="Product" className={styles.image} />
                <button className={styles.navButtonNext} onClick={handleNextImage}>&gt;</button>
                <Slider.Root
                    className={styles.imageSlider}
                    value={[currentImage]}
                    min={0}
                    max={images.length - 1}
                    step={1}
                    onValueChange={handleSlideChange}
                >
                    <Slider.Track className={styles.sliderTrack}>
                        <Slider.Range className={styles.sliderRange} />
                    </Slider.Track>
                    <Slider.Thumb className={styles.sliderThumb} />
                </Slider.Root>
            </div>

            <h1 className={styles.productName}>IPhone 16 Pro Max</h1>
            <p className={styles.description}>Screen (6.9", OLED (Super Retina XDR), 2868x1320) / Apple A18 Pro / main triple camera: 48 MP + 48 MP + 12 MP, front camera: 12 MP / 1 TB of built-in memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 18</p>

            <Select.Root value={selectedColor} onValueChange={setSelectedColor}>
                <Select.Trigger className={styles.select}>
                    <Select.Value placeholder="Select Color">{selectedColor}</Select.Value>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className={styles.selectContent} side="right" position="popper">
                        <Select.Viewport>
                            <Select.Item value="Black Titanium">Black Titanium</Select.Item>
                            <Select.Item value="Desert Titanium">Desert Titanium</Select.Item>
                            <Select.Item value="Natural Titanium">Natural Titanium</Select.Item>
                            <Select.Item value="White Titanium">White Titanium</Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>

            <Select.Root value={selectedSize} onValueChange={setSelectedSize}>
                <Select.Trigger className={styles.select}>
                    <Select.Value placeholder="Select Size">{selectedSize}</Select.Value>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content className={styles.selectContent} side="right" position="popper">
                        <Select.Viewport>
                            <Select.Item value="256GB">256GB</Select.Item>
                            <Select.Item value="512GB">512GB</Select.Item>
                            <Select.Item value="1TB">1TB</Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>

            <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
    );
}

export default ProductPage;
