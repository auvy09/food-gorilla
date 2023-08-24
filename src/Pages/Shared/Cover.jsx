import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -60, max: 60 }}
            bgImage={img}
            bgImageAlt="The Menu"
            strength={-300}
        >
            <div className="hero h-[600px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                        <p className="mb-5">“The business of feeding people is the most amazing business in the world.” <p>- José Andrés <p><small>Chef and Founder of World Central Kitchen.</small></p></p> </p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;