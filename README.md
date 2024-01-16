
# Projekt wypożyczalni samochodów "Abel"

Projekt aplikacji full-stack, będącej aplikacją do wypożyczalni samochodów.\
Technologie użyte przy projektowaniu aplikacji: 
- React.JS
- NodeJS
- Express
- MongoDB
- Tailwinds


## Zrzuty ekranu

  Widok głównej strony:\

![App Screenshot](https://i.ibb.co/hswVhms/01.png)


  Formularz rezerwacji (model samochodu wybierany z listy przez użytkownika): 
![App Screenshot](https://i.ibb.co/Pj5ZNhD/02.png)


  Widok galerii samochodów dostępnych w wypożyczalni:
![App Screenshot](https://i.ibb.co/mNb1LXf/03.png)


## Uruchomienie aplikacji

Do uruchomienia aplikacji wymagane jest wykonanie w folderze aplikacji polecenia:
 
```bash
  npm start
```

Do uruchomienia serwera Express wymagane jest wykonanie w folderze *backend* polecenia:
```bash
  node .\server.js
```
Serwer działa na porcie 5771.

## Baza danych

Na potrzeby projektu, utworzono 3 kolekcje w bazie danych MongoDB:
- *cars* - jako samochody będące na stanie wypożyczalni samochodów,
- *customers* - jako dane klientów,
- *reservations* - jako dane dotyczące rezerwacji w wypożyczalni samochódów,

Przykładowe modele danych do wykorzystania w bazie danych znajdują się w folderze *database-models*. 

__Przedstawione dane zostały wygenerowane z użyciem *ChatGPT*, nie przedstawiają rzeczywistych danych.__
## 🚀 O mnie
Julia. GEEK, cybersec (mainly blue, soon red 😶‍🌫️).
