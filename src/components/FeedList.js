import React from 'react';
import style from '../scss/style.module.scss';
const FeedList = ({user}) => {
    return (
        <div className={style.main}>
                
        {user && user.map((v, i)=>{
            
             return (
                <article className={style.content}>
                <ul>
                <li key={i} className={style.feed}>
                    <div className={style.list_top}>
                        <ul>
                            <li>
                            <img src={v.url} className={style.profile}/>
                            </li>
                            <li>
                            <span>{v.id}</span>
                            </li>
                        </ul>
                    </div>
                    <div className={style.ImgBox}>
                        <img src={v.url}></img>
                    </div>
                    <div>
                    <ul>
                        <li>
                            <a href="#" >
                                <img src={process.env.PUBLIC_URL + '/assets/img/heart.png'}  className={style.icon}/>   
                            </a>
                            <a href="#" >
                                <img src={process.env.PUBLIC_URL + '/assets/img/talk.png'} className={style.icon}/>
                            </a>
                            <a href="#">
                                <img src={process.env.PUBLIC_URL + '/assets/img/share.png'} className={style.icon}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                <a href="#">좋아요 {v.like} 개</a>
                </div>
                <div className={style.footer}>
                   
                        <div className={style.name}>{v.id}</div>
                        <div>{v.msg}</div>
                    
                </div>
               <div className={style.coments}>
                <form>
                    <div className={style.smile}>
                        <img src={process.env.PUBLIC_URL + '/assets/img/smile.png'}></img>
                    </div>
                        <textarea ariaLabel="댓글 달기..." placeholder="댓글 달기..." className={style.text}></textarea>
                    <button type="submit" className={style.btn_coments}>게시</button>
                </form>
               </div>
                </li>
                </ul>
            </article>
            )
         })}
        
    </div>
    );
};

export default FeedList;