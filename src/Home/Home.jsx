import React, { useState, useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container, LockButton, DataGridPagination } from './styles';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';


function Home() {
  const [ initialValue, setValueInitial ] = useState(500)
  const [ fees, setFees ] = useState(0.01)
  const [penalty, setPenalty] = useState(0.1)
  const [honorary, setHonorary] = useState(0.2)
  const [isLocked, setIsLocked] = useState(true) 
  const [numberOfPagination, setNumberOfPagination] = useState(0)
  const [sumarize, setSumarize] = useState('')
  const [pageSize, setPageSize] = useState(12)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'year', headerName: 'Ano', width: 70 },
    { field: 'month', headerName: 'Mês', width: 120 },
    { field: 'monetaryCorrection', headerName: 'Correção Monetária', width: 150 },
    { 
      field: 'initial', 
      headerName: 'Inicial (R$ '+initialValue+')', 
      width: 130,
      valueGetter: (params) =>
        `${(initialValue*params.row.monetaryCorrection).toFixed(2)}`,
    },
    { 
      field: 'fees', 
      headerName: 'Juros ('+fees*100+'%)', 
      width: 130,
      valueGetter: (params) =>
        `${((initialValue*params.row.monetaryCorrection)+((initialValue*params.row.monetaryCorrection)*fees)).toFixed(2)}`,
    },
    { 
      field: 'penalty', 
      headerName: 'Multa ('+penalty*100+'%)', 
      width: 130,
      valueGetter: (params) =>
        `${((initialValue*params.row.monetaryCorrection)+((initialValue*params.row.monetaryCorrection)*fees)+((initialValue*params.row.monetaryCorrection)*penalty)).toFixed(2)}`, 
    
    },
    { 
      field: 'honorary', 
      headerName: 'Honorários ('+honorary*100+'%)', 
      width: 130, 
      valueGetter: (params) =>
        `${((initialValue*params.row.monetaryCorrection)+((initialValue*params.row.monetaryCorrection)*fees)+((initialValue*params.row.monetaryCorrection)*penalty)+((initialValue*params.row.monetaryCorrection)*honorary)).toFixed(2)}`, 
    },
    
    {
      field: 'total',
      headerName: 'TOTAL',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${((initialValue*params.row.monetaryCorrection)+((initialValue*params.row.monetaryCorrection)*fees)+((initialValue*params.row.monetaryCorrection)*penalty)+((initialValue*params.row.monetaryCorrection)*honorary)).toFixed(2)}`,
    },
  ];
  
  const rows = [
    { id: 1, year:2019, month: 'Janeiro', monetaryCorrection: 1.3098562 },
    { id: 2, year:2019, month: 'Fevereiro', monetaryCorrection: 1.3051575 },
    { id: 3, year:2019, month: 'Março', monetaryCorrection: 1.2981481 },
    { id: 4, year:2019, month: 'Abril', monetaryCorrection: 1.288228 },
    { id: 5, year:2019, month: 'Maio', monetaryCorrection: 1.2805449 },
    { id: 6, year:2019, month: 'Junho', monetaryCorrection: 1.278627 },
    { id: 7, year:2019, month: 'Julho', monetaryCorrection: 1.2784996 },
    { id: 8, year:2019, month: 'Agosto', monetaryCorrection: 1.2772221 },
    { id: 9, year:2019, month: 'Setembro', monetaryCorrection: 1.2756913 },
    { id: 10, year:2019, month: 'Outubro', monetaryCorrection: 1.2763292 },
    { id: 11, year:2019, month: 'Novembro', monetaryCorrection: 1.2758192 },
    { id: 12, year:2019, month: 'Dezembro', monetaryCorrection: 1.2689667 },
  
    { id: 13, year:2020, month: 'Janeiro', monetaryCorrection: 1.2536718 },
    { id: 14, year:2020, month: 'Fevereiro', monetaryCorrection: 1.2512943 },
    { id: 15, year:2020, month: 'Março', monetaryCorrection: 1.2491709 },
    { id: 16, year:2020, month: 'Abril', monetaryCorrection: 1.2469263 },
    { id: 17, year:2020, month: 'Maio', monetaryCorrection: 1.2498008 },
    { id: 18, year:2020, month: 'Junho', monetaryCorrection: 1.2529332 },
    { id: 19, year:2020, month: 'Julho', monetaryCorrection: 1.2491853 },
    { id: 20, year:2020, month: 'Agosto', monetaryCorrection: 1.243713 },
    { id: 21, year:2020, month: 'Setembro', monetaryCorrection: 1.2392518 },
    { id: 22, year:2020, month: 'Outubro', monetaryCorrection: 1.2285635 },
    { id: 23, year:2020, month: 'Novembro', monetaryCorrection: 1.2177258 },
    { id: 24, year:2020, month: 'Dezembro', monetaryCorrection: 1.2062664 },

    { id: 25, year:2021, month: 'Janeiro', monetaryCorrection: 1.188908 },
    { id: 26, year:2021, month: 'Fevereiro', monetaryCorrection: 1.185707 },
    { id: 27, year:2021, month: 'Março', monetaryCorrection: 1.1760631 },
    { id: 28, year:2021, month: 'Abril', monetaryCorrection: 1.1660354 },
    { id: 29, year:2021, month: 'Maio', monetaryCorrection: 1.161621 },
    { id: 30, year:2021, month: 'Junho', monetaryCorrection: 1.1505755 },
    { id: 31, year:2021, month: 'Julho', monetaryCorrection: 1.1437134 },
    { id: 32, year:2021, month: 'Agosto', monetaryCorrection: 1.132165 },
    { id: 33, year:2021, month: 'Setembro', monetaryCorrection: 1.1222891 },
    { id: 34, year:2021, month: 'Outubro', monetaryCorrection: 1.108981 },
    { id: 35, year:2021, month: 'Novembro', monetaryCorrection: 1.0962647 },
    { id: 36, year:2021, month: 'Dezembro', monetaryCorrection: 1.0871325 },

    { id: 37, year:2022, month: 'Janeiro', monetaryCorrection: 1.079254 },
    { id: 38, year:2022, month: 'Fevereiro', monetaryCorrection: 1.0720712 },
    { id: 39, year:2022, month: 'Março', monetaryCorrection: 1.0614565 },
    { id: 40, year:2022, month: 'Abril', monetaryCorrection: 1.043611 },
    { id: 41, year:2022, month: 'Maio', monetaryCorrection: 1.0328688 },
    { id: 42, year:2022, month: 'Junho', monetaryCorrection: 1.028242 },
    { id: 43, year:2022, month: 'Julho', monetaryCorrection: 1.0219062 },
    { id: 44, year:2022, month: 'Agosto', monetaryCorrection: 1.0280744 },
    { id: 45, year:2022, month: 'Setembro', monetaryCorrection: 1.0312715 },
    { id: 46, year:2022, month: 'Outubro', monetaryCorrection: 1.0345822 },
    { id: 47, year:2022, month: 'Novembro', monetaryCorrection: 1.0297423 },
    { id: 48, year:2022, month: 'Dezembro', monetaryCorrection: 1.0258442 },

    { id: 49, year:2023, month: 'Janeiro', monetaryCorrection: 1.0188143 },
    { id: 50, year:2023, month: 'Fevereiro', monetaryCorrection: 1.0141493 },
    { id: 51, year:2023, month: 'Março', monetaryCorrection: 1.0064 },
    { id: 52, year:2023, month: 'Abril', monetaryCorrection: 1 },
  ];

  useEffect(()=>{

    if(pageSize == 52){
      
      setTimeout(() => {
        window.print();
      }, "2000");
      setTimeout(() => {
        teste()
      }, "2000");
      
    }
  }, [pageSize])

  function teste(){
    setPageSize(12)
  }
  function handleInitialValue(e){
    setValueInitial(e.target.value)
  }

  function handleFees(e){
    setFees(e.target.value/100)
  }

  function handlePenalty(e){
    setPenalty(e.target.value/100)
  }

  function handleHonorary(e){
    setHonorary(e.target.value/100)
  }

  function handleIsLocked(e){
    setIsLocked(!isLocked)
  }

  function nextPage(e){
    if(numberOfPagination<4){
      setNumberOfPagination(numberOfPagination+1)
      setSumarize('')
    }
    
  }

  function previusPage(e){
    if(numberOfPagination>0){
      setNumberOfPagination(numberOfPagination-1)
      setSumarize('')

    }
    
  }

  function sumarizeTotal(e){
    var fields = document.getElementsByClassName('MuiDataGrid-cell')
    var num
    var sum = 0
    for(let i=0;i<fields.length;i++){
      if(fields[i]?.attributes[2]?.value == "total"){
        
        num = Number(fields[i].firstChild.innerText.toString())
 
        sum = sum + num
       // console.log(fields[i].attributes[2].value)
      }
    }

    setSumarize(sum.toFixed(2))
  }

  function changePageSize(){  
    setPageSize(52)

  } 

  

  return(
    <Container>
      <h1 className='none-print'>CALCULADOR DE PENSÃO</h1>
      <div className='none-print' id='input-initial-value'>
        <h2>Entradas</h2>
        <div id='input-container'>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Dinheiro</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            label="Amount"
            value={initialValue} 
            onChange={handleInitialValue}
            disabled={isLocked}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-fees">Juros</InputLabel>
          <OutlinedInput
            id="outlined-adornment-fees"
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Fees"
            value={fees*100} 
            onChange={handleFees}
            disabled={isLocked}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-penalty">Multa</InputLabel>
          <OutlinedInput
            id="outlined-adornment-penalty"
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Penalty"
            value={penalty*100} 
            onChange={handlePenalty}
            disabled={isLocked}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-honorary">Honorários</InputLabel>
          <OutlinedInput
            id="outlined-adornment-honorary"
            startAdornment={<InputAdornment position="start">%</InputAdornment>}
            label="Honorary"
            value={honorary*100} 
            onChange={handleHonorary}
            disabled={isLocked}
          />
        </FormControl>
        <LockButton variant="contained" color={isLocked? "info" : "error" }  icon={isLocked? EditIcon : EditOffIcon} text={isLocked? 'Desbloquear' :'Bloquear'} onClick={handleIsLocked}/>
        </div>
      </div>
      
      <div id='card-grid'>
      
        <div id="grid">
          <DataGridPagination
          
            rows={rows}
            columns={columns}
            page={numberOfPagination}
            pageSize={pageSize}
            checkboxSelection
      
          />
          <div className='none-print' id='calculate-total'>
         
              <Button variant="contained" color="success" onClick={sumarizeTotal}>Calcular total</Button>
              
         
            
              <Button variant="contained" color="secondary" onClick={changePageSize}>Imprimir Tudo</Button>
          </div>
          <h3>Total R$: {sumarize}</h3>
          
          <div className='none-print' id='button-container'>
            <Button variant="contained" onClick={previusPage} disabled={numberOfPagination <= 0 ? true : false}>Anterior</Button>
            <Button variant="contained" onClick={nextPage} disabled={numberOfPagination >= 4 ? true : false}>Próximo</Button>
          </div>
          
        </div>  
      </div>
      <div  className='none-print' id='author-container'>
        <p>Criado por <a href="https://github.com/lobatolc" target='_blank'>@lobatolc</a></p>
      </div>
  
    </Container>
  );
}

export default Home;