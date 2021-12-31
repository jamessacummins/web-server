import './Post.css';

const dataLocation = process.env.PUBLIC_URL + "/data";

function Post() {
    return(
        <div className="Post">
            <img 
                className="Post-image"
                src={ dataLocation + "/1/image.jpg" } 
            />
        </div>
    );
}

export default Post;