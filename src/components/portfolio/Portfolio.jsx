import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Basic JavaScript Sidescroller Game',
    github: 'https://github.com/ianaberbach/Milestone_Project_1',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Travelr',
    github: 'https://github.com/ianaberbach/milestone-project-2',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fake Instagram',
    github: 'https://github.com/ianaberbach/Milestone_Project_3',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio