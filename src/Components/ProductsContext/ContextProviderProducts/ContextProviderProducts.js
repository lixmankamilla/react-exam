import { ProductContext } from "../ProductContext";
import { useState } from "react";

const ContextProviderProducts = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWX_3n_PIedlWOW_CGauG4b1-XQzFYScF4w&s",
      descr: "Профиль 0,55мм для гипсокартона",
      category: "Строительные материалы",
      price: 300,
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sINasz0gQ_SdKABc6zk4K_a7hGjZ8qbvbA&s",
      descr: "Рулетка",
      category: "Инструменты",
      price: 150,
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9EXML_U_xsr9_BhbbWEGxDhVVKqwR1qZ7A&s",
      descr: "Кнауф Мп 75 штукатурка",
      category: "Строительные материалы",
      price: 500,
    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeHV6ld8TM_jRpDgKnpiswKEBS8pmOVyCNw&s",
      descr: "Уголок серый канализационный",
      category: "Сантехника",
      price: 200,
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeabTuZEoY2rfnFngRs1skC5WBzbF_ZLT_gw&s",
      descr: "Knauf Ротбанд, 30 кг",
      category: "Строительные материалы",
      price: 600,
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiikgIHSNCFLtIc8WkI2ZoWfsrDDe100d-ng&s",
      descr: "Саморез по металлу 3",
      category: "Крепеж",
      price: 50,
    },
    {
      id: 7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnujTDRngRqjPA_vQKXlMES6YFmSxVUlLCyA&s",
      descr: "Шпатлевка универсальная",
      category: "Строительные материалы",
      price: 700,
    },
    {
      id: 8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrwLWq2EK-B24ynWO4xBgcpBJ4sJWta1IOgg&s",
      descr: "Клейкая лента металлизированная",
      category: "Строительные материалы",
      price: 100,
    },
    {
      id: 9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1ap4BRTr8Uds6h1mlXFQZOgguN4Hu5PLWg&s",
      descr: "Молоток 500г",
      category: "Инструменты",
      price: 250,
    },
    {
      id: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNHHmyXXL0-qJrc5AMtrPMpyC8ANWFzjV8g&s",
      descr: "Отвёртка крестовая PH2",
      category: "Инструменты",
      price: 100,
    },
    {
      id: 11,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLvGPg65MSUa_JZkSPXd70ERw3qh2UFEhmg&s",
      descr: "Лопата совковая",
      category: "Инструменты",
      price: 300,
    },
    {
      id: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGA25AtQyydS0hojFBBenGKQYb-6h8xoE8iQ&s",
      descr: "Гипсокартон влагостойкий",
      category: "Строительные материалы",
      price: 400,
    },
    {
      id: 13,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPCVTUTZSa1oXZg6UV5xLrkBGm7AR2tsolw&s",
      descr: "Уголок алюминиевый",
      category: "Металлопрокат",
      price: 120,
    },
    {
      id: 14,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HB9faJt3b_25cbXydXx0F1xmCzCqxWL63w&s",
      descr: "Гвозди 50мм, 1 кг",
      category: "Крепеж",
      price: 80,
    },
    {
      id: 15,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluTfyvj1cMK1Dk3IH_rjHwF4JOCGPq0x7kg&s",
      descr: "Стекловата рулонная",
      category: "Утеплители",
      price: 900,
    },
    {
      id: 16,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL01yAXWW5-uErEVBdC0pIKsM-Oc4MVdvg7A&s",
      descr: "Цемент М500, 25 кг",
      category: "Строительные материалы",
      price: 350,
    },
    {
      id: 17,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEZBfGPsVaESlxfCYGZLvRVC0j3LrT8S4qg&s",
      descr: "Дрель ударная",
      category: "Инструменты",
      price: 2000,
    },
    {
      id: 18,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5gRNhONth6_bGFWnUdKurfMp3Gg40ex4gg&s",
      descr: "Шуруповёрт аккумуляторный",
      category: "Инструменты",
      price: 1800,
    },
    {
      id: 19,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VsDhY2Id_gKg27nsJlX8TQnLBARdrL4snQ&s",
      descr: "Клей ПВА строительный",
      category: "Клеи и герметики",
      price: 120,
    },
    {
      id: 20,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rhr8WltPtGwIAWnVsglCyNgxEgfHgVJTog&s",
      descr: "Сетка рабица",
      category: "Сеточные материалы",
      price: 500,
    },
    {
      id: 21,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDKz5eF1b2SK0Rijw-k5n10nzRSXdXCVbBA&s",
      descr: "Плитка керамическая",
      category: "Отделочные материалы",
      price: 400,
    },
    {
      id: 22,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVi0ENJH08sCiSVqMnhQNHbE9INZM0T6fBA&s",
      descr: "Краска акриловая белая",
      category: "Отделочные материалы",
      price: 750,
    },
    {
      id: 23,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPddZnm9smEwL-or8JD4eIlEbu7BV5qhagAw&s",
      descr: "Рулетка ",
      category: "Инструменты",
      price: 200,
    },
    {
      id: 24,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS51y_wvqzee5ALB3RbyG3gUQG3Pizos5GUIg&s",
      descr: "Лестница алюминиевая",
      category: "Инструменты",
      price: 2500,
    },
    {
      id: 25,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQYKis2aZ5ssa4jZugO-wgs5O6jnj1JSlow&s",
      descr: "Кирпич красный строительный",
      category: "Строительные материалы",
      price: 20,
    },
    {
      id: 26,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNBtuEnpzN9U8OuEd7JwLI9SMGUNSJzM9Tw&s",
      descr: "Проволока вязальная",
      category: "Крепеж",
      price: 100,
    },
    {
      id: 27,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs95qWoerAmzq5_8m1LNqJchq54K4Tibg2PQ&s",
      descr: "Герметик силиконовый",
      category: "Клеи и герметики",
      price: 150,
    },
    {
      id: 28,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLh352wxG8DcjOLdbVJn_6o4XPjYOpNGQvtw&s",
      descr: "Труба ПВХ 50мм",
      category: "Сантехника",
      price: 180,
    },
    {
      id: 29,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47SbHxe7aum7Hj2UzfpHa_RL58deArx3n6Q&s",
      descr: "Пена монтажная",
      category: "Клеи и герметики",
      price: 200,
    },
    {
      id: 30,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTrwgGPzIb_gM7ouBArKbXmFLecg80DP7bFg&s",
      descr: "Плиточный клей",
      category: "Клеи и герметики",
      price: 300,
    },
  ]);

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ContextProviderProducts;
