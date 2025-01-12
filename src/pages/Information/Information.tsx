import React, { useEffect, useState } from 'react'
import img from "../../assets/images/img.webp"
import icon from "../../assets/images/icon.webp"
import { useTranslation } from "react-i18next";
import "../../i18n";
import "./Information.css"
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
import title_underline from "../../assets/svg/title-underline.svg"
import { useParams } from 'react-router-dom'
interface Card {
    id: number,
    title: string,
    description: string,
    image: string,
    icon: string,
    category: string,
    img1: string,
    img2: string,
    img3: string,
    tags: string[]
}
const InformationPage: React.FC = () => {
    const { id } = useParams()
    const { t } = useTranslation();
    const cards = [
        {
          id: 1,
          title: t("informationPage.name"),
          description: t("informationPage.text1"),
          image: img1,
          img1: img5,
          img2: img6,
          img3: img7,
          icon: icon,
          category: "E-commerce",
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
            id: 2,
            title: t("informationPage.name"),
            description: t("informationPage.text2"),
            image: img8,
            img1: img2,
            img2: img3,
            img3: img4,
            icon: icon,
            category: "E-commerce",
            tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
        {
          id: 3,
          title: t("informationPage.name"),
          description: t("informationPage.text1"),
          category: "E-commerce",
          icon: icon,
          image: img10,
          img1: img9,
          img2: "",
          img3: "",
          tags: [t("informationPage.sectionThree.tags.tag1"), t("informationPage.sectionThree.tags.tag2"), t("informationPage.sectionThree.tags.tag3")]
        },
    ];
    const [card,setCard] = useState<Card>(cards[Number(id)-1])
    useEffect(()=> {
        const interval = setInterval(() => {
            setCard(cards[Number(id)-1])
            console.log(1);
            
          }, 1000);
      
          return () => clearInterval(interval);
    },[card,t])

    return (
        <div className='informtion'>
            <div className="container">
                <div className="informtion_container">
                    
                    <div className='informtion_logo'>
                        <img src={card.icon} alt="" />
                    </div>
                    <div className="sectionOne">
                        <img src={card.image} alt="" />
                        <div className='sectionOne_title'>
                            <h1>{card.title}</h1>
                            <img src={title_underline} alt="" />
                            <div className='sectionOne_category'>
                                {card.category}
                            </div>
                            <p>{card.description}</p>
                        </div>
                    </div>
                    <div className="sectionTwo">
                        <h1>{t("informationPage.sectionOne.name")}</h1>
                        <img src={title_underline} alt="" />
                        <div className='sectionTwo_cards'>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card1.title")}: 01</h3>
                                <p>{t("informationPage.sectionOne.card1.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card2.title")}: 02</h3>
                                <p>{t("informationPage.sectionOne.card2.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card3.title")}: 03</h3>
                                <p>{t("informationPage.sectionOne.card3.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card4.title")}: 04</h3>
                                <p>{t("informationPage.sectionOne.card4.text")}</p>
                            </div>
                            <div className='sectionTwo_card'>
                                <h3>{t("informationPage.sectionOne.card5.title")}: 05</h3>
                                <p>{t("informationPage.sectionOne.card5.text")}</p>
                            </div>
                        </div>
                    </div>
                    <div className={card.img2 == ""?'informtion_img2':'informtion_img'}>
                        <img src={card.img1} alt="image" />
                        {card.img2 == ""?"":<img src={card.img2} alt="" />}
                        {card.img3 == ""?"":<img src={card.img3} alt="" />}
                    </div>
                    <div className="sectionThree">
                        <h1>{t("informationPage.sectionThree.name")}</h1>
                        <img src={title_underline} alt="" />
                        <div className='sectionThree_tags'>
                            {
                                card.tags.map((item,index)=> {
                                    return(
                                        <div className='sectionThree_tag' key={index}>
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationPage