import HomeNav from "@/components/HomeNav";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {

  
  const examCards = [
    {
      title: "UPSC CSE - GS",
      url: "/senate.png",
    },
    {
      title: "IIT JEE",
      url: "/worker.png",
    },

    {
      title: "NEET UG",
      url: "/medical-symbol.png",
    },
    {
      title: "MHT-CET",
      url: "/chemical.png",
    },
  ];

  const howwehelp = [
    {
      title: "Daily live classes",
      description:
        "Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on",
      url: "/about1.png",
    },
    {
      title: "Practice and revise",
      description:
        "Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision",
      url: "/about2.png",
    },
    {
      title: "Learn anytime, anywhere",
      description:
        "One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices",
      url: "/about3.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* navbar */}
      <div>
        <HomeNav />
      </div>

      {/* homepage */}
      <div className="flex-1 bg-white px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-8 lg:py-16 gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 lg:space-y-6">
              <h1 className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Crack your goal with India's top educators
              </h1>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
                Over <span className="text-green-500 font-semibold">1000</span>{" "}
                learners trust us for their preparation
              </p>
              <button className="w-full bg-[#3C4852] text-white rounded-md py-3 font-medium hover:bg-gray-700">
                Join for free
              </button>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
                <Image
                  src="/homepageimage1.png"
                  alt="Educational illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* exam */}

      <div className="bg-white text-[#3C4852] px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Select your goal / exam
            </h1>
            <p className="text-base sm:text-lg">
              <span className=" text-[#08BD80] px-2 py-1 rounded">
                200+ exams
              </span>{" "}
              available for your preparation
            </p>
          </div>

          {/* Popular Goals Section */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              Popular goals
            </h2>

            {/* Grid of Exam Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {examCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg p-10 flex flex-col items-center justify-center hover:shadow-lg hover:bg-slate-50 transition-shadow cursor-pointer text-center"
                >
                  <div className="mb-4">
                    <Image
                      src={card.url}
                      alt={card.title}
                      width={200}
                      height={200}
                    />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* startlearning */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center rounded-lg shadow-lg bg-gradient-to-r from-green-50 to-white py-20">
          <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-12">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
              Start learning with
              <span className="text-gray-900"> fUnacademy</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Get unlimited access to structured courses & doubt-clearing
              sessions.
            </p>
            <button className="bg-green-400 text-white px-8 py-3 rounded-lg font-bold shadow-md hover:bg-green-500 transition duration-300">
              Start Learning
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/study.jpg"
              alt="Studying"
              width={700}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* aboutus */}

      <div className="w-full bg-white py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {howwehelp.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center  bg-white p-6 shadow-md rounded-lg"
              >
                <Image
                  src={card.url}
                  alt={card.title}
                  width={350}
                  height={350}
                  className="mb-4"
                />
                <h1 className="text-lg font-semibold mb-2 text-black">
                  {card.title}
                </h1>
                <p className="text-gray-600 font-light text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
