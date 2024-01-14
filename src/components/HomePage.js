import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';


export default function HomePage() {
  return (
    <div className="pt-16"> 
       <nav className="fixed top-0 w-full bg-white z-50 shadow-lg">
        <div className="flex justify-end items-center mr-1">
          <NavLink to="/reservations" class="switch ghost info mr-4"> Rezerwacje </NavLink>
          <NavLink to="/cars" class="switch ghost info"> Samochody </NavLink>
        </div>      
        </nav>

      <div className="container mx-auto px-4 py-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Witamy w Wypożyczalni Samochodów Abel!</h1>
        <p className="text-lg text-gray-600">Znajdź idealny samochód na każdą okazję.</p>
        <Link to="/reservations" class="btn outline info mr-4 my-4"> Zarezerwuj teraz </Link>
        <Link to="/cars" class="btn outline info"> Sprawdź dostępne samochody </Link>
      </header>

        {/* Sekcja "O nas" */}

      <main className="container mx-auto px-4 py-8">
        <section className="my-4 p-6 bg-white shadow-lg rounded-lg mx-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">O nas</h2>
          <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              W wypożyczalni samochodów Abel jesteśmy pasjonatami motoryzacji, którzy wierzą, że każda podróż powinna być wyjątkowa i niezapomniana. Naszym celem jest dostarczanie wysokiej jakości usług wypożyczalni samochodów, które spełnią oczekiwania nawet najbardziej wymagających klientów.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 text-lg leading-relaxed">
              Oferujemy szeroki wybór pojazdów, od ekonomicznych aut miejskich, idealnych na szybkie przemieszczanie się po zatłoczonych ulicach, po luksusowe samochody sportowe, które zapewnią niezapomniane wrażenia z jazdy. Nasza flota jest regularnie aktualizowana, aby zapewnić naszym klientom dostęp do najnowszych modeli i technologii.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Rozumiemy, że każdy klient ma inne potrzeby, dlatego nasza oferta jest dostosowana do indywidualnych preferencji. Dla osób ceniących komfort i elegancję mamy w ofercie samochody premium, a dla tych, którzy szukają ekologicznych rozwiązań, proponujemy nowoczesne pojazdy elektryczne i hybrydowe.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dbamy o to, by każdy klient znalazł u nas auto idealnie dopasowane do swoich potrzeb, czy to na krótką podróż po mieście, czy na dłuższą wyprawę.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Wypożyczalnia Samochodów Abel to nie tylko auta, to także wyjątkowa obsługa klienta. Nasz doświadczony zespół jest zawsze gotowy służyć pomocą i doradzić w wyborze najlepszego pojazdu. Dodatkowo, oferujemy elastyczne warunki wynajmu, atrakcyjne ceny oraz szereg dodatkowych usług, takich jak ubezpieczenie, pomoc drogowa czy opcje dostawy samochodu pod wskazany adres.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jesteśmy przekonani, że nasze zaangażowanie w zapewnienie najwyższej jakości usług oraz nasza pasja do motoryzacji sprawią, że każda podróż z Wypożyczalnią Samochodów Abel będzie nie tylko komfortowa, ale i niezapomniana. Zapraszamy do skorzystania z naszej oferty i doświadczenia wyjątkowości naszej wypożyczalni.
            </p>
          </div>
        </section>
      </main>
    </div>

        {/* Sekcja Kontakt */}
	   
        <main className="container mx-auto px-4 py-8">
        <section className="my-4 p-6 bg-white shadow-lg rounded-lg mx-4 flex flex-wrap md:flex-nowrap">
          <div className="flex-1 mb-6 md:mb-0 md:mr-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kontakt</h2>
            <p className="text-lg text-gray-800 font-semibold">Wypożyczalnia Samochodów Abel</p>
            <p className="text-gray-600">1234 Aleja Wolności, 00-987 Warszawa</p>
            <p className="text-gray-600">Tel: +48 123 456 789</p>
            <p className="text-gray-600">E-mail: kontakt@abel.pl</p>
          </div>
          <div className="flex-1">
            <p className="text-gray-600 mb-4">Znajdź nas na Google Maps:</p>
            <iframe
              className="w-full h-64 rounded-lg"
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0"
              title="Wypożyczalnia Samochodów Abel"
              src="https://maps.google.com/maps?q=Warszawa%201234%20Aleja%20Wolności&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-600">
        <p>© 2024 Wypożyczalnia Abel. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
