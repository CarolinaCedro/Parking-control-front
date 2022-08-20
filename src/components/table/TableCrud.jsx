import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import MyVerticallyCenteredModal from '../modals/modalCreate/Modal'
import MyVerticallyCenteredModalDelete from '../modals/modalDelete/Modal'
import MyVerticallyCenteredModalUpdate from '../modals/modalUpdate/Modal'
import Button from 'react-bootstrap/Button';
import api from '../../services/api';
import './styles.css'


export default function TableCrud(){

  
    const [users,setUsers] = useState([]);
    
    const [modalShowNew, setModalShowNew] = React.useState(false);
    const [modalShowDelete, setModalShowDelete] = React.useState(false);
    const [modalShowUpdate, setModalShowUpdate] = React.useState(false);

    var cont=1;


    useEffect(() => {
      async function getUserData(){
        const response = await api.get('/parking-spot')
        setUsers(response.data.content)
      }
      
        getUserData();
    }, []);
  
    return (

      <section className='containerTable'>
        <div className='tablePosition'>

        <Button variant="primary" onClick={() => setModalShowNew(true)}>
          Cadastrar Reserva
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShowNew}
          onHide={() => setModalShowNew(false)}
        />

        <MyVerticallyCenteredModalDelete
          show={modalShowDelete}
          onHide={() => setModalShowDelete(false)}
        />

        <MyVerticallyCenteredModalUpdate
          show={modalShowUpdate}
          onHide={() => setModalShowUpdate(false)}
        />

        <Table striped bordered hover >
            <thead>
              <tr>
                <th></th>
                <th>Nome Proprietario</th>
                <th>Placa Carro</th>
                <th>Modelo Carro</th>
                <th>Cor Carro</th>
                <th>Data registro</th>
                <th>Apartamento</th>
                <th>Bloco</th>
                <th>Ação</th>
              </tr>
            </thead>
              
            <tbody>
             {users.map((user)=>{
              return(
                <tr key={user.id} className="teste">
                  <td>{cont++}</td>
                  <td>{user.responsibleName}</td>
                  <td>{user.licensePlateCar}</td>
                  <td>{user.brandCar}</td>
                  <td>{user.colorCar}</td>
                  <td>{user.registrationDate}</td>
                  <td>{user.apartment}</td>
                  <td>{user.block}</td>
                  <td>
                    <div className='btnAction'>
                    <Button variant="warning" size="sm" onClick={() => setModalShowUpdate(true)}>editar</Button>
                    <Button variant="danger" size="sm" onClick={() => setModalShowDelete(true)}>apagar</Button>
                    </div>
                  
                  </td>
                </tr>
              )
             })}
              
            </tbody>
          </Table>

        </div>
      </section>
          
        );
}