import React from 'react';
import * as Select from '@radix-ui/react-select';
import * as Slider from '@radix-ui/react-slider';
import styles from './App.module.css';

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <div className={styles.productImages}>
        <div className={styles.slider}>
          <Slider.Root className={styles.imageSlider} defaultValue={[50]}>
            <Slider.Track className={styles.sliderTrack}>
              <Slider.Range className={styles.sliderRange} />
            </Slider.Track>
            <Slider.Thumb className={styles.sliderThumb} />
          </Slider.Root>
        </div>
        <img src="https://via.placeholder.com/400" alt="Product" className={styles.productMainImage} />
      </div>

      <div className={styles.productInfo}>
        <h1 className={styles.productName}>Minimalist Product</h1>
        <p className={styles.productDescription}>
          This is a short description of the product, emphasizing its key features and benefits.
        </p>

        <div className={styles.productOptions}>
          <h3>Choose Size</h3>
          <Select.Root>
            <Select.Trigger className={styles.selectTrigger}>Select Size</Select.Trigger>
            <Select.Content className={styles.selectContent}>
              <Select.Item value="small">Small</Select.Item>
              <Select.Item value="medium">Medium</Select.Item>
              <Select.Item value="large">Large</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>

        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
