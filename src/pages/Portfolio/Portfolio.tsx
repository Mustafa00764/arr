import React from 'react'
import "./portfolio.css"
import title_underline from "../../assets/svg/title-underline.svg"
import icon from "../../assets/images/icon.webp"

import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png"
import img3 from "../../assets/images/img3.png"
import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png"
import img6 from "../../assets/images/img6.png"
import img7 from "../../assets/images/img7.png"
import img8 from "../../assets/images/img8.png"
import img9 from "../../assets/images/img9.png"
import img10 from "../../assets/images/img10.png"

import { useTranslation } from "react-i18next";
import "../../i18n";
import { Link } from 'react-router-dom'
const PortfolioPage: React.FC = () => {
    const { t } = useTranslation();
    
    const category = [
        {
            name: "e-commerce",
        },
        {
            name: "media",
        },
        {
            name: "business",
        },
        {
            name: "education",
        },
        {
            name: "erp",
        },
        {
            name: "pos",
        },
    ]

    const cards = [
        {
          id: 1,
          title: "Education",
          description: t("portfolioPage.portfolioCard.text1"),
          image: img1,
          img1: img5,
          img2: img6,
          img3: img7,
          icon: icon,
        },
        {
            id: 2,
            title: "Education",
            description: t("portfolioPage.portfolioCard.text2"),
            image: img8,
            img1: img2,
            img2: img3,
            img3: img4,
            icon: icon,
        },
        {
          id: 3,
          title: "ERP",
          description: t("portfolioPage.portfolioCard.text3"),
          image: img10,
          img1: img9,
          img2: "",
          img3: "",
          icon: icon,
        },

    ];

  return (
    <div className='portfolio'>
        <div className="container">
            <div className="portfolio_container">
                <div className='portfolio_title'>
                    <h1>{t("portfolioPage.name")}</h1>
                    <img src={title_underline} alt="title_underline" />
                </div>
                <div className='portfolio_categoties'>
                    {
                        category.map((item,index)=>{
                            return(
                                <button key={index} className='portfolio_category'>{item.name}</button>
                            )
                        })
                    }
                </div>
                
                <div className='portfolio_cards'>
                    {
                        cards.map((item)=>{
                            return(
                                <Link key={item.id} to={`/portfolio/${item.id}`}>
                                <div className='portfolio_card'>
                                    <div className='portfolio_card_icon'>
                                        <img src={item.icon} alt="icon" />
                                        <img src={item.image} alt="image" className='portfolio_card_img'/>
                                    </div>
                                    <div className='portfolio_card_main'>
                                        <div className='portfolio_card_text'>
                                            <button>{item.title}</button>
                                            <p>{item.description}</p>
                                        </div>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='portfolio_card_btns'>
                                        <button className='portfolio_card_btn'>{t("portfolioPage.portfolioCard.button")}</button>
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage