import React, { useState } from 'react';
import { Heart, BookOpen, Star, Mail, Phone, MapPin, Gift, Users, Sparkles, Instagram } from 'lucide-react';

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConstructionModal, setShowConstructionModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const packages = [
    {
      id: 'diy',
      title: 'Povești DIY',
      subtitle: 'Creează-l tu însuți',
      price: '50 RON',
      description: 'Transformă singur o carte în cea mai frumoasă declarație de dragoste. Primești instrucțiuni detaliate, șabloane personalizate și tot sprijinul nostru pentru a crea cu propriile mâini o capodoperă care va vorbi inimii celui drag.',
      features: [
        'Instrucțiuni pas cu pas',
        'Șablon personalizat pentru mesajul tău',
        'Video tutorial cum sa incepi',
        'Suport online până la finalizare'
      ],
      romantic: false
    },
    {
      id: 'semi-custom',
      title: 'Povești Împreună',
      subtitle: 'Cel mai popular ❤️',
      price: '85 RON',
      description: 'Adu-mi cartea care are o însemnătate specială pentru voi și eu o voi transforma în cel mai emoționant cadou. Fiecare îndoitură va fi făcută cu grijă, gândindu-mă la zâmbetul pe care îl vei vedea când va descoperi mesajul ascuns.',
      features: [
        'Prelucrarea cărții tale speciale',
        'Consultație pentru alegerea mesajului',
        'Execuție profesională',
        'Predare în Cluj sau livrare prin curier'
      ],
      romantic: true
    },
    {
      id: 'full-service',
      title: 'Povești Magice',
      subtitle: 'Experiența completă',
      price: '100 RON',
      description: 'Lasă totul pe seama mea și concentrează-te doar pe momentul magic al dăruirii. Vom alege cartea perfectă impreuna, apoi eu voi impaturi cu atentie fiecare pagina și voi livra direct în mâinile tale o operă de artă care va rămâne pentru totdeauna în inima celui iubit.',
      features: [
        'Selecția și achiziția cărții ideale',
        'Consultație completă personalizată',
        'Execuție premium cu detalii fine',
        'Ambalaj cadou elegant inclus'
      ],
      romantic: false
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1370304/pexels-photo-1370304.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <BookOpen className="h-8 w-8 text-rose-600" />
              <span className="text-2xl font-serif font-bold text-gray-800">Povești Îndoite</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Acasă</button>
              <button onClick={() => scrollToSection('pachete')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Pachete</button>
              <button onClick={() => scrollToSection('galerie')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Galerie</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors font-medium">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight">
                  Transformă o carte în 
                  <span className="text-rose-600 block">cea mai frumoasă</span>
                  <span className="text-amber-600 block">declarație de dragoste</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Prin arta îndoirii paginilor, fiecare carte devine un mesaj secret care se dezvăluie doar atunci când privești din lateral. Un cadou unic care va rămâne pentru totdeauna în inima celui drag.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('pachete')}
                  className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-8 py-4 rounded-full font-semibold hover:from-rose-700 hover:to-rose-800 transform hover:scale-105 transition-all shadow-lg"
                >
                  Descoperă Magia
                </button>
                <button 
                  onClick={() => scrollToSection('galerie')}
                  className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition-all"
                >
                  Vezi Galeria
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Carte artistica indoita"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-rose-600 fill-rose-600" />
                  <span className="font-semibold text-gray-800">100+ povești create</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Cum se naște magia?</h2>
            <p className="text-xl text-gray-600">Fiecare carte îndoită este o operă de artă unică</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Alegem mesajul perfect</h3>
              <p className="text-gray-600">Împreună selectăm mesajul care va exprima cel mai bine sentimentele tale</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Creăm cu migală</h3>
              <p className="text-gray-600">Fiecare pagină este îndoită cu grijă pentru a forma literele perfecte</p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Livrăm cu dragoste</h3>
              <p className="text-gray-600">Cartea ta ajunge în mâinile tale, gata să facă pe cineva fericit</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pachete" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Alege-ți povestea</h2>
            <p className="text-xl text-gray-600">Trei modalități magice de a crea amintiri de neuitat</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={pkg.id} className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all ${pkg.romantic ? 'ring-4 ring-rose-200' : ''}`}>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">{pkg.title}</h3>
                    <p className="text-rose-600 font-medium mb-4">
                      {pkg.id === 'semi-custom' ? (
                        <span className="bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                          {pkg.subtitle}
                        </span>
                      ) : (
                        pkg.subtitle
                      )}
                    </p>
                    <div className="text-4xl font-bold text-gray-800 mb-2">{pkg.price}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Star className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                    pkg.romantic 
                      ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white hover:from-rose-700 hover:to-rose-800 shadow-lg hover:shadow-xl' 
                      : 'border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
                  }`}
                  onClick={() => setShowConstructionModal(true)}>
                    Alege această poveste
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 bg-gradient-to-b from-white to-rose-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Galeria poveștilor noastre</h2>
            <p className="text-xl text-gray-600">Fiecare carte spune o poveste unică de dragoste</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image}
                  alt={`Carte artistica ${index + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all bg-white rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-rose-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage}
            alt="Carte artistica marita"
            className="max-w-full max-h-full rounded-2xl"
          />
        </div>
      )}

      {/* Construction Modal */}
      {showConstructionModal && (
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${
            showConstructionModal ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setShowConstructionModal(false)}
        >
          <div 
            className={`bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-300 ${
              showConstructionModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="h-8 w-8 text-rose-600" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-bold text-gray-800">Site în construcție</h3>
                <p className="text-gray-600 leading-relaxed">
                  Momentan accept comenzi numai prin Instagram, unde poți vedea și mai multe exemple de lucrări și poți discuta direct cu mine despre dorințele tale.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="https://instagram.com/povestiindoite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
                >
                  📸 Vizitează Instagram-ul nostru
                </a>
                
                <button 
                  onClick={() => setShowConstructionModal(false)}
                  className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-2xl font-medium hover:bg-gray-50 transition-all"
                >
                  Închide
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Ce spun clienții noștri</h2>
            <p className="text-xl text-gray-600">Povești adevărate de iubire și bucurie</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-rose-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"Am comandat o carte cu mesajul M ❤️  C pentru soțul meu. Când a văzut-o, aproape a plâns de fericire. Este cel mai frumos cadou pe care l-am oferit vreodată!"</p>
              <p className="font-semibold text-gray-800">- Maria din Cluj</p>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"Profesionalism maxim! Am ales pachetul complet și am fost impresionat de atenția la detalii. Cartea a ajuns perfect ambalată și soția mea a fost în al nouălea cer."</p>
              <p className="font-semibold text-gray-800">- Andrei din București</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"Am ales pachetul DIY pentru a face cartea singură. Instrucțiunile erau foarte clare și suportul primit a fost excepțional. Rezultatul a depășit așteptările!"</p>
              <p className="font-semibold text-gray-800">- Elena din Timișoara</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-rose-400" />
                <span className="text-2xl font-serif font-bold">Povești Îndoite</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformăm cărți obișnuite în cadouri extraordinare prin arta îndoirii paginilor. 
                Fiecare carte îndoită este o declarație de dragoste unică care va fi prețuită pentru totdeauna.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:povestiindoite@gmail.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Mail className="h-5 w-5 text-rose-400" />
                  <span>povestiindoite@gmail.com</span>
                </a>
                <a 
                  href="tel:+40756817405"
                  className="flex items-center space-x-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Phone className="h-5 w-5 text-rose-400" />
                  <span>+40 756 817 405</span>
                </a>
                <a 
                  href="https://instagram.com/povestiindoite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-rose-400 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-rose-400" />
                  <span>@povestiindoite</span>
                </a>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-rose-400 mt-1" />
                  <div className="text-gray-300">
                    <p>Cluj-Napoca</p>
                    <p className="text-sm">Livrare în toată țara</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Informații</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="font-semibold">Livrare Cluj:</span> Personal sau curier local</p>
                <p><span className="font-semibold">Livrare națională:</span> 2-3 zile lucrătoare</p>
                <p><span className="font-semibold">Timpul de execuție:</span> 3-7 zile</p>
                <p><span className="font-semibold">Consultații:</span> Gratuite</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                <p className="text-gray-400 text-sm mb-2">
                © 2024 Povești Îndoite. Toate drepturile rezervate.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
                    <img style={{width:'120px',margin:'2px'}} src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png" alt="Solutionarea Alternativa a Litigiilor" />
                  </a>
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow">
                    <img style={{width:'120px',margin:'2px'}} src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png" alt="Solutionarea Online a Litigiilor" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;