import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Pasek nawigacyjny */}
      <nav className="navbar">
        <div className="navbar-brand">Wypożyczalnia XYZ</div>
        <div className="navbar-links">
          <NavLink to="/customers" className="nav-link">Klienci</NavLink>
          <NavLink to="/reservations" className="nav-link">Rezerwacje</NavLink>
          <NavLink to="/cars" className="nav-link">Samochody</NavLink>
        </div>
      </nav>

      <header className="header">
        <h1>Witamy w Wypożyczalni Samochodów Abel!</h1>
        <p>Znajdź idealny samochód na każdą okazję.</p>
        <button className="btn-main">Zarezerwuj teraz</button>
      </header>

      {/* Główna treść */}
      <main className="main-content">
        <section className="about-us">
          <h2>O nas</h2>
          <p>
          W wypożyczalni samochodów Abel jesteśmy pasjonatami motoryzacji, którzy wierzą, że każda podróż powinna być wyjątkowa i niezapomniana. Naszym celem jest dostarczanie wysokiej jakości usług wypożyczalni samochodów, które spełnią oczekiwania nawet najbardziej wymagających klientów.
Oferujemy szeroki wybór pojazdów, od ekonomicznych aut miejskich, idealnych na szybkie przemieszczanie się po zatłoczonych ulicach, po luksusowe samochody sportowe, które zapewnią niezapomniane wrażenia z jazdy. Nasza flota jest regularnie aktualizowana, aby zapewnić naszym klientom dostęp do najnowszych modeli i technologii.
Rozumiemy, że każdy klient ma inne potrzeby, dlatego nasza oferta jest dostosowana do indywidualnych preferencji. Dla osób ceniących komfort i elegancję mamy w ofercie samochody premium, a dla tych, którzy szukają ekologicznych rozwiązań, proponujemy nowoczesne pojazdy elektryczne i hybrydowe. Dbamy o to, by każdy klient znalazł u nas auto idealnie dopasowane do swoich potrzeb, czy to na krótką podróż po mieście, czy na dłuższą wyprawę.
Wypożyczalnia Samochodów Abel to nie tylko auta, to także wyjątkowa obsługa klienta. Nasz doświadczony zespół jest zawsze gotowy służyć pomocą i doradzić w wyborze najlepszego pojazdu. Dodatkowo, oferujemy elastyczne warunki wynajmu, atrakcyjne ceny oraz szereg dodatkowych usług, takich jak ubezpieczenie, pomoc drogowa czy opcje dostawy samochodu pod wskazany adres.
Jesteśmy przekonani, że nasze zaangażowanie w zapewnienie najwyższej jakości usług oraz nasza pasja do motoryzacji sprawią, że każda podróż z Wypożyczalnią Samochodów Abel będzie nie tylko komfortowa, ale i niezapomniana. Zapraszamy do skorzystania z naszej oferty i doświadczenia wyjątkowości naszej wypożyczalni.
          </p>
        </section>
      </main>

      {/* Stopka */}
      <footer className="footer">
        <p>© 2024 Wypożyczalnia Abel. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
