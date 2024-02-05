import './Article.css'
import article1 from '../../assets/article1.png'
import article2 from '../../assets/article2.png'
import article3 from '../../assets/article3.png'

const Article:React.FC = () =>{
    return(
        <div className="container_article">
            <div className="bold_text">Check out our latest article</div>
            <div className="divider"></div>
            <div className="article_cards">
                <div className="article_card">
                    <img src={article1} alt="" />
                    <div className="bold_text">Disease detection, check up in the laboratory</div>
                    <div className="gray_text">In this case, the role of the health laboratory is very important to do a disease detection...</div>
                    <div className="read_more">
                        <div>Read more</div>
                        <div id='article_arrow'>&rarr;</div>
                    </div>
                </div>
                <div className="article_card">
                    <img src={article2} alt="" />
                    <div id='article_2card' className="bold_text">Herbal medicines that are safe for consumption</div>
                    <div className="gray_text">Herbal medicine is very widely used at this time because of its very good for your health...</div>
                    <div className="read_more">
                        <div>Read more</div>
                        <div id='article_arrow'>&rarr;</div>
                    </div>
                </div>
                <div className="article_card">
                    <img src={article3} alt="" />
                    <div className="bold_text">Natural care for healthy facial skin</div>
                    <div className="gray_text">A healthy lifestyle should start from now and also for your skin health. There are some...</div>
                    <div className="read_more">
                        <div>Read more</div>
                        <div id='article_arrow'>&rarr;</div>
                    </div>
                </div>
            </div>
            <div className="button" id='white_button'>View all</div>
        </div>
    );
}

export default Article;