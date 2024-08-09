import { useState } from 'react';
import styles from '../../../styles/PriceFilter.module.css';

export default function PriceFilter() {
    const [slider1Value, setSlider1Value] = useState<number>(0);
    const [slider2Value, setSlider2Value] = useState<number>(9999999);

    // Hàm cập nhật giá trị cho thanh slider từ input
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value <= slider2Value) {
            setSlider1Value(value);
        }
    };

    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= slider1Value) {
            setSlider2Value(value);
        }
    };

    return (
        <div className={styles.priceSlider}>
            <span>Giá</span>
            <div className={styles.sliderContainer}>
                <input 
                    type="range" 
                    min={0} 
                    max={9999999} 
                    value={slider1Value} 
                    onChange={(e) => setSlider1Value(Number(e.target.value))} 
                    className={styles.slider1}
                />
                <input 
                    type="range" 
                    min={0} 
                    max={9999999} 
                    value={slider2Value} 
                    onChange={(e) => setSlider2Value(Number(e.target.value))} 
                    className={styles.slider2}
                />
            </div>
            <div className={styles.inputContainer}>
                <input 
                    type="number" 
                    value={slider1Value} 
                    onChange={handleMinInputChange} 
                    className={styles.inputMin}
                />
                <span>Đến</span>
                <input 
                    type="number" 
                    value={slider2Value} 
                    onChange={handleMaxInputChange} 
                    className={styles.inputMax}
                />
            </div>
        </div>
    );
}
