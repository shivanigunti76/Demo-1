import React, { useState } from 'react';
import { Upload, Wand2, Languages, Sparkles, Zap, Globe, Type, Video, Play, Download, Save, Settings, Users, BarChart3, FileText, Moon, Sun, Menu, X, ChevronRight, Check } from 'lucide-react';

export default function CaptionGeneratorApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Upload page state
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedStyle, setSelectedStyle] = useState('casual');
  const [whisperModel, setWhisperModel] = useState('medium');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Preview page state
  const [fontSize, setFontSize] = useState(24);
  const [captionPosition, setCaptionPosition] = useState('bottom');
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [bgColor, setBgColor] = useState('#000000');
  const [captions, setCaptions] = useState([
    { time: '0:00', text: 'Welcome to our video tutorial' },
    { time: '0:03', text: 'Today we will learn about AI captions' }
  ]);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50';
  const cardBg = darkMode ? 'bg-gray-800' : 'bg-white';
  const textPrimary = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

  // Simulate upload process
  const handleGenerateCaptions = () => {
    setIsProcessing(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setCurrentPage('preview');
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const NavBar = () => (
    <header className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md shadow-sm sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-xl">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CaptionAI
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setCurrentPage('home')} className={`${textPrimary} hover:text-purple-600 transition-colors`}>Home</button>
            <button onClick={() => setCurrentPage('dashboard')} className={`${textPrimary} hover:text-purple-600 transition-colors`}>Dashboard</button>
            <button onClick={() => setCurrentPage('features')} className={`${textPrimary} hover:text-purple-600 transition-colors`}>Features</button>
            {isLoggedIn && (
              <button onClick={() => setCurrentPage('admin')} className={`${textPrimary} hover:text-purple-600 transition-colors`}>Admin</button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => setCurrentPage('login')}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
              >
                Sign In
              </button>
            )}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className={`w-6 h-6 ${textPrimary}`} /> : <Menu className={`w-6 h-6 ${textPrimary}`} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const HomePage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h2 className={`text-5xl md:text-6xl font-bold ${textPrimary} mb-6`}>
          AI-Powered Captions,
          <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
            Generated Instantly
          </span>
        </h2>
        <p className={`text-xl ${textSecondary} max-w-3xl mx-auto mb-8`}>
          Effortlessly generate accurate, engaging captions for your videos in multiple languages. Choose your style, customize appearance, and export in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Upload className="w-5 h-5" />
            Upload Video
          </button>
          <button 
            onClick={() => setCurrentPage('demo')}
            className={`px-8 py-4 ${cardBg} ${textPrimary} border-2 border-purple-600 rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2`}
          >
            <Play className="w-5 h-5" />
            Try Demo
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-20">
        <h3 className={`text-3xl font-bold text-center ${textPrimary} mb-12`}>
          Powerful Features
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap className="w-6 h-6" />, title: 'Fast Transcription', desc: 'AI-powered Whisper models for instant results' },
            { icon: <Type className="w-6 h-6" />, title: 'Style Customization', desc: 'Formal, casual, aesthetic, or meme-style' },
            { icon: <Globe className="w-6 h-6" />, title: 'Multi-language', desc: 'Support for 50+ languages worldwide' },
            { icon: <Play className="w-6 h-6" />, title: 'Real-time Preview', desc: 'See and edit captions as you create' }
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`${cardBg} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                {feature.icon}
              </div>
              <h4 className={`text-lg font-semibold ${textPrimary} mb-2`}>
                {feature.title}
              </h4>
              <p className={textSecondary}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Example Videos Section */}
      <div className={`${cardBg} rounded-2xl p-12 shadow-xl`}>
        <h3 className={`text-3xl font-bold text-center ${textPrimary} mb-8`}>
          See It In Action
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Tutorial Video', 'Product Demo', 'Social Content'].map((title, idx) => (
            <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer`}>
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h4 className={`font-semibold ${textPrimary} mb-2`}>{title}</h4>
              <p className={`text-sm ${textSecondary}`}>Example with AI-generated captions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DashboardPage = () => (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className={`text-4xl font-bold ${textPrimary} mb-8`}>Upload & Generate Captions</h2>
      
      {/* Upload Section */}
      <div className={`${cardBg} rounded-2xl p-8 shadow-xl mb-8`}>
        <div className={`border-4 border-dashed ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'} rounded-xl p-12 text-center mb-8`}>
          <Upload className={`w-16 h-16 mx-auto mb-4 ${textSecondary}`} />
          <h3 className={`text-2xl font-semibold ${textPrimary} mb-2`}>Drop your video here</h3>
          <p className={`${textSecondary} mb-6`}>or click to browse files</p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
            Select Video File
          </button>
          <p className={`text-sm ${textSecondary} mt-4`}>Supports MP4, MOV, AVI • Max 500MB</p>
        </div>

        {/* Configuration Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Language Selection */}
          <div>
            <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>
              <Languages className="w-4 h-4 inline mr-2" />
              Language
            </label>
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500`}
            >
              <option value="english">English 🇺🇸</option>
              <option value="spanish">Spanish 🇪🇸</option>
              <option value="french">French 🇫🇷</option>
              <option value="german">German 🇩🇪</option>
              <option value="hindi">Hindi 🇮🇳</option>
              <option value="japanese">Japanese 🇯🇵</option>
            </select>
          </div>

          {/* Caption Style */}
          <div>
            <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>
              <Wand2 className="w-4 h-4 inline mr-2" />
              Caption Style
            </label>
            <select 
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500`}
            >
              <option value="formal">Formal 👔</option>
              <option value="casual">Casual 😊</option>
              <option value="aesthetic">Aesthetic ✨</option>
              <option value="meme">Meme-style 🔥</option>
            </select>
          </div>

          {/* Whisper Model */}
          <div>
            <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>
              <Settings className="w-4 h-4 inline mr-2" />
              Whisper Model
            </label>
            <select 
              value={whisperModel}
              onChange={(e) => setWhisperModel(e.target.value)}
              className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500`}
            >
              <option value="small">Small (Fast)</option>
              <option value="medium">Medium (Balanced)</option>
              <option value="large">Large (Accurate)</option>
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button 
          onClick={handleGenerateCaptions}
          disabled={isProcessing}
          className={`w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Sparkles className="w-5 h-5" />
          {isProcessing ? 'Processing...' : 'Generate Captions'}
        </button>

        {/* Progress Bar */}
        {isProcessing && (
          <div className="mt-6">
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-4 overflow-hidden`}>
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className={`text-center mt-2 ${textSecondary}`}>{uploadProgress}% Complete</p>
          </div>
        )}
      </div>

      {/* API Integration Info */}
      <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
        <h4 className={`text-lg font-semibold ${textPrimary} mb-3 flex items-center gap-2`}>
          <FileText className="w-5 h-5 text-purple-600" />
          API Endpoints
        </h4>
        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg p-4 font-mono text-sm ${textSecondary}`}>
          <div className="mb-2">POST /api/upload - Upload video file</div>
          <div className="mb-2">POST /api/generate - Generate captions</div>
          <div>GET /api/download - Download SRT or video</div>
        </div>
      </div>
    </div>
  );

  const PreviewPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className={`text-4xl font-bold ${textPrimary} mb-8`}>Preview & Edit Captions</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Video Preview */}
        <div className="lg:col-span-2">
          <div className={`${cardBg} rounded-2xl p-6 shadow-xl mb-6`}>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-900'} rounded-xl aspect-video flex items-center justify-center relative mb-4`}>
              <Play className="w-20 h-20 text-white opacity-50" />
              <div 
                className="absolute text-white font-bold text-center px-4 py-2 rounded"
                style={{
                  fontSize: `${fontSize}px`,
                  color: fontColor,
                  backgroundColor: bgColor + '99',
                  [captionPosition]: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                Welcome to our video tutorial
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Play Preview
              </button>
            </div>
          </div>

          {/* Caption Timeline */}
          <div className={`${cardBg} rounded-2xl p-6 shadow-xl`}>
            <h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>Edit Captions</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {captions.map((caption, idx) => (
                <div key={idx} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg p-4`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-sm font-mono ${textSecondary}`}>{caption.time}</span>
                  </div>
                  <input 
                    type="text"
                    value={caption.text}
                    onChange={(e) => {
                      const newCaptions = [...captions];
                      newCaptions[idx].text = e.target.value;
                      setCaptions(newCaptions);
                    }}
                    className={`w-full px-3 py-2 ${darkMode ? 'bg-gray-600 text-white' : 'bg-white'} border ${darkMode ? 'border-gray-500' : 'border-gray-300'} rounded-lg`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customization Panel */}
        <div className="space-y-6">
          <div className={`${cardBg} rounded-2xl p-6 shadow-xl`}>
            <h3 className={`text-xl font-semibold ${textPrimary} mb-6`}>Customize Appearance</h3>
            
            {/* Font Size */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>Font Size: {fontSize}px</label>
              <input 
                type="range"
                min="16"
                max="48"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Caption Position */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>Caption Position</label>
              <div className="grid grid-cols-3 gap-2">
                {['top', 'center', 'bottom'].map(pos => (
                  <button
                    key={pos}
                    onClick={() => setCaptionPosition(pos)}
                    className={`py-2 rounded-lg font-medium transition-all ${
                      captionPosition === pos 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : `${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`
                    }`}
                  >
                    {pos.charAt(0).toUpperCase() + pos.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>Font Color</label>
              <input 
                type="color"
                value={fontColor}
                onChange={(e) => setFontColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${textPrimary} mb-3`}>Background Color</label>
              <input 
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-12 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Export Options */}
          <div className={`${cardBg} rounded-2xl p-6 shadow-xl space-y-3`}>
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Save Captions
            </button>
            <button className={`w-full py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${textPrimary} rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
              <Download className="w-5 h-5" />
              Download .SRT
            </button>
            <button className={`w-full py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${textPrimary} rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
              <Video className="w-5 h-5" />
              Export with Captions
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className={`${cardBg} rounded-2xl p-8 shadow-xl`}>
        <h2 className={`text-3xl font-bold ${textPrimary} mb-6 text-center`}>Welcome Back</h2>
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-semibold ${textPrimary} mb-2`}>Email</label>
            <input 
              type="email"
              placeholder="your@email.com"
              className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg`}
            />
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textPrimary} mb-2`}>Password</label>
            <input 
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-300'} rounded-lg`}
            />
          </div>
          <button 
            onClick={() => {
              setIsLoggedIn(true);
              setCurrentPage('dashboard');
            }}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Sign In
          </button>
          <button 
            onClick={() => {
              setCurrentPage('dashboard');
            }}
            className={`w-full py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${textPrimary} rounded-lg font-semibold hover:shadow-lg transition-all`}
          >
            Continue as Guest
          </button>
        </div>
        <p className={`text-center mt-6 ${textSecondary}`}>
          Don't have an account? <button className="text-purple-600 font-semibold">Sign Up</button>
        </p>
      </div>
    </div>
  );

  const AdminPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className={`text-4xl font-bold ${textPrimary} mb-8`}>Admin Dashboard</h2>
      
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {[
          { icon: <Users className="w-6 h-6" />, label: 'Total Users', value: '2,547' },
          { icon: <Video className="w-6 h-6" />, label: 'Videos Processed', value: '12,834' },
          { icon: <FileText className="w-6 h-6" />, label: 'Captions Generated', value: '45,291' },
          { icon: <Globe className="w-6 h-6" />, label: 'Languages Used', value: '28' }
        ].map((stat, idx) => (
          <div key={idx} className={`${cardBg} rounded-xl p-6 shadow-lg`}>
            <div className="flex items-center justify-between mb-4">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-lg text-purple-600">
                {stat.icon}
              </div>
            </div>
            <div className={`text-3xl font-bold ${textPrimary} mb-1`}>{stat.value}</div>
            <div className={`text-sm ${textSecondary}`}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Placeholder */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
          <h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>
            <BarChart3 className="w-5 h-5 inline mr-2" />
            Usage Over Time
          </h3>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg h-64 flex items-center justify-center ${textSecondary}`}>
            Chart Placeholder
          </div>
        </div>
        <div className={`${cardBg} rounded-xl p-6 shadow-lg`}>
          <h3 className={`text-xl font-semibold ${textPrimary} mb-4`}>
            <Globe className="w-5 h-5 inline mr-2" />
            Popular Languages
          </h3>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg h-64 flex items-center justify-center ${textSecondary}`}>
            Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      <NavBar />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'preview' && <PreviewPage />}
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'admin' && <AdminPage />}

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800/60' : 'bg-white/60'} backdrop-blur-sm border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`${textSecondary} text-center md:text-left mb-4 md:mb-0`}>
              © 2025 CaptionAI. Powered by Advanced AI Technology.
            </div>
            <div className="flex gap-6">
              <button className={`${textSecondary} hover:text-purple-600 transition-colors`}>Feedback</button>
              <button className={`${textSecondary} hover:text-purple-600 transition-colors`}>Report Issue</button>
              <button className={`${textSecondary} hover:text-purple-600 transition-colors`}>API Docs</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}