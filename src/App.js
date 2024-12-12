import CreditCard from './components/CreditCard'

// Side note: some of these are valid credit card numbers, some not
const cardData = [
  { bank:"Blastercard",   number:"3424309424730221", security:851,  expirationDate:"1/25",   cardHolder:"IMMAN GHANEI" },
  { bank:"PAULUS-BANK",  number:"5010127323605442", security:971,  expirationDate:"12/25",  cardHolder:"YOUSIF PAULUS" },
  { bank:"N99",           number:"5602211500020957", security:318,  expirationDate:"9/25",   cardHolder:"FELIX KALSKI" },
  { bank:"Blastercard",   number:"5264939690937718", security:521,  expirationDate:"3/25",   cardHolder:"CONNY BOHLER" },
  { bank:"Credit XYZ",    number:"4913127477323785", security:377,  expirationDate:"2/25",   cardHolder:"ALI ABI RAMAZAN" },
  { bank:"Pfannerstill",  number:"4381582680334453", security:976,  expirationDate:"1/25",   cardHolder:"NILOFAR YOUSIFI" },
  { bank:"Durga Inc.",    number:"4017950503409412", security:111,  expirationDate:"3/25",   cardHolder:"SANDOR OPIOK" },
  { bank:"Glover Group",  number:"4913483071674697", security:263,  expirationDate:"8/25",   cardHolder:"CHRISTOPH KLEMTZ" },
  { bank:"Durga Inc.",    number:"3784329793724821", security:207,  expirationDate:"11/25",  cardHolder:"ANDRÉ SEMM" },
  { bank:"Viba",          number:"4913571483628945", security:245,  expirationDate:"12/25",  cardHolder:"FRITZ FLORKOWSKY" },
  { bank:"Blastercard",   number:"4260369782822222", security:289,  expirationDate:"12/25",  cardHolder:"Julianne Willbourne" },
  { bank:"Ledner LLC",    number:"5048371056777855", security:951,  expirationDate:"8/25",   cardHolder:"Cletis Blaydes "}
]

export default function App() {
  return (
    <main>
      {cardData.map((card, i) => <CreditCard key={i} {...card}/>)}
    </main>
  )
}
