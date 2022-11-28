import { useState, useEffect } from "react";
import servicesPortfolio from '../data/services';
import { useLocalStorage } from "../hooks/useLocalStorage";
import Calculadora from "../components/Calculadora/Calculadora";


function Home() {

  const [servicesSelected, setServicesSelected] = useLocalStorage('services', [ 
    { webPage: false },
    { seoConsulting: false },
    { googleAdsCampaign: false }
  ]);

  const [webPageNumbers, setWebPageNumbers] = useLocalStorage('numPages', { numPages: 1 });

  const [webPageLangs, setWebPageLangs] =  useLocalStorage('numLangs', { numLangs: 1 });

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


  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(servicesSelected))
  }, [servicesSelected])

  
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

      <Calculadora onChangeHandler={handleChange} webPageCheck={servicesSelected[0].webPage} 
        seoConsultingCheck={servicesSelected[1].seoConsulting} 
        googleAdsCampaignCheck={servicesSelected[2].googleAdsCampaign} totalPrice={totalPrice} 
        handlePanell={handleChangeNumbers} numPagesValuePanell={webPageNumbers.numPages} 
        numLangsValuePanell={webPageLangs.numLangs} changeNumberDownPanell={decreaseNumber} 
        changeNumberUpPanell={increaseNumber} />
   </>
  );
}

export default Home;

