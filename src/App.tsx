/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import TechLab from './components/TechLab';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen">
      {/* Background textures and shapes */}
      <div className="bg-noise fixed inset-0 z-0 opacity-5" />
      <div className="fixed top-1/4 -right-24 w-96 h-96 bg-lumina-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-24 w-96 h-96 bg-lumina-brutal/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Actual Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Gallery />
        <TechLab />
        <Footer />
      </div>
    </main>
  );
}
