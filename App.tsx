import React, { useState } from 'react';
import { Car, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white py-4 px-6 fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-xl sm:text-2xl font-bold">Porsche</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-gray-300 transition duration-300">Modèles</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Services</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">À propos</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
            <div className="flex flex-col space-y-4 p-6">
              <a href="#" className="hover:text-gray-300 transition duration-300">Modèles</a>
              <a href="#" className="hover:text-gray-300 transition duration-300">Services</a>
              <a href="#" className="hover:text-gray-300 transition duration-300">À propos</a>
              <a href="#" className="hover:text-gray-300 transition duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2070&q=80"
          alt="Porsche 911"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-white">
              L'Excellence<br />Automobile
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white">
              Découvrez la nouvelle gamme Porsche
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300 flex items-center text-sm sm:text-base">
              Explorer <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Action Block */}
      <div className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Configurez Votre Porsche</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Créez la Porsche de vos rêves. Personnalisez chaque détail selon vos préférences.
          </p>
          <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-md hover:bg-gray-900 transition duration-300 text-sm sm:text-base">
            Commencer la Configuration
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-12 text-center">Contactez-nous</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <Phone className="w-8 h-8 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600">+33 (0)1 23 45 67 89</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <Mail className="w-8 h-8 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@porsche.fr</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 sm:col-span-2 md:col-span-1">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-gray-800" />
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600">123 Avenue des Champs-Élysées<br />75008 Paris</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Histoire</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Carrières</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Développement durable</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Financement</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Service après-vente</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Pièces d'origine</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Modèles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">911</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Cayenne</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Taycan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Mentions légales</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center sm:text-left">
          <p className="text-gray-400">&copy; 2025 Porsche. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;