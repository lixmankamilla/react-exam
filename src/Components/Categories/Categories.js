import "./Categories.scss";
import shower from "../../assets/shower-icon.svg";
import lumber from "../../assets/lumber-icon.svg";
import linoleum from "../../assets/linoleum-icon.svg";
import wallpaper from "../../assets/wallpaper-icon.svg";
import tools from "../../assets/tools-icon.svg";
import goodsForGarden from "../../assets/goods-f-garden-icon.svg";
import window from "../../assets/window-icon.svg";
import doors from "../../assets/doors-icon.svg";
import plumbing from "../../assets/plumbing-icon.svg";
import paints from "../../assets/paints-icon.svg";
import electricalGoods from "../../assets/electrical-goods-icon.svg";
import interior from "../../assets/interior-icon.svg";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-wrapper">
      <div className="categories-wrapper__nav">
        <div className="categories-wrapper__nav__title">
          Популярные категории
        </div>
        <button
          className="categories-wrapper__nav__btn"
          onClick={() => {
            navigate("/categories");
          }}
        >
          Все категории
        </button>
      </div>
      <div className="categories-wrapper__blocks">
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Душевые
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={shower} />
          </div>
        </div>

        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Пиломатериалы
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={lumber} />
          </div>
        </div>

        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Линолеум
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={linoleum} />
          </div>
        </div>

        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">Обои</div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={wallpaper} />
          </div>
        </div>

        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Инструменты
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={tools} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Товары для дачи
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={goodsForGarden} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">Окна</div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={window} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">Двери</div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={doors} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Сантехника
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={plumbing} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">Краски</div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={paints} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Электротовары
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={electricalGoods} />
          </div>
        </div>
        <div className="categories-wrapper__blocks__block">
          <div className="categories-wrapper__blocks__block__title">
            Интерьер
          </div>
          <div className="categories-wrapper__blocks__block__img">
            <img src={interior} />
          </div>
        </div>
      </div>
    </div>
  );
};
