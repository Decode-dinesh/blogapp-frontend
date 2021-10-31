import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/1440722/pexels-photo-1440722.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1440722.jpg&fm=jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div> 
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div> 
            <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, vel! Voluptate perspiciatis magni suscipit doloribus? Expedita, consequuntur dolorum amet, necessitatibus, ipsum labore delectus neque blanditiis temporibus molestias repellat. Harum, ex.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, vel! Voluptate perspiciatis magni suscipit doloribus? Expedita, consequuntur dolorum amet, necessitatibus, ipsum labore delectus neque blanditiis temporibus molestias repellat. Harum, ex.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, vel! Voluptate perspiciatis magni suscipit doloribus? Expedita, consequuntur dolorum amet, necessitatibus, ipsum labore delectus neque blanditiis temporibus molestias repellat. Harum, ex.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, vel! Voluptate perspiciatis magni suscipit doloribus? Expedita, consequuntur dolorum amet, necessitatibus, ipsum labore delectus neque blanditiis temporibus molestias repellat. Harum, ex.
            </p>
        </div>
    )
}
