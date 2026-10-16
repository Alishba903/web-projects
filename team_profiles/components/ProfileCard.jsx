export function ProfileCard(props) {
    console.log(props)
    return (
        <article>
            <div className="card-img">
                <img src={props.img.src} alt={props.img.alt} className="profile-img" />
            </div>

            <div className="profile-info">
                <div className="profile-header">
                    <h1>{props.name}</h1>
                    <p className="role">{props.role}</p>
                </div>

                <div className="seperator"></div>

                <p className="bio">{props.bio}</p>

                <div className="social-profiles">
                    <span><i className="fa-brands fa-github"></i></span>
                    <span><i className="fa-brands fa-linkedin-in"></i></span>
                    <span><i className="fa-brands fa-x-twitter"></i></span>
                </div>

                <div className="skills-tag">
                    <span>{props.skills[0]}</span>
                    <span>{props.skills[1]}</span>
                    <span>{props.skills[2]}</span>
                </div>
            </div>
        </article>
    )
}