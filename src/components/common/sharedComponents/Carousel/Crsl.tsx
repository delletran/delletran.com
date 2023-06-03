import { v4 as uuidv4 } from "uuid";
import { ArticleCardCarousel } from 'components/Article'
import { testArticle } from 'data/testData';
import styles from 'styles/components/FeatureArticle.module.scss'
import Carousel from "./Carousel";

type Props = {}

function Crsl({}: Props) {
  const { title, author, content, imgSrc } = testArticle;
  const card = (
    <ArticleCardCarousel
      key={uuidv4()}
      title={title + ' Feartured'}
      author={author}
      content={content}
      imgSrc={imgSrc}
    />
  );

  const articles = [card, card, card, card,]
  let cards = [
    {
      key: uuidv4(),
      content: (
        <ArticleCardCarousel
          key={uuidv4()}
          title={title + ' Feartured'}
          author={author}
          content={content}
          imgSrc={'1.jpg'}
        />)
    },
    {
      key: uuidv4(),
      content: card
    },
    {
      key: uuidv4(),
      content: card
    },
    {
      key: uuidv4(),
      content: card
    },
    {
      key: uuidv4(),
      content: card
    },
    {
      key: uuidv4(),
      content: (
        <ArticleCardCarousel
          key={uuidv4()}
          title={title + ' Feartured'}
          author={author}
          content={content}
          imgSrc={'2.jpg'}
        />)
    }
  ];
  
  return (
    <div id="fullCarousel">
      <Carousel
        cards={cards}
        height="35rem"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  )
}

export default Crsl;
