import './news.css'
import { news } from '../Data'
import Header from '../Components/Header'




const News = () => {
  return (
    <section className='news'  id='news'>
    <Header title='news'></Header>

    <div className="news_container">
        <div className="news_grid">
            {
                news.map(({id, image , title , info}) => {
                    return <div key={id} className='news_row'>
                     <img src={image} alt={title} />
                     <h1>{title}</h1>
                     <p>{info}</p>
                    </div>
                })
            }
        </div>
    </div>
    <div className="news_btn">
                <button className='btn'>Go to blog</button>
            </div>
    </section>
  )
}

export default News
