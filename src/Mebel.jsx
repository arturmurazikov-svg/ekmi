import divan from './assets/divan.jpg'
import stul1 from './assets/stul1.jpg'
import samir from './assets/samir.png'
import alibaba from './assets/alibaba.jpg'
import dv from './assets/dv.jpg'
import divanka from './assets/divanka.jpg'
import divanvan from './assets/divanvan.jpg'
import twodivana from './assets/twodivana.jpg'
import vogue from './assets/vogue.png'
import apple from './assets/apple.png'
import zara from './assets/zara.png'
import samsung from './assets/samsung.png'

import bimbaone from './assets/bimbaone.jpg'
import bimbatwo from './assets/bimbatwo.jpg'
import bimbathree from './assets/bimbathree.jpg'
import bimbafour from './assets/bimbafour.jpg'
import ekmimi from './assets/ekmimi.png'



function Mebel() {
    return (
        <>

            <header className="header">

                <div className="navbar">

                    <nav className="menu">
                        <a href="#">КАТАЛОГ</a>
                        <a href="#">ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ</a>
                        <a href="#">КОНТАКТЫ</a>
                    </nav>

                    <div className="logo">
                        <div className="logo-main">
                            ЕКМИ
                        </div>

                        <div className="logo-sub">
                            МЕБЕЛЬ
                        </div>
                    </div>

                    <div className="right-menu">
                        <span>+38 (099)-638-45-37</span>
                        <span>RU⌄</span>
                    </div>

                </div>

            </header>


            <section className="hero">

                <div className="hero-container">

                    <div className="founded">
                        Основано в 1993 году
                    </div>


                    <div className="hero-text">

                        <h1>
                            <span>ЛУЧШАЯ</span>
                            <br />
                            ЖИЗНЬ,
                            <br />
                            СОЗДАННАЯ
                            <br />
                            ДЛЯ ВАС!
                        </h1>

                        <a href="#" className="button">
                            ПЕРЕЙТИ В КАТАЛОГ
                        </a>

                    </div>


                    <img
                        className="hero-image"
                        src={divan}
                        alt="Диван"
                    />

                </div>

            </section>


            <div className="dots">
                <span></span>
                <span className="active"></span>
                <span></span>
            </div>



            {/* another one  */}

            <div className="novinki-section">
                <h2 className="section-title">
                    <span className="highlight">Н</span>овинки
                </h2>

                <div className="slider-container">
                    <button className="arrow-btn prev-btn">&#10094;</button>

                    <div className="products-grid">
                        <div className="product-card">
                            <div className="image-box">
                                <img src={stul1} alt="ALBA" />
                            </div>
                            <h3 className="product-name">ALBA</h3>
                            <p className="product-price">15 000 UAH</p>
                        </div>

                        <div className="product-card">
                            <div className="image-box">
                                <img src={samir} alt="MARTIN" />
                            </div>
                            <h3 className="product-name">MARTIN</h3>
                            <p className="product-price">15 000 UAH</p>
                        </div>

                        <div className="product-card">
                            <div className="image-box">
                                <img src={alibaba} alt="LUARA" />
                            </div>
                            <h3 className="product-name">LUARA</h3>
                            <p className="product-price">15 000 UAH</p>
                        </div>
                    </div>

                    <button className="arrow-btn next-btn">&#10095;</button>
                </div>

                <div className="button-container">
                    <a href="#catalog" className="catalog-btn">ПЕРЕЙТИ В КАТАЛОГ</a>
                </div>
            </div>



            <div className='indmeb'>
                <div className='orange'><p>furniture</p></div>
                <div className='blue'><img src={dv}></img></div>
                <div className='grey'>
                    <h3> <br /></h3>
                    <p>Полный цикл производства</p>

                    <a>Качество мягкой мебели <br /> начинается задолго до начала ее производства.</a>
                    <button>ИНДИВИДУАЛЬНАЯ МЕБЕЛЬ</button>
                </div>
                <div className='yellow'></div>
            </div>


            <div className="history">
                <h1>Наша История</h1>
                <img src={divanka} alt="History" />
                <div className="grr">
                    <h3>Function during 25 years</h3>
                    <p>
                        Каждый производитель заявляет, что делает<br></br> все для своих покупателей, но не каждый<br></br> производитель способен подтвердить свои<br></br> заявления многолетней историей
                    </p>
                </div>
            </div>
            <div className='yall'></div>

            <div className='year'>
                <h4>1993</h4>
                <h2>25 лет</h2>
                <h5>2021</h5>
            </div>

            <div className='Publc'>
                <h1>Last Publications</h1>
            </div>



            <div className="slider-container">
                <button className="arrow-btn prev-btn">&#10094;</button>



                <div className="products-grid">
                    <div className="product-card">
                        <div className="image-box">
                            <img src={samir} alt="ALBA" />
                        </div>
                        <h3 className="product-name">MARTIN</h3>
                        <p className="product-price">15 000 UAH</p>
                    </div>

                    <div className="product-card">
                        <div className="image-box">
                            <img src={stul1} alt="MARTIN" />
                        </div>
                        <h3 className="product-name">ALBA</h3>
                        <p className="product-price">15 000 UAH</p>
                    </div>

                    <div className="product-card">
                        <div className="image-box">
                            <img src={alibaba} alt="LUARA" />
                        </div>
                        <h3 className="product-name">TOSCANA</h3>
                        <p className="product-price">15 000 UAH</p>
                    </div>
                </div>


                <button className="arrow-btn next-btn">&#10095;</button>
            </div>


            <div className='declor'>
                <img src={divanvan}></img>
                <div className='form'>
                    <p>Заполните форму</p>
                    <h4>Остались вопросы?</h4>
                    <input placeholder='your name' />
                    <input placeholder='your phone number' />
                    <input placeholder='country' />
                    <input placeholder='comment' />
                    <div className='kvadrat'></div>
                    <a>Подтверждая заказ, я принимаю условия<br></br> пользовательского соглашения</a>
                    <button>Запросить звонок</button>
                </div>
            </div>


            <div className='text11'>
                <h1>1</h1>
                <p>Осуществляемые компанией<br></br> «Экми-Мебель» постоянные<br></br> инвестиции в сертификацию<br></br> своей продукции,<br></br> убедительно подтверждают<br></br> лидерство компании на<br></br> украинском рынке<br></br> высококачественной мягкой мебели.</p>
                <div className='text22'>
                    <h2>2</h2>
                    <p>Фабрика «Экми-мебель»<br></br> сертифицирована по<br></br> системе менеджмента<br></br> качества ISO 9001:2000 на<br></br> соответствие<br></br> международным<br></br> стандартам,<br></br> представительством<br></br> «Бюро Веритас» в Украине.</p>
                </div>
                <div className='text33'>
                    <h3>3</h3>
                    <p>Компания «Экми-Мебель»<br></br> первой из украинских<br></br> производителей<br></br> мягкой мебели обеспечила<br></br> свою мебель<br></br> полноценной  гарантией<br></br> и первой обоснованно<br></br> заявила<br></br> о лучшем качестве<br></br> производимой мебели.</p>
                </div>
            </div>

            <div className='partner'>
                <h1>Our partners</h1>
                <div className='cube'></div>
                <div className='conc'>
                    <h1>Компании сотрудничают с нами по всему миру</h1>
                    <p>На данный момент дилерская сеть фабрики<br></br> «Экми-Мебель» насчитывает более 30 салонов<br></br> по всей Украине. Сейчас мы заинтересованы в<br></br> расширении сети и предлагаем выгодные<br></br> условия для сотрудничества. </p>
                    <p>Основным преимуществом фабрики является<br></br> изготовление любого индивидуального изделия,<br></br> мягкой мебели и аксессуаров из наших<br></br> основных коллекций. Также присутствует<br></br> линейка оригинальных интерьерных корпусных<br></br> изделий.</p>
                    <div className='brown'>
                        <img src={twodivana}></img>
                    </div>
                </div>
                <div className='kvadro'></div>
            </div>



            <div className='pictu'>
                <img src={vogue}></img>
                <img src={apple}></img>
                <img src={zara}></img>
                <img src={samsung}></img>

            </div>

            <div className='bimbim'>
                <img src={bimbaone}></img>
                <img src={bimbatwo}></img>
                <img src={bimbathree}></img>
                <img src={bimbafour}></img>
            </div>


            <div className='aka'>
                <h1>ekmi</h1>
            </div>

            <footer>
                <div className='finish'>
                    <img src={ekmimi}></img>

                    <div className="finishbooks">
                        <a href="#catalog">Catalog</a>
                        <a href="#about">About company</a>
                        <a href="#individual-mebel">Individual mebel</a>
                        <a href="#designers">Partner designers</a>
                    </div>

                    <div className="finishbooks">
                        <a href="#models">2D 3D models</a>
                        <a href="#show-rim">Show-Rim</a>
                        <a href="#contacts">Contacts</a>
                        <a href="#configurator">Configurator</a>
                    </div>

                    <div className="abror">
                        <div className='icons'>
                            <ion-icon name="logo-instagram" className='iconsicon'></ion-icon>
                            <ion-icon name="logo-facebook" className='iconsicon'></ion-icon>
                        </div>
                        <p className='piska'>+38 (099)-638-45-37</p>
                        <button className='bata'>personal name</button>
                    </div>


                </div>

                <div className="finish2">
                    <p>© 1993–2021 Интернет-магазин «EKMI™» — меблі</p>
                </div>
            </footer>






        </>
    );
}

export default Mebel;
