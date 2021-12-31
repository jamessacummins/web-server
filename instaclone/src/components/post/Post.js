import './Post.css';
import detailsIcon from '../../assets/details.png';
import likeIcon from '../../assets/like.png';
import commentIcon from '../../assets/comment.png';
import saveIcon from '../../assets/save.png';
import forwardIcon from '../../assets/forward.png';

const dataLocation = process.env.PUBLIC_URL + "/data";

function Post() {
    return(
        <div className="Post">
            <div className="Post-header-wrapper">
                
                    <img 
                        className="Post-header-profile-pic" 
                        src={ dataLocation + "/1/profile.jpg" }
                    />
                    <div className="Post-header-profile-name">
                        jamesclear
                    </div>
                    <img 
                        className="Post-header-details"
                        src={detailsIcon} 
                    />
                
            </div>
            
            <img 
                className="Post-image"
                src={ dataLocation + "/1/image.jpg" } 
            />
            <div className="Post-actions-wrapper">
                <img 
                    className="Post-actions-like Post-action"
                    src={likeIcon} 
                />
                <img 
                    className="Post-actions-comment Post-action"
                    src={commentIcon} 
                />
                <img 
                    className="Post-actions-forward Post-action"
                    src={forwardIcon} 
                />
                <img 
                    className="Post-actions-save Post-action"
                    src={saveIcon} 
                />
            </div>
            <div className="Post-caption-wrapper">
                <span className="Post-caption-user">
                    jamesclear
                </span>
                <span className="Post-caption-text">
                    Sign up to my free course now at jamesclear.com. 15% off with code VOTEFORCHANGE.
                </span>
            </div>
        </div>
    );
}

export default Post;