// props if needed in the future
export interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({title, subtitle}) => {
    return (
      <div className="bg-light-blue-100 text-gray-800 h-[80vh] flex items-center justify-start">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-lg bg-gray-200 bg-opacity-20 p-6 rounded-lg">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8">{subtitle}</p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                Learn More
            </button>
          </div>      
        </div>
      </div>
    );
};

export default Hero;
