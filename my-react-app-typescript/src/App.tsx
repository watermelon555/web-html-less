import React from 'react'
import styles from './App.module.scss'
// import { BrowserRouter } from 'react-router-dom'
// import { Navbar } from './components/Navbar'
// import { Router } from './routers'
import articleImg from './assets/image/bg.jpg'

const App = () => {
  return (
    <div className={styles.App}>
      <header>
        <div className={styles.headerBg}>
          <div className={styles.headerMenu}>
            <div className={'menu'}>
              <i className='fa fa-bars' aria-hidden='true' />
            </div>
            <div>
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>

        </div>
      </header>
      <nav>
        {/*<aside>
          <div className={'aside-header'}>
            <div className={'aside-avatar'}></div>
            <div className={'aside-name'}></div>
            <div className={'aside-desc'}></div>
          </div>
          <div className={'menu-item'}>
            <div className={'menu'}>
              <i className="fa fa-home" aria-hidden="true"></i>
              <span>首页</span>
            </div>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </div>
        </aside>*/}
        <section>
          <div className={'commended'}>
            <div className={styles.articleWrap}>
              <div className={styles.articleBg}>
                <img src={articleImg} alt='' />
                <div className={styles.fuzzy}>
                  <div className={styles.title}>Hello World</div>
                  <div className={styles.date}>2021/1/14</div>
                </div>
              </div>
              <div className={styles.author}>
                <div className={styles.avatar}></div>
                <div className={styles.name}>なんでも</div>
              </div>
            </div>
          </div>
          <div className={'avatar-info'}>头像</div>
        </section>

        <article>
          文章
        </article>
      </nav>
    </div>
  )
}

export default App
