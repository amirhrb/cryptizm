import Link from 'next/link';

import Button from '@/helpers/mui-elements/Button';
import MoreModal from './MoreModal';

const navLinks = {
  fa: ['مارکت', 'چارت ها', 'درباره'],
  en: ['market', 'charts', 'about'],
};

const HeaderComponent = () => {
  return (
    <header className="w-full sticky top-0 bg-layout flex items-center justify-center z-20">
      <section className="w-[90%] max-w-3xl px-2 py-2 flex align-middle justify-between">
        <Link
          href="/"
          className="text-primary text-xl font-bold hover:text-primary active:text-primary"
        >
          Cryptizm
        </Link>
        <nav className="w-[35%] hidden sm:flex items-center justify-between">
          {navLinks.fa.map((link, index) => (
            <Link key={index + link} href={`${navLinks.en[index]}`}>
              {link}
            </Link>
          ))}
        </nav>
        <MoreModal navLinks={navLinks} />
        <Button variant="contained" className="hidden sm:block">
          ورود
        </Button>
      </section>
    </header>
  );
};
export default HeaderComponent;
