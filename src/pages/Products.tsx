
import { ShoppingCart, Star, Zap, Shield, Droplets, Smartphone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Aquasync Pro",
      price: "₹4,999",
      originalPrice: "₹5,999",
      image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&h=400&fit=crop",
      features: ["UV-C Purification", "Smart App Control", "Temperature Display", "Premium Steel"],
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Aquasync Essential",
      price: "₹2,999",
      originalPrice: "₹3,499",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      features: ["UV-C Purification", "Basic Filtration", "Lightweight Design", "BPA-Free"],
      rating: 4.7,
      reviews: 89,
      badge: "Popular"
    },
    {
      id: 3,
      name: "Aquasync Sport",
      price: "₹3,499",
      originalPrice: "₹3,999",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      features: ["UV-C Purification", "Sports Cap", "Leak-Proof", "Ergonomic Grip"],
      rating: 4.8,
      reviews: 156,
      badge: "Sports"
    },
    {
      id: 4,
      name: "Aquasync Travel",
      price: "₹3,999",
      originalPrice: "₹4,499",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop",
      features: ["UV-C Purification", "Compact Design", "Quick Charge", "Travel Pouch"],
      rating: 4.6,
      reviews: 94,
      badge: "Compact"
    }
  ];

  const featureIcons = {
    "UV-C Purification": <Zap className="h-4 w-4 text-yellow-500" />,
    "Smart App Control": <Smartphone className="h-4 w-4 text-blue-500" />,
    "Temperature Display": <Droplets className="h-4 w-4 text-cyan-500" />,
    "Premium Steel": <Shield className="h-4 w-4 text-gray-500" />,
    "Basic Filtration": <Shield className="h-4 w-4 text-green-500" />,
    "Lightweight Design": <Droplets className="h-4 w-4 text-blue-400" />,
    "BPA-Free": <Shield className="h-4 w-4 text-green-600" />,
    "Sports Cap": <Droplets className="h-4 w-4 text-orange-500" />,
    "Leak-Proof": <Shield className="h-4 w-4 text-red-500" />,
    "Ergonomic Grip": <Droplets className="h-4 w-4 text-purple-500" />,
    "Compact Design": <Droplets className="h-4 w-4 text-teal-500" />,
    "Quick Charge": <Zap className="h-4 w-4 text-yellow-600" />,
    "Travel Pouch": <Shield className="h-4 w-4 text-brown-500" />
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Premium Water Bottles
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our range of UV-powered water bottles designed for every lifestyle. 
              Pure water, wherever life takes you.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          {featureIcons[feature as keyof typeof featureIcons]}
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    </div>
                  </div>

                  {/* Buy Button */}
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Aquasync?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Aquasync bottle comes with our commitment to quality, innovation, and your health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2-Year Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty coverage on all products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Purification</h3>
              <p className="text-gray-600">Eliminates harmful bacteria and viruses instantly</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Charging</h3>
              <p className="text-gray-600">USB-C charging with 30-day battery life</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
