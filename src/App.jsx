import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, Target, Activity, Cloud, Database, Menu, X } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Staggered text animation for hero heading
  const heroText = "Искусственный интеллект будущего"
  const heroTextArray = heroText.split("")
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cosmic-dark via-purple-900/10 to-cosmic-dark overflow-x-hidden">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),rgba(0,0,0,0))] pointer-events-none" />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-purple-500/10 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-cosmic-purple" />
              <span className="text-2xl font-bold tracking-tight">Aether Mind</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-cosmic-purple transition-colors">
                Возможности
              </a>
              <a href="#about" className="text-gray-300 hover:text-cosmic-purple transition-colors">
                О нас
              </a>
              <button className="bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-purple px-6 py-2 rounded-full backdrop-blur-sm border border-cosmic-purple/20 transition-all hover:scale-105">
                Начать
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-cosmic-purple"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-6">
              <div className="flex flex-col gap-4">
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-cosmic-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Возможности
                </a>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-cosmic-purple transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </a>
                <button className="bg-cosmic-purple/10 hover:bg-cosmic-purple/20 text-cosmic-purple px-6 py-2 rounded-full backdrop-blur-sm border border-cosmic-purple/20 transition-all">
                  Начать
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-thin tracking-tighter mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {heroTextArray.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-cosmic-purple mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Разрабатываем передовые AI-решения для бизнеса и науки
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-cosmic-purple/25">
                Попробовать демо
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm border border-white/10">
                Узнать больше
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid (Bento) */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Zap, title: "Высокая производительность", desc: "Обработка данных в реальном времени с минимальной задержкой" },
              { icon: Target, title: "Точность прогнозов", desc: "99.9% точность благодаря продвинутым алгоритмам" },
              { icon: Activity, title: "Непрерывное обучение", desc: "Система постоянно совершенствуется на новых данных" },
              { icon: Cloud, title: "Облачная инфраструктура", desc: "Масштабируемое решение для любых нагрузок" },
              { icon: Database, title: "Защита данных", desc: "Максимальный уровень безопасности и шифрования" },
              { icon: Shield, title: "Техподдержка 24/7", desc: "Профессиональная поддержка в любое время" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all hover:scale-[1.02]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-10 h-10 text-cosmic-purple mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-cosmic-purple/5" />
        <div className="container mx-auto max-w-4xl relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-thin tracking-tighter mb-8">
              Готовы к будущему с <span className="text-cosmic-purple">AI</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Присоединяйтесь к компаниям, которые уже используют Aether Mind для развития своего бизнеса
            </p>
            <button className="bg-cosmic-purple hover:bg-cosmic-purple/90 text-white px-12 py-5 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-cosmic-purple/25">
              Начать сейчас
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-cosmic-purple" />
              <span className="text-xl font-bold">Aether Mind</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Aether Mind. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App