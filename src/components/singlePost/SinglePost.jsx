import './singlepost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?cs=srgb&dl=pexels-jacob-colvin-1761279.jpg&fm=jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">abcdfjamskf helllo
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Dinesh</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, minima velit! Hic, dolorem sapiente laudantium similique rem unde cum dignissimos ducimus eaque, tempora dolores distinctio facere reiciendis. Doloremque, itaque suscipit.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui provident, modi blanditiis consequatur id iusto cum, iure illo error ad dicta quisquam itaque ex distinctio aperiam perspiciatis tenetur odio? Provident.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident commodi magni non dolores eligendi beatae facilis accusantium labore deleniti! Doloremque in assumenda commodi libero corrupti fuga at, quasi asperiores sed?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum totam maxime corporis, suscipit natus maiores consequatur porro architecto vero laborum? Eos distinctio voluptatem aperiam atque laborum recusandae, assumenda inventore beatae!
                </p>
            </div>
        </div>
    )
}
