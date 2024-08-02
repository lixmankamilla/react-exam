import { useContext } from "react";
import "./ProductForPage.scss";
import { ProductContext } from "../ProductsContext/ProductContext";
import { useParams } from "react-router-dom";

export const ProductForPage = () => {
  const { products, setStateProducts } = useContext(ProductContext);
  const { id } = useParams();
  return (
    <div className="product-info-wrapper">
      {products.map((product) => {
        if (product.id == id) {
          return (
            <div className="product-info-wrapper__block" key={product.id}>
              <div className="product-info-wrapper__block__img">
                <img src={product.img} width="278px" height="208px" />
              </div>
              <div className="product-info-wrapper__block__desc">
                <div className="product-info-wrapper__block__desc__title">
                  {product.descr}
                </div>
                <div className="product-info-wrapper__block__desc__price__block">
                  <span className="product-info-wrapper__block__desc__price__block__sum">
                    {product.price}
                  </span>
                  <span className="product-info-wrapper__block__desc__price__block__currency">
                    ₽
                  </span>
                </div>
                <button className="product-info-wrapper__block__desc__cart__btn">
                  В корзину
                </button>
              </div>
            </div>
          );
        }
      })}
      <div className="product-info-wrapper__desc">
        <div className="product-info-wrapper__desc__title">Описание</div>
        <div className="product-info-wrapper__desc__text">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur pretium
          lorem eget curabitur odio. Taciti nostra est hendrerit scelerisque
          diam ultrices sociosqu. Efficitur mattis nisl aliquet vivamus orci,
          dis dolor potenti. Tortor accumsan eros hendrerit fringilla est
          ridiculus neque sit sit? Interdum facilisi platea ipsum eget placerat
          eleifend nunc nibh. Conubia cras tempor dictum; ac per ad semper
          litora. Per curabitur a dis lacus lectus porttitor sodales. Nulla orci
          faucibus diam eget nulla pharetra turpis. Eu malesuada magna ultrices
          nunc dis. Vivamus orci dignissim laoreet feugiat tempus parturient dui
          volutpat. Cras morbi primis tellus imperdiet dignissim metus torquent
          nisl. Lacinia tortor fames blandit; cubilia ante ante. Vulputate enim
          integer neque dolor pulvinar neque. Lacinia praesent placerat nascetur
          arcu auctor sapien. Viverra aptent bibendum duis turpis dictumst mus.
          Cursus natoque netus lacinia quisque, sociosqu faucibus nulla ad. Ut
          maecenas nascetur ultrices augue fusce torquent quam aenean? Pulvinar
          nullam duis aliquet; primis posuere hendrerit sociosqu dapibus.
          Accumsan nisl sed nulla rhoncus eros massa cras habitant donec. Urna
          aliquam mus euismod etiam neque fringilla eu platea. Ultrices bibendum
          cras tellus tortor metus potenti viverra. Commodo parturient
          suspendisse tempus luctus ad neque euismod. Semper phasellus dis proin
          praesent quisque. Taciti litora conubia felis in fringilla velit orci
          integer lacus. Mollis augue sodales condimentum tempus cubilia
          pulvinar aliquet sociosqu. Leo tortor nibh quisque felis morbi massa
          volutpat a. Elit etiam nascetur ad orci netus. Arcu penatibus elit
          natoque justo placerat luctus condimentum nibh. Habitasse lobortis
          potenti diam lobortis ut erat. Imperdiet nullam urna sodales aliquam
          efficitur nisl. Diam id finibus imperdiet inceptos augue pretium.
          Placerat nostra curabitur nisl et tortor tortor. Maecenas mollis
          nascetur arcu varius tincidunt. Curabitur fermentum accumsan tellus
          metus malesuada. Phasellus gravida etiam sociosqu tempor, nascetur
          vulputate vivamus elit. Dui fermentum dapibus sollicitudin fermentum
          nascetur curabitur. Justo non quam est ultrices habitasse proin orci.
          Nascetur potenti egestas varius convallis vulputate, class
          scelerisque. Malesuada odio vel luctus feugiat orci. Vel auctor hac,
          dui tempor consequat venenatis. Feugiat sociosqu accumsan non ultrices
          quisque tristique. Accumsan pharetra enim venenatis placerat mauris
          tincidunt scelerisque. Enim torquent natoque suscipit cursus; pulvinar
          sit. Egestas proin venenatis pharetra sodales metus quisque ipsum.
          Ligula nec auctor ante habitasse aptent mauris curabitur varius.
          Penatibus pretium parturient arcu enim conubia. Rhoncus dignissim nibh
          platea mi ridiculus metus. Hendrerit nec facilisi vulputate morbi
          congue ultrices consectetur hendrerit. Risus nulla tempor iaculis;
          himenaeos maximus placerat ex? Proin dignissim consequat natoque nam
          curae viverra. Duis mattis nisl dignissim vitae sed dictum porttitor
          suspendisse.
        </div>
      </div>
    </div>
  );
};
