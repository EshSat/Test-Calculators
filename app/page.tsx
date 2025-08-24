'use client';

import { useState } from 'react';
import { Calculator, Shield, TrendingUp, Users, Star, CheckCircle } from 'lucide-react';
import EMICalculator from './(site)/components/EMICalculator';
import DTICalculator from './(site)/components/DTICalculator';
import InsuranceEstimator from './(site)/components/InsuranceEstimator';
import Tabs from './(site)/components/Tabs';
import AdPlaceholder from './(site)/components/AdPlaceholder';
import FAQ from './(site)/components/FAQ';
import Guide from './(site)/components/Guide';

export default function Page() {
  const [activeTab, setActiveTab] = useState('emi');

  const features = [
    {
      icon: Calculator,
      title: 'EMI Calculator',
      description: 'Calculate your monthly loan payments with precision',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: TrendingUp,
      title: 'DTI Calculator',
      description: 'Assess your debt-to-income ratio for better financial planning',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Insurance Estimator',
      description: 'Get accurate insurance premium estimates',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <main>
      {/* Header / Hero */}
      <header className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart Financial
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Calculators
              </span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Make informed financial decisions with our comprehensive suite of calculators. 
              Plan your loans, assess your debt ratio, and estimate insurance costs with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group">
                Get Started
                <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Financial Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make smart financial decisions in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-hover group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Select the tool that best fits your financial planning needs
            </p>
          </div>

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div className="mt-8">
            {activeTab === 'emi' && <EMICalculator />}
            {activeTab === 'dti' && <DTICalculator />}
            {activeTab === 'insurance' && <InsuranceEstimator />}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-pink-600">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-emerald-600">Free</div>
              <div className="text-gray-600">Always</div>
            </div>
          </div>
        </div>
      </section>

      <AdPlaceholder />
      <Guide />
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Financial Calculators</h3>
              <p className="text-gray-400">
                Your trusted partner for smart financial planning and decision making.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Calculator className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Calculators</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DTI Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insurance Estimator</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Financial Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Financial Calculators. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}