'use client'
import Image from "next/image";

export default function Home() {
  const styles = [
    {
      title: "Art",
      styles: [
        {
          title: "Contemporary",
          image: "/art/Contemporary.png"
        },
        {
          title: "Cubism",
          image: "/art/Cubism.png"
        },
        {
          title: "Gouache",
          image: "/art/Gouache.png"
        },
        {
          title: "Impressionism",
          image: "/art/Impressionism.png"
        },
        {
          title: "Modern",
          image: "/art/Modern.png"
        }
      ]
    },
    {
      title: "Games",
      styles: [
        {
          title: "Battle Royale",
          image: "/games/BattleRoyale.jpeg"
        },
        {
          title: "GrandTheftAuto",
          image: "/games/GrandTheftAuto.jpeg"
        },
        {
          title: "Minecraft",
          image: "/games/Minecraft.jpeg"
        },
        {
          title: "Shootout",
          image: "/games/Shootout.jpeg"
        },
        {
          title: "Warcraft",
          image: "/games/Warcraft.jpeg"
        }
      ]
    },
    {
      title: "Movies",
      styles: [
        {
          title: "Detective",
          image: "/movies/Detective.jpeg"
        },
        {
          title: "MiddleAge",
          image: "/movies/MiddleAge.jpeg"
        },
        {
          title: "Romantic",
          image: "/movies/Romantic.jpeg"
        },
        {
          title: "Space",
          image: "/movies/Space.jpeg"
        },
        {
          title: "Wizards",
          image: "/movies/Wizards.jpeg"
        }
      ]
    },
    {
      title: "Shows",
      styles: [
        {
          title: "Documentary",
          image: "/shows/Documentary.png"
        },
        {
          title: "Drama",
          image: "/shows/Drama.jpeg"
        },
        {
          title: "Reality",
          image: "/shows/Reality.png"
        },
        {
          title: "Sitcom",
          image: "/shows/Sitcom.jpeg"
        },
        {
          title: "Thriller",
          image: "/shows/Thriller.png"
        }
      ]
    }
  ];

  const heroImages = [
    { ...styles[0].styles[0], category: styles[0].title }, 
    { ...styles[1].styles[0], category: styles[1].title }, 
    { ...styles[2].styles[0], category: styles[2].title }, 
    { ...styles[3].styles[0], category: styles[3].title }  
  ];

  return (
    <div className="flex flex-col min-h-screen text-white font-sans">
      <header className="py-5 px-4 md:px-8 sticky top-0 z-50 ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="rounded-md" />
          </div>

        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-8 py-16 md:py-24 flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-black leading-tight">
              Transform your <span className="text-zinc-900 font-bold">ideas</span> into reality
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto md:mx-0">
              Unleash your creativity with our cutting-edge platform. Visualize, generate, and bring your unique concepts to life like never before.
            </p>
      
          </div>

          <div className="relative grid grid-cols-2 gap-4 md:gap-5 p-2 h-[380px] md:h-[480px]">
            {heroImages.map((img, index) => (
              <div
                key={img.image}
                className={`group relative rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ease-out hover:scale-105 hover:z-10 
                  ${index === 0 ? 'md:-translate-y-6 md:translate-x-3' : ''}
                  ${index === 1 ? 'md:translate-y-3 md:-translate-x-1' : ''}
                  ${index === 2 ? 'md:-translate-y-3 md:translate-x-1' : ''}
                  ${index === 3 ? 'md:translate-y-6 md:-translate-x-3' : ''}
                `}
              >
                <Image
                  src={img.image}
                  alt={`${img.category} - ${img.title}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 2} 
                />
                <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-md font-semibold text-white">{img.title}</h3>
                  <p className="text-xs text-slate-300">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 md:px-8 border-t border-slate-700 text-sm text-slate-500">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          
          </div>
        </div>
      </footer>
    </div>
  );
}
