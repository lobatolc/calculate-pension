import styled from 'styled-components';
import { styled as materialStyled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { NoEncryption } from '@mui/icons-material';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    
    height: fit-content;

    @media print {
        
        .none-print{
            display: none;
        }
      
      }

    #card-grid{
        width: 100%;
        max-width: 1200px;
        padding: 2rem;
        background-color: #FCFCFC;
        border-radius: 0.5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    }

    #grid{
        height: fit-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #button-container{
        display: flex;
        gap: 1rem;
        justify-content: flex-end;

        @media print {
        
       

            display: none;
        
      }
    }

    #input-initial-value{
        
        
        max-width: 1200px;
        width: 100%;
        padding: 2rem;
        background-color: #FCFCFC;
        border-radius: 0.5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    }

    #input-container{
        display: flex;
        gap: 0.5rem;

        @media (max-width: 900px){
            flex-direction: column;
          }
    }
    h1{
        text-align: center;
        color: #0C0C0C;
    }
    h2{
        margin:0;
        color: #0C0C0C;
        text-align: center;
        margin-bottom: 1.5rem;
    }

    #author-container{
        font-size: 20px;
        margin-bottom: 1rem;
        p{
            color: white;
        }
        a{
            text-decoration: none;
            color: white;
            font-weight: 500;
        }
    }

    #calculate-total{
 
        display: flex;
        justify-content: space-between;
        @media print {
        
       

                display: none;
            
          }
       
    }

    
`;

const LockButtonStyle =  materialStyled(Button)(({ theme}) => ({
    width: '100%',
    margin: '8px'
  }));

export function LockButton({text, icon : Icon, onClick, color}){
    return (
    
        <LockButtonStyle variant="contained" color={color} endIcon={<Icon/>} onClick={onClick}>{text}</LockButtonStyle>
    );  
}

const DataGridPaginationStyle = materialStyled(DataGrid)(({ theme}) => ({
    
    '& .css-zylse7-MuiButtonBase-root-MuiIconButton-root': {
        display: 'none !important',
      },

      '& .css-1omnuql-MuiDataGrid-root': {
        backgroundColor: "red",
      },
      '& .MuiDataGrid-columnHeader': {
        backgroundColor: "#c8e6c9",
      
      },

  }));

  export function DataGridPagination({rows, columns, page, pageSize}){
    return(
        <DataGridPaginationStyle
            rows={rows}
            columns={columns}
            paginationModel={{ page: page, pageSize: pageSize }}
            checkboxSelection
          />
    )
  }