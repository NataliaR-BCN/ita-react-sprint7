import { useState, useEffect } from "react";
import servicesPortfolio from './data/services';
import Panell from "./components/Panell/Panell";


function App() {

  const [servicesSelected, setServicesSelected] = useState([ 
    { webPage: false },
    { seoConsulting: false },
    { googleAdsCampaign: false }

  ]);

  const [webPageNumbers, setWebPageNumbers] = useState({ numPages: 1 })

  const [webPageLangs, setWebPageLangs] = useState({ numLangs: 1 })

  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setTotalPrice(
        (servicesSelected[0].webPage ? (servicesPortfolio[0].price +
         webPageNumbers.numPages * webPageLangs.numLangs * 30): 0) +
        (servicesSelected[1].seoConsulting ? servicesPortfolio[1].price : 0) +
        (servicesSelected[2].googleAdsCampaign ? servicesPortfolio[2].price : 0) 
        
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesSelected, webPageNumbers, webPageLangs]); 


  function handleChange(event) {
    setServicesSelected(prevServicesSelected => {
      const { name, checked } = event.target;

      const serviceIndex = servicesSelected.findIndex(service => service.hasOwnProperty(name));

      return [
        ...prevServicesSelected,
        servicesSelected[serviceIndex][name] = checked 
      ]
    })
  }

  
  function handleChangeNumbers(event) {
      const { name, value } = event.target;
    
      if ( value <= 0 ) {
        return
      } else {
          name === 'numPages' ? setWebPageNumbers({numPages : Number(value)}) :
                                setWebPageLangs({numLangs : Number(value)}) 
      }

  }


  const decreaseNumber = (event) => { 
    const { name } = event.target;

    if (name === 'numPages') {
      webPageNumbers.numPages > 1 && setWebPageNumbers({numPages : webPageNumbers.numPages -1})
    }

    if (name === 'numLangs') {
      webPageLangs.numLangs > 1 &&  setWebPageLangs({numLangs : webPageLangs.numLangs -1})
    }
    
  }
    

  const increaseNumber = (event) => {
    const { name } = event.target;

    name === 'numPages' ? setWebPageNumbers({numPages : webPageNumbers.numPages + 1}) : 
                          setWebPageLangs({numLangs : webPageLangs.numLangs + 1})

  }
  

  return (   
    <>
      
      <p>Quin/s servei/s necessites?</p>
      <form>
          <p><input
          type="checkbox"
          id="webPage"
          checked={servicesSelected[0].webPage}
          onChange={handleChange}
          name="webPage"
        />
        <label htmlFor="webPage">Una pàgina web (500€)</label>
        </p> 
        <div>
          {servicesSelected[0].webPage && <Panell handle={handleChangeNumbers}  
          numPagesValue={webPageNumbers.numPages} numLangsValue={webPageLangs.numLangs} 
          changeNumberDown={decreaseNumber} changeNumberUp={increaseNumber}  />}
        </div>
        <p>
        <input
          type="checkbox"
          id="seoConsulting"
          checked={servicesSelected[1].seoConsulting}
          onChange={handleChange}
          name="seoConsulting"
        />
        <label htmlFor="seoConsulting">Una consultoria SEO (300€)</label>
        </p> 
        <p>
        <input
          type="checkbox"
          id="googleAdsCampaign"
          checked={servicesSelected[2].googleAdsCampaign}
          onChange={handleChange}
          name="googleAdsCampaign"
        />
        <label htmlFor="googleAdsCampaign">Una campanya de Google Ads (200€)</label>
        </p> 
      </form>
      <p>Preu: {totalPrice}€</p>
   </>
  );
}

export default App;
