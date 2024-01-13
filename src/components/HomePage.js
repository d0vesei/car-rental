import React from 'react';
import { NavLink } from 'react-router-dom';
import 'tailwindcss/tailwind.css';


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center py-4">
        <NavLink to="/customers" className="text-indigo-600 hover:text-indigo-800 font-semibold">Klienci</NavLink>
        <NavLink to="/reservations" className="text-indigo-600 hover:text-indigo-800 font-semibold">Rezerwacje</NavLink>
        <NavLink to="/cars" className="text-indigo-600 hover:text-indigo-800 font-semibold">Samochody</NavLink>
      </nav>

      <header className="text-center my-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Witamy w Wypożyczalni Samochodów Abel!</h1>
        <p className="text-lg text-gray-600">Znajdź idealny samochód na każdą okazję.</p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Zarezerwuj teraz</button>
      </header>

      <main className="mb-8">
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">O nas</h2>
          <p className="text-gray-600 text-lg">
            W wypożyczalni samochodów Abel jesteśmy pasjonatami motoryzacji, którzy wierzą, że każda podróż powinna być wyjątkowa i niezapomniana. Naszym celem jest dostarczanie wysokiej jakości usług wypożyczalni samochodów, które spełnią oczekiwania nawet najbardziej wymagających klientów.
          Oferujemy szeroki wybór pojazdów, od ekonomicznych aut miejskich, idealnych na szybkie przemieszczanie się po zatłoczonych ulicach, po luksusowe samochody sportowe, które zapewnią niezapomniane wrażenia z jazdy. Nasza flota jest regularnie aktualizowana, aby zapewnić naszym klientom dostęp do najnowszych modeli i technologii.
          Rozumiemy, że każdy klient ma inne potrzeby, dlatego nasza oferta jest dostosowana do indywidualnych preferencji. Dla osób ceniących komfort i elegancję mamy w ofercie samochody premium, a dla tych, którzy szukają ekologicznych rozwiązań, proponujemy nowoczesne pojazdy elektryczne i hybrydowe. Dbamy o to, by każdy klient znalazł u nas auto idealnie dopasowane do swoich potrzeb, czy to na krótką podróż po mieście, czy na dłuższą wyprawę.
          Wypożyczalnia Samochodów Abel to nie tylko auta, to także wyjątkowa obsługa klienta. Nasz doświadczony zespół jest zawsze gotowy służyć pomocą i doradzić w wyborze najlepszego pojazdu. Dodatkowo, oferujemy elastyczne warunki wynajmu, atrakcyjne ceny oraz szereg dodatkowych usług, takich jak ubezpieczenie, pomoc drogowa czy opcje dostawy samochodu pod wskazany adres.
          Jesteśmy przekonani, że nasze zaangażowanie w zapewnienie najwyższej jakości usług oraz nasza pasja do motoryzacji sprawią, że każda podróż z Wypożyczalnią Samochodów Abel będzie nie tylko komfortowa, ale i niezapomniana. Zapraszamy do skorzystania z naszej oferty i doświadczenia wyjątkowości naszej wypożyczalni.
          
          </p>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-600">
        <p>© 2024 Wypożyczalnia Abel. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
