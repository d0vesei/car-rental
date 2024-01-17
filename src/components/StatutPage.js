import React from 'react';

const StatutPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-10">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Regulamin Wypożyczalni Samochodów Abel</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">1. Postanowienia ogólne</h2>
          <p className="text-gray-700">
            Niniejszy regulamin określa zasady wypożyczania samochodów w Wypożyczalni Samochodów Abel.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">2. Dane kontaktowe</h2>
          <p className="text-gray-700">Wypożyczalnia Samochodów Abel</p>
          <p className="text-gray-700">Adres: 1234 Aleja Wolności, 00-987 Warszawa</p>
          <p className="text-gray-700">Tel: +48 123 456 789</p>
          <p className="text-gray-700">E-mail: kontakt@abel.pl</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">3. Warunki wypożyczenia</h2>
          <p className="mb-3 text-gray-700">
            3.1. Wypożyczalnia zastrzega sobie prawo do odmowy wypożyczenia samochodu bez podania przyczyny.
          </p>
          <p className="mb-3 text-gray-700">
            3.2. Wypożyczalnia może wymagać przedstawienia ważnego prawa jazdy oraz dokumentu tożsamości.
          </p>
          <p className="mb-3 text-gray-700">
            3.3. Klient zobowiązuje się do zachowania samochodu w czystości i porządku w trakcie wypożyczenia.
          </p>
          <p className="mb-3 text-gray-700">
            3.4. W przypadku uszkodzenia lub awarii samochodu podczas wypożyczenia, Klient zobowiązuje się niezwłocznie zgłosić to wypożyczalni oraz postępować zgodnie z jej instrukcjami.
          </p>
          <p className="mb-3 text-gray-700">
            3.5. Wypożyczalnia nie ponosi odpowiedzialności za przedmioty pozostawione w samochodzie przez Klienta.
          </p>
          <p className="text-gray-700">
            3.6. Zabrania się palenia tytoniu w samochodach wypożyczalni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatutPage;
