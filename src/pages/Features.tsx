
import { Zap, Shield, Droplets, Smartphone, Battery, Thermometer, Wifi, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "UV-C LED Purification",
      description: "Advanced UV-C LED technology eliminates 99.9% of harmful bacteria, viruses, and pathogens in just 90 seconds.",
      details: [
        "Eliminates E. coli, Salmonella, and other harmful bacteria",
        "Destroys viruses including influenza and norovirus",
        "Removes protozoa like Giardia and Cryptosporidium",
        "Chemical-free purification process"
      ]
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: "Multi-Stage Filtration",
      description: "Premium carbon and ceramic filters work together to remove chlorine, heavy metals, and improve taste.",
      details: [
        "Activated carbon removes chlorine and odors",
        "Ceramic pre-filter catches sediment and particles",
        "Heavy metal reduction (lead, mercury, copper)",
        "Improves taste and water clarity"
      ]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-500" />,
      title: "Smart App Integration",
      description: "Connect to our mobile app for tracking hydration, monitoring filter life, and customizing settings.",
      details: [
        "Daily hydration tracking and reminders",
        "Filter replacement notifications",
        "Purification cycle monitoring",
        "Personalized hydration goals"
      ]
    }
  ];

  const technicalSpecs = [
    {
      icon: <Battery className="h-8 w-8 text-green-600" />,
      title: "Long Battery Life",
      description: "Up to 30 days of usage on a single charge with USB-C fast charging"
    },
    {
      icon: <Thermometer className="h-8 w-8 text-red-500" />,
      title: "Temperature Display",
      description: "Built-in temperature sensor shows water temperature on LED display"
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-500" />,
      title: "Bluetooth Connectivity",
      description: "Seamless connection to your smartphone for data sync and control"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Premium Materials",
      description: "Food-grade stainless steel and BPA-free materials for safety"
    }
  ];

  const certifications = [
    { name: "FDA Approved", description: "Meets FDA standards for water purification devices" },
    { name: "BIS Certified", description: "Bureau of Indian Standards certified for quality" },
    { name: "ISO 9001", description: "International quality management standards" },
    { name: "CE Marking", description: "European Conformity for safety and health standards" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Features for Pure Water
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the cutting-edge technology that makes Aquasync the most advanced 
              water purification system available today.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Three powerful technologies working together for the ultimate water purification
            </p>
          </div>

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      {feature.icon}
                      <p className="text-sm text-gray-600 mt-4">Technology Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600">
              Precision engineering meets user-friendly design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {spec.icon}
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">{spec.title}</h3>
                </div>
                <p className="text-gray-600">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple operation, powerful results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fill & Press</h3>
              <p className="text-gray-600">Fill your bottle with water from any source and press the purification button</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Purify</h3>
              <p className="text-gray-600">UV-C LED activates for 90 seconds, eliminating 99.9% of harmful contaminants</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy</h3>
              <p className="text-gray-600">Pure, safe, and delicious water ready to drink with improved taste and clarity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by regulatory bodies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
