import { Injectable } from '@angular/core';
import { Card } from '../class/card';
import { Baralho } from '../class/Baralho'
import { CardService } from 'src/app/services/card.service';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { AngularFireDatabase } from '@angular/fire/database'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {
  private _listaBaralho: Baralho[] = []
  //private _cards: Card[] = []
  private _PATH: string = 'baralhos/'
  constructor(private db: AngularFireDatabase, private cardService: CardService) {

  }

  createBaralho(baralho: Baralho) {
    return this.db.database.ref(this._PATH).push(baralho)
  }

  editBaralho(baralho: Baralho) {
    return this.db.database.ref(this._PATH).child(baralho.getId()).update(baralho)
  }

  removeBaralho(key: any) {
    return this.db.database.ref(this._PATH + key).remove()
  }


  getBaralhosDB() {
    return this.db.list(this._PATH).snapshotChanges().pipe(
      map((action) => {
        return action.map((dados) => ({
          key: dados.payload.key,
          data: dados.payload.val()
        }))
      })
    )
  }

  getBaralhoDB(key: string) {
    return this.db.list(this._PATH, ref => ref.orderByKey().equalTo(key))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((dados) => ({
            key: dados.payload.key,
            data: dados.payload.val()
          }))
        })
      )
  }



  public cadastrar(nome: string, categoria: string): Baralho {
    let _baralho = new Baralho(nome, categoria)
    console.log(this.createBaralho(_baralho))
    return _baralho
  }
  public excluir(id): boolean {
    for (let i = 0; i < this._listaBaralho.length; i++) {
      if ((this._listaBaralho[i].getId() == id)) {
        this.removeBaralho(this._listaBaralho[i].getId())
        this._listaBaralho.splice(i, 1)

        return true
      }
    }
  }

  public removeCard(idBaralho: string, idCard: any): void {
    let baralho = this.getBaralhoPorId(idBaralho)
    for (let i = 0; i < baralho.getListaCards().length; i++) {
      if ((baralho.getListaCards()[i] == idCard)) {
        baralho.getListaCards().splice(i, 1)
        this.editBaralho(baralho)
      }
    }
  }
  public adicionarBaralho(baralho: Baralho): void {
    this._listaBaralho.push(baralho)
    this.editBaralho(baralho)
  }


  public teste() {
    let baralhos = this.getBaralhoDB("-Mm9YUzj5J0G8D7YsmBW")
    let baralho_buscado = null
    baralho_buscado = baralhos.forEach(async data => {
      data.forEach(async baralho => {
        baralho_buscado = new Baralho(baralho.data["_nome"], baralho.data["_categoria"])
        baralho_buscado.setId(baralho.key)
      })
    })
    return baralho_buscado
  }

  public getBaralhos(): Baralho[] {

    this._listaBaralho = []
    let baralhos = this.getBaralhosDB()
    baralhos.forEach(data => {
      data.forEach(baralho => {
        let _baralho = new Baralho(baralho.data["_nome"], baralho.data["_categoria"])
        _baralho.setId(baralho.key)
        _baralho.setListaCards(baralho.data["_listaCards"])
        this._listaBaralho.push(_baralho)
      })
    })
    return this._listaBaralho
  }

  public getBaralhoPorId(id: string): Baralho {
    for (let i = 0; i < this._listaBaralho.length; i++) {
      if ((this._listaBaralho[i].getId() == id)) {
        return this._listaBaralho[i]
      }
    }
    return null
  }
  public getCardsDoBaralhoPorBaralho(idBaralho: string): Card[] {
    let i = 0
    let listaCards = []
    do {
      if (this._listaBaralho[i].getId() == idBaralho){
        let cards = this._listaBaralho[i].getListaCards()
        for (let j = 0; j < cards.length; j++) {
            let card = this.cardService.getCardPorId(cards[j])
            if(card != null)
              if(card.getId() == cards[j])
                listaCards.push(card)
        }
      }
      return listaCards
      i += 1
    } while (this._listaBaralho[i].getId() != idBaralho && i < this._listaBaralho.length)

    return []
  }

  public adicionarCardPorId(idBaralho: string, idCard: String) {
    let _baralho = this.getBaralhoPorId(idBaralho)

    if (_baralho != null) {
      _baralho.addCard(idCard)
      this.editBaralho(_baralho)

    } else
      throw "Baralho ou Card Não encontrado"
  }

  public editar(idBaralho, nome, categoria): void {
    let _baralho = this.getBaralhoPorId(idBaralho)
    if (_baralho != null) {
      _baralho.setNome(nome)
      _baralho.setCategoria(categoria)
      this.editBaralho(_baralho)
    }
    else
      throw "Baralho não econtrado"
  }

  public updateAllBaralhos() {
    this._listaBaralho.forEach(baralho => {
      this.editBaralho(baralho)
    })
  }

}
