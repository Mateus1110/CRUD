import React from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Tabela.css'


  const columns = [
    {id: 'id', label: 'id', minWidth: 20},
    { id: 'username', label: 'Name', minWidth: 120 },
    {
      id: 'created_at',
      label: 'created_at',
      minWsdth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('pt-BR'),
    },
    {
      id: 'updated_at',
      label: 'updated_at',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const useStyles = makeStyles({
    root: {
      height: '70%',
      width: '80%',
    },
    container: {
      maxHeight: '100%',
    },
  });

  export default function StickyHeadTable(props) {
    const classes = useStyles();

    async function delete_row(id){
      try{
          await axios.delete('http://localhost:3333/users/' + id)
          props.load_table()
      }catch(erro){
          console.log(erro);
      }    
  }

    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell>Deletar</TableCell>
                <TableCell>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.content.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      )
                    })}
                    <TableCell><button className='table-button' data-id={row.id} onClick={(event) => delete_row(event.target.dataset.id)}>Deletar</button></TableCell>
                  <TableCell><button className='table-button' data-id={row.id}>Editar</button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
}
