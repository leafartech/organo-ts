import './Banner.css'
interface BannerProps {
    imagePath: string,
    imageAlt?: string
}

const Banner = ({imagePath, imageAlt}: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={imagePath} alt={imageAlt}/>
        </header>
    )
}

export default Banner