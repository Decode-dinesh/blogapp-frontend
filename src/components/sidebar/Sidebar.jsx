import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                    <img src="https://images.pexels.com/photos/968639/pexels-photo-968639.jpeg?cs=srgb&dl=pexels-rob-eradus-968639.jpg&fm=jpg" alt="" className="sidebarImg" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Blanditiis, odit odio quo voluptatem consectetur ab dolor porro quia distinctio laudantium? 
                    </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                        <i className="sidebarIcon fab fa-instagram"></i>
                    </div>
            </div>
        </div>
    )
}
