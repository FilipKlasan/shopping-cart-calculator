import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  odeca = [
    { 
      mz: 'Muškarci',
      gd: [
        {
          naslov: 'Gornji deo',
          proizvodi: [
            { naziv: 'Proizvod 465456', oProizvodu: 'Informacije o proizvodu', cena: 10799.99, kolicina: 0 },
            { naziv: 'Proizvod 2342', oProizvodu: 'Informacije o proizvodu', cena: 5200, kolicina: 0 },
            { naziv: 'Proizvod 45634', oProizvodu: 'Informacije o proizvodu', cena: 8600, kolicina: 0 },
            { naziv: 'Proizvod 86786', oProizvodu: 'Informacije o proizvodu', cena: 23400, kolicina: 0 }
          ]
        },
        {
          naslov: 'Donji deo',
          proizvodi: [
            { naziv: 'Proizvod 2437', oProizvodu: 'Informacije o proizvodu', cena: 18000, kolicina: 0 },
            { naziv: 'Proizvod 35677', oProizvodu: 'Informacije o proizvodu', cena: 4599.99, kolicina: 0 },
            { naziv: 'Proizvod 764567', oProizvodu: 'Informacije o proizvodu', cena: 35000, kolicina: 0 },
            { naziv: 'Proizvod 82432', oProizvodu: 'Informacije o proizvodu', cena: 17600, kolicina: 0 }
          ]
        }
      ]
    },
    { 
      mz: 'Žene',
      gd: [
        {
          naslov: 'Gornji deo',
          proizvodi: [
            { naziv: 'Proizvod 1053', oProizvodu: 'Informacije o proizvodu', cena: 12500, kolicina: 0 },
            { naziv: 'Proizvod 645756', oProizvodu: 'Informacije o proizvodu', cena: 6080, kolicina: 0 },
            { naziv: 'Proizvod 36488', oProizvodu: 'Informacije o proizvodu', cena: 9499.99, kolicina: 0 },
            { naziv: 'Proizvod 3234', oProizvodu: 'Informacije o proizvodu', cena: 28000, kolicina: 0 }
          ]
        },
        {
          naslov: 'Donji deo',
          proizvodi: [
            { naziv: 'Proizvod 86483', oProizvodu: 'Informacije o proizvodu', cena: 19999.99, kolicina: 0 },
            { naziv: 'Proizvod 59679', oProizvodu: 'Informacije o proizvodu', cena: 4000, kolicina: 0 },
            { naziv: 'Proizvod 64996', oProizvodu: 'Informacije o proizvodu', cena: 39000, kolicina: 0 },
            { naziv: 'Proizvod 50043', oProizvodu: 'Informacije o proizvodu', cena: 19600, kolicina: 0 }
          ]
        }
      ]
    }
  ];
 
  obuca = [
    { 
      mz: 'Muškarci',
      cp: [
        {
          naslov: 'Cipele',
          proizvodi: [
            { naziv: 'Proizvod 701456', oProizvodu: 'Informacije o proizvodu', cena: 10799.99, kolicina: 0 },
            { naziv: 'Proizvod 53452', oProizvodu: 'Informacije o proizvodu', cena: 5200, kolicina: 0 },
            { naziv: 'Proizvod 7683117', oProizvodu: 'Informacije o proizvodu', cena: 8600, kolicina: 0 },
            { naziv: 'Proizvod 6454643', oProizvodu: 'Informacije o proizvodu', cena: 23400, kolicina: 0 }
          ]
        },
        {
          naslov: 'Patike',
          proizvodi: [
            { naziv: 'Proizvod 534800', oProizvodu: 'Informacije o proizvodu', cena: 18000, kolicina: 0 },
            { naziv: 'Proizvod 90023', oProizvodu: 'Informacije o proizvodu', cena: 4599.99, kolicina: 0 },
            { naziv: 'Proizvod 7056', oProizvodu: 'Informacije o proizvodu', cena: 35000, kolicina: 0 },
            { naziv: 'Proizvod 777555777', oProizvodu: 'Informacije o proizvodu', cena: 17600, kolicina: 0 }
          ]
        }
      ]
    },
    { 
      mz: 'Žene',
      cp: [
        {
          naslov: 'Cipele',
          proizvodi: [
            { naziv: 'Proizvod 86488', oProizvodu: 'Informacije o proizvodu', cena: 12500, kolicina: 0 },
            { naziv: 'Proizvod 974747', oProizvodu: 'Informacije o proizvodu', cena: 6080, kolicina: 0 },
            { naziv: 'Proizvod 799668', oProizvodu: 'Informacije o proizvodu', cena: 9499.99, kolicina: 0 },
            { naziv: 'Proizvod 172717', oProizvodu: 'Informacije o proizvodu', cena: 28000, kolicina: 0 }
          ]
        },
        {
          naslov: 'Patike',
          proizvodi: [
            { naziv: 'Proizvod 456845', oProizvodu: 'Informacije o proizvodu', cena: 19999.99, kolicina: 0 },
            { naziv: 'Proizvod 2654', oProizvodu: 'Informacije o proizvodu', cena: 4000, kolicina: 0 },
            { naziv: 'Proizvod 856743', oProizvodu: 'Informacije o proizvodu', cena: 39000, kolicina: 0 },
            { naziv: 'Proizvod 75956', oProizvodu: 'Informacije o proizvodu', cena: 19600, kolicina: 0 }
          ]
        }
      ]
    }
  ];

  konacnaCena: number = 0;

  constructor() {}

  plus(proizvod) {
    proizvod.kolicina += 1;
  }

  minus(proizvod) {
    if(proizvod.kolicina > 0) {
      proizvod.kolicina -= 1;
    }
  }

  total() {
    this.konacnaCena = 0;
    for(let i = 0; i < this.odeca.length; i++) {
      for(let j = 0; j < this.odeca[i].gd.length; j++) {
        for(let k = 0; k < this.odeca[i].gd[j].proizvodi.length; k++) {
            this.konacnaCena += this.odeca[i].gd[j].proizvodi[k].cena * this.odeca[i].gd[j].proizvodi[k].kolicina;
        }
      }
    }
    for(let i = 0; i < this.obuca.length; i++) {
      for(let j = 0; j < this.obuca[i].cp.length; j++) {
        for(let k = 0; k < this.obuca[i].cp[j].proizvodi.length; k++) {
            this.konacnaCena += this.obuca[i].cp[j].proizvodi[k].cena * this.obuca[i].cp[j].proizvodi[k].kolicina;
        }
      }
    }
  }
  
}