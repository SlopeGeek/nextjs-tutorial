import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './HomeSlider.module.css'

export default function HomeSlider() {
    const settings = {
        //ドット上のナビを表示
        dots: true,
        //無限にスライドする(falseにするとスライドの最後までいったら止まる)
        infinite: true,
        //フェードの移動速度
        speed: 500,
        //表示するスライド数
        slidesToShow: 1,
        //1回で動くスライド数
        slidesToScroll: 1,
        //スライドショーを自動再生させる
        autoplay: true
    };
    return (
        <div>
            <ul className={styles.slider} >
                <Slider {...settings}>
                    <li><img src="/images/profile.jpg" width="300" /></li>
                    <li><img src="/images/HinaKawata.jpg" width="300" /></li>
                    <li><h1>3</h1></li>
                    <li><h1>4</h1></li>
                    <li><h1>5</h1></li>
                    <li><h1>6</h1></li>
                </Slider>
            </ul>
        </div>
    )
}