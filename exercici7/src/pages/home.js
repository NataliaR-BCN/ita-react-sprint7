import { useState, useEffect } from "react";
import servicesPortfolio from '../data/services';
import { useLocalStorage } from "../hooks/useLocalStorage";
import Calculadora from "../components/Calculadora/Calculadora";
import Llistat from "../components/Llistat/Llistat";
import { Columnes, ColEsquerra, ColDreta } from "../styled";


function Home() {

  const [projectData, setProjectData] = useState([ 
    { projectName: "" },
    { clientName: "" }
  ]);

  const [servicesSelected, setServicesSelected] = useLocalStorage('services', [ 
    { webPage: false },
    { seoConsulting: false },
    { googleAdsCampaign: false }
  ]);

  const [webPageNumbers, setWebPageNumbers] = useLocalStorage('numPages', { numPages: 1 });

  const [webPageLangs, setWebPageLangs] =  useLocalStorage('numLangs', { numLangs: 1 });

  const [totalWebPrice, setTotalWebPrice] = useState(530);
  
  const [totalPrice, setTotalPrice] = useState(0);

  const [budgetsList, setBudgetsList] = useState([]);
  
  function inputChange(event) {
     setProjectData(prevData => {
      
        const { name, value } = event.target;
      
        return [
          ...prevData,
          name === "projectName" ? projectData[0].projectName = value : projectData[1].clientName = value
        ]
      } )
  }

  useEffect(()=>{

        setTotalWebPrice(servicesPortfolio[0].price +
         webPageNumbers.numPages * webPageLangs.numLangs * servicesPortfolio[3].price);

  }, [webPageNumbers, webPageLangs]);

  useEffect(() => {
    setTotalPrice(
        (servicesSelected[0].webPage ? totalWebPrice: 0) +
        (servicesSelected[1].seoConsulting ? servicesPortfolio[1].price : 0) +
        (servicesSelected[2].googleAdsCampaign ? servicesPortfolio[2].price : 0)         
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [servicesSelected, totalWebPrice]); 


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
      webPageLangs.numLangs > 1 && setWebPageLangs({numLangs : webPageLangs.numLangs -1})
    }
    
  }
    

  const increaseNumber = (event) => {
    const { name } = event.target;

    name === 'numPages' ? setWebPageNumbers({numPages : webPageNumbers.numPages + 1}) : 
                          setWebPageLangs({numLangs : webPageLangs.numLangs + 1})

  }
  

  const generarBudget = () => {

    let budgetDate = "";
    let dataActual = new Date();

    let diaActual = dataActual.getDate();
    let mesActual = dataActual.getMonth() + 1;
    let anyActual = dataActual.getFullYear();

    mesActual < 10 ? budgetDate = `${diaActual}/0${mesActual}/${anyActual}` :
                     budgetDate = `${diaActual}/${mesActual}/${anyActual}`;

    const budget = {
      data: budgetDate,
      nom: projectData[0].projectName,
      client: projectData[1].clientName,
      webPage: servicesSelected[0].webPage,
      numPages: webPageNumbers.numPages,
      numLangs: webPageLangs.numLangs, 
      seoConsulting: servicesSelected[1].seoConsulting,
      googleAdsCampaign: servicesSelected[2].googleAdsCampaign,
      totalWebPrice: totalWebPrice, 
      totalPrice: totalPrice
    }

    setBudgetsList(prevBudgetsList => [...prevBudgetsList, budget])
    
  }

  const llistaPlena = budgetsList.length > 0 ? true : false;

  const showLlistat = budgetsList.map((budget, index) => 
        <Llistat key={`Pressupost${index+1}/${budget.data}`} id={`Pressupost #${index+1}`} data={budget.data} nom={budget.nom} client={budget.client} webPage={budget.webPage} numPages={budget.numPages} numLangs={budget.numLangs} totalWebPrice={budget.totalWebPrice} seoConsulting={budget.seoConsulting} googleAdsCampaign={budget.googleAdsCampaign} totalPrice={budget.totalPrice} />);


  return (   

    <Columnes>
      <ColEsquerra>
      <Calculadora inputHandler={inputChange} projectName={projectData[0].projectName} clientName={projectData[1].clientName} onChangeHandler={handleChange} webPageCheck={servicesSelected[0].webPage} 
        seoConsultingCheck={servicesSelected[1].seoConsulting} 
        googleAdsCampaignCheck={servicesSelected[2].googleAdsCampaign} totalWebPrice={totalWebPrice} totalPrice={totalPrice} 
        handlePanell={handleChangeNumbers} numPagesValuePanell={webPageNumbers.numPages} 
        numLangsValuePanell={webPageLangs.numLangs} changeNumberDownPanell={decreaseNumber} 
        changeNumberUpPanell={increaseNumber} generarBudget={generarBudget} />
      </ColEsquerra>
      <ColDreta>
        {llistaPlena&&<h2>&nbsp;&nbsp;Llistat de pressupostos creats</h2>}
        {llistaPlena && showLlistat}
      </ColDreta>
   </Columnes>

  );
}

export default Home;

