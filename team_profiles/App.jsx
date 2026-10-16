import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import data from "./data"

export default function App() {
    const profileElements = data.map((profile)=>{
        return (<ProfileCard
                key={profile.id}
                img={profile.image}
                name={profile.name}
                role={profile.role}
                bio={profile.bio}
                skills={profile.skills}/>)
    })
    return (
        <>
            <Header />
            <main className="container">
                {/* <ProfileCard
                    img={{
                        src: "./images/Emily.png",
                        alt: "Emily Johnson"
                    }}
                    name="Emily Johnson"
                    role="Frontend Developer"
                    bio="Passionate about creating beautiful and responsive websites."
                    skills={["React", "JavaScript", "CSS"]} /> */}
                    {profileElements}
            </main>
            <Footer />
        </>
    )
}