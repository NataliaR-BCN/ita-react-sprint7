import { useState, useEffect } from "react";
import servicesPortfolio from './data/services';


function App() {

  const [servicesSelected, setServicesSelected] = useState([ 
    {
      webPage: false
    },
    {
      seoConsulting: false
    },
    {
      googleAdsCampaign: false
    }
  ]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
        (servicesSelected[0].webPage ? servicesPortfolio[0].price : 0) +
        (servicesSelected[1].seoConsulting ? servicesPortfolio[1].price : 0) +
        (servicesSelected[2].googleAdsCampaign ? servicesPortfolio[2].price : 0)
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesSelected]); 

  function handleChange(event) {
    setServicesSelected(prevServicesSelected => {
      const { name, checked } = event.target;

      const indexCheckedBox = servicesSelected.findIndex(service => service.hasOwnProperty(name));

      return [
        ...prevServicesSelected,
        servicesSelected[indexCheckedBox][name] = checked     
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
