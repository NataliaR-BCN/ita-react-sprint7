import { useState, useEffect } from "react";
import servicesPortfolio from '../data/services';
import { useLocalStorage } from "../hooks/useLocalStorage";
import Calculadora from "../components/Calculadora/Calculadora";
import Llistat from "../components/Llistat/Llistat";
import FitxaLlistat from "../components/FitxaLlistat/FitxaLlistat";
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
  
  const [budgetsList, setBudgetsList] = useState(JSON.parse(localStorage.getItem('localBudgetList')) || []);

  const [filteredBudgetsList, setFilteredBudgetsList] = useState([]);

  const [currentBudgetsList, setCurrentBudgetsList] = useState('budgetsList');

  const [buscarProjecte, setBuscarProjecte] = useState("");

  
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


  useEffect(() => { 
    localStorage.setItem('localBudgetList', JSON.stringify(budgetsList))
  }, [budgetsList]);
  

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
  

  function cleanFormOldData() {
    
    setProjectData( [{ projectName: "" }, { clientName: "" }])
    setServicesSelected([ {webPage: false }, { seoConsulting: false }, { googleAdsCampaign: false } ]);
    setWebPageNumbers({ numPages: 1 });
    setWebPageLangs( { numLangs: 1 });

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
      id: `Pressupost #${budgetsList.length + 1}`,
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

    if (currentBudgetsList === 'filteredBudgetsList') {
        setFilteredBudgetsList(prevFilteredBudgetsList => [...prevFilteredBudgetsList, budget])
    }

    cleanFormOldData();
    
  }

  const llistaPlena = budgetsList.length > 0 ? true : false;


  function showLlistat() { 

    if ( buscarProjecte !== "" && filteredBudgetsList.length === 0 ) { 
      return `No hi ha cap pressupost que concordi amb el criteri de cerca introduït.`
    } else if ( buscarProjecte !== "" && filteredBudgetsList.length >= 1 ) {
      return filteredBudgetsList.map((budget, index) => 
        <FitxaLlistat key={`${budget.id}/${index+1}/${budget.data}`} id={budget.id} data={budget.data} nom={budget.nom} client={budget.client} webPage={budget.webPage} numPages={budget.numPages} numLangs={budget.numLangs} totalWebPrice={budget.totalWebPrice} seoConsulting={budget.seoConsulting} googleAdsCampaign={budget.googleAdsCampaign} totalPrice={budget.totalPrice} />) 
    } else { 
      return budgetsList.map((budget, index) => 
        <FitxaLlistat key={`${budget.id}/${index+1}/${budget.data}`} id={budget.id} data={budget.data} nom={budget.nom} client={budget.client} webPage={budget.webPage} numPages={budget.numPages} numLangs={budget.numLangs} totalWebPrice={budget.totalWebPrice} seoConsulting={budget.seoConsulting} googleAdsCampaign={budget.googleAdsCampaign} totalPrice={budget.totalPrice} />)
    }
  
  }


  function handleOrdreAlfabetic() {

    if (currentBudgetsList === 'budgetsList') {
      setBudgetsList([...budgetsList].sort((a,b) => a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1))
    } else {
      setFilteredBudgetsList([...filteredBudgetsList].sort((a,b) => a.nom.toLowerCase() > b.nom.toLowerCase() ? 1 : -1))
    }

  }


  function handleOrdreEntrada() {
    
    if (currentBudgetsList === 'budgetsList') {
      setBudgetsList([...budgetsList].sort((a,b) => {
        const numIdA = a.id.slice(12)
        const numIdB = b.id.slice(12)
        return numIdA - numIdB 
      }))
    } else {
      setFilteredBudgetsList([...filteredBudgetsList].sort((a,b) => {
        const numIdA = a.id.slice(12)
        const numIdB = b.id.slice(12)
        return numIdA - numIdB 
      }))
    }
  }


  function handleOrdreData() { 

    if (currentBudgetsList === 'budgetsList') {
      setBudgetsList([...budgetsList].sort((a,b) => {
        const anyDataA = a.data.slice(6)
        const anyDataB = b.data.slice(6)
        const mesDataA = a.data.slice(3, 5)
        const mesDataB = b.data.slice(3, 5)
        const diaDataA = a.data.slice(0, 2)
        const diaDataB = b.data.slice(0, 2)

        if (anyDataB !== anyDataA) {
        return anyDataB - anyDataA
        } else if (mesDataB !== mesDataA) {
        return mesDataB - mesDataA 
        } else { 
        return diaDataB - diaDataA
        }
      }))
    } else {
      setFilteredBudgetsList([...filteredBudgetsList].sort((a,b) => {
        const anyDataA = a.data.slice(6)
        const anyDataB = b.data.slice(6)
        const mesDataA = a.data.slice(3, 5)
        const mesDataB = b.data.slice(3, 5)
        const diaDataA = a.data.slice(0, 2)
        const diaDataB = b.data.slice(0, 2)

        if (anyDataB !== anyDataA) {
        return anyDataB - anyDataA
        } else if (mesDataB !== mesDataA) {
        return mesDataB - mesDataA 
        } else { 
        return diaDataB - diaDataA
        }
      }))
    }  
  }

  useEffect(() => { 
    if(buscarProjecte === "" ) {
      setCurrentBudgetsList('budgetsList');
    } else {
      setCurrentBudgetsList('filteredBudgetsList');
    }}, [buscarProjecte]);


  function handleBuscador(event) {

    setBuscarProjecte(event.target.value);

    const txtBuscar = event.target.value.toLowerCase();

    setFilteredBudgetsList([...budgetsList].filter((budget) => budget.nom.toLowerCase().includes(txtBuscar)))

  } 

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
     
        { llistaPlena && <Llistat handleReiniciarOrdre={handleOrdreEntrada} handleOrdreAlfabetic={handleOrdreAlfabetic} handleOrdreData={handleOrdreData}
         showLlistat ={showLlistat()} handleBuscador={handleBuscador} handleValueBuscador={buscarProjecte} /> }
   
      </ColDreta>
   </Columnes>

  );
}

export default Home;

