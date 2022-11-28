import { useState, useEffect } from "react";
import servicesPortfolio from './data/services';
import Panell from "./components/Panell/Panell";


function App() {

  const [servicesSelected, setServicesSelected] = useState([ 
    { webPage: false },
    { seoConsulting: false },
    { googleAdsCampaign: false },
    { numPages: 1 },
    { numLangs: 1 }
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    setTotalPrice(
        (servicesSelected[0].webPage ? (servicesPortfolio[0].price +
         servicesSelected[3].numPages * servicesSelected[4].numLangs * 30): 0) +
        (servicesSelected[1].seoConsulting ? servicesPortfolio[1].price : 0) +
        (servicesSelected[2].googleAdsCampaign ? servicesPortfolio[2].price : 0) 
        
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesSelected]); 

  function handleChange(event) {
    setServicesSelected(prevServicesSelected => {
      const { name, value, type, checked } = event.target;

      const serviceIndex = servicesSelected.findIndex(service => service.hasOwnProperty(name));

      return [
        ...prevServicesSelected,
        type === 'checkbox' ? servicesSelected[serviceIndex][name] = checked : 
                              servicesSelected[serviceIndex][name] = Number(value)
      ]
    })
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
          {servicesSelected[0].webPage && <Panell handle={handleChange} 
          numPagesValue={servicesSelected[3].numPages} numLangsValue={servicesSelected[4].numLangs} />}
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
