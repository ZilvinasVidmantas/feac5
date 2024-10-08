# Komandinis darbas

## Prie pradedant:

### Žmogus A
* Išsirinkti žmogų kuris sukurna naują repozitoriją ir įdės į ją pradinę projekto versiją
  https://github.com/rokasandreikenas/accelerator/tree/main/10.%20full-stack-app
* Žmogus sukūręs repozitoriją turi pakvietsi kolegą būti projekto "coloborator", kolega savo ruoštu sutikti

### Žmogus B
* Sukurti užduočių lentą ir pakvieti kolegą: https://kanbanflow.com/
* Suformuoti 4 užduotis, kurios yra aprašytos https://www.iamjunior.lt/roadmap/1 {Typescript - Praktika}
  Visi nepradėti darbai turi būti kiltyje "Todo" arba "New"

## Darbo komandoje principas
Kiekvienas iš komandos narių turi susiurti atskirą šaką, kurioje atliks savo pasirinktą darbą
  * Prieš pradedant darbus, susiskirtykite savo darbą į mažesnius darbelius, kurie užtruktų ne daugiau 2 val.
  * Kiekvieną mažą darbelį atlikus reikia sukurti commit'ą ir pa'push'inti savo šaką
  * Atlikus visus darbelius (visą didelį darbą) reikia suskurti Pull Requestą, ir duoti kolgai patikrinti
  * jei kolega randa patarimų/pataisymų, turite juos pataisyti ir vėl pa'push'inti šaką
  * Tik tuomet muomet kolega pabaigia tikrinti, ir neturi jokių pastebėjimų, galite šaką apjungti su pagrindine šaka

## Vieno task'o atliko tvarka
  1. Pasirenkame pagrindinę šaką (main) ir parsisiunčiame jos naujausią versiją:
  ```bash
    git checkout main
    git pull
  ```
  3. kanban.com perkeliate darbą į skiltį "In Progress"

  4. Sukuriame naują šaką, esamos (main) šakos pagrindu 
  ```
    git checkout -b nauja-šaka
  ```
  5. kanban.com perkeliate darbą į skiltį "In Progress"

  6. Atlike darbą žingsniais (commit'ais):
    Vieno žingsnelio atlikimas:
      * Parašomas kodas, kuris atlieka vieną smulkų darbelį (10 min - 120 min)
      * Užfiksuojami pakitimai
      ```bash
        git add .
      ```
      * Sukuriamas žingsnis (commit'as):
      ```bash
        git commit -m "darbą apibūdinantis vienas sakinys"
      ```
      * Darbas paviešimas globaliai:
      ```bash
        git push
      ```
  7. Persijungiate į pagrindinę šaką ir parsisiunčiate jos naujausią versiją:
  ```
    git checkout main 
    git pull
  ```
  8. Grįžtame į savo šaką:
  ```
    git checkout nauja-šaka
  ```
  9. Apjungiame šakas
    git merge main
      Jeigu nebuvo konfliktų tarp apjungiamų šakų, nieko daryti nereikia.
      Jeigu buvo konfliktų, turite apjungti konfiktuojančias dalis pasitariant su kolega.
        * Parašomas kodas
        * Užfiksuojami pakitimai
        ```
          git add .
        ```
        * Sukuriamas žingsnis (commit'as):
        ```
          git commit -m "darbą apibūdinantis vienas sakinys"
        ```
        * Darbas paviešimas globaliai:
        ```
          git push
        ```
  10. Atsidaro Github.com repozitoriją ir joje sukuriame pull Requestą 
  11. kanban.com perkeliate darbą į skiltį "Review"
  12. Sulaukę kolegos žinutės (per teams), kad buvo atliktas patikrinimas:
    1. Jeigu nėra komentarų, spaudžiate merge branch 
    2. Jeigu yra problemų, jas išsprendžiate IR KARTOJE PUNTUS 3, 4, 5, 6, 8
  13. Ištrinate šaką lokaliai:
      ```
        git branch -d nauja-šaka
      ```
  14. Ištrinkite šaką naudodamiesi github.com puslapiu
  15. kanban.com perkeliate darbą į skiltį "Done"





