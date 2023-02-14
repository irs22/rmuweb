import './blog_home.scss'
// img
import Blog_1 from '../../assets/img/work-5.svg'
// Icons
import { CgFileDocument } from 'react-icons/cg'
import { FaFacebookSquare } from 'react-icons/fa'
function Blog_home() {
    return (
        <section className="blog__lite section">
            <div className="sect__header">
                <h1 className="sect__title">Some Blogs</h1>
                <a href="/">View More blogs</a>
            </div>
            <div className="grid blog__lite-grid">

                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>
                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>
                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>
                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>
                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>
                <div className="a-post">

                    <div className="post__img">
                        <img src={Blog_1} alt="" />
                    </div>

                    <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>

                    <p className="discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi tempore harum voluptates quis aspernatur delectus repellat eum, quam voluptatem eius!</p>

                    <div className="btns">
                        <button className="btn blog"><CgFileDocument /> <span>Blog</span></button>
                        <button className="btn fb"><FaFacebookSquare /><span>FB</span></button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Blog_home