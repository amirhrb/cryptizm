import { ReactNode } from 'react';

import { Lalezar } from 'next/font/google';

import './globals.css';

import Header from './components/Header';
import Footer from './components/Footer';

const lalezar = Lalezar({
  subsets: ['arabic'],
  weight: '400',
});

interface Props {
  children: ReactNode;
}

const Index = ({ children }: Props) => {
  return (
    <html>
      <body className={lalezar.className}>
        <Header />
        <main className="w-full flex justify-center bg-layout">
          <div className="max-w-lg">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Index;
