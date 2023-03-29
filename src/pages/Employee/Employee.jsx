import React, { useEffect } from "react";
import './employee.css'
import '../../styles/pages/employee.scss'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import StickyHeadTable from "../../components/Table";

// import { sendEmployees } from '../features/HomeSlice';


const Employee = () => {
  const stateDatas = useSelector(store => store.users);
  // console.log(stateDatas)
  // const stateDatas = useSelector(sendEmployees);
  const ref = React.useRef();
  const [renderDataTable, setRenderDataTable] = React.useState(
    <StickyHeadTable datas={stateDatas} />
  );

  function getInputSearch(evt) {
    const inputValue = evt.target.value.toLowerCase();
    const _datas = [];
    if (inputValue !== "") {
      stateDatas.map((data) => {
        if (data.firstName.toLowerCase().includes(inputValue)) {
          _datas.push(data);
        }
      });
      renderTable(_datas);
    } else {
      renderTable();
    }
  }
  /* Fonction appelée lorsque la valeur d'entrée est modifiée. */
  function renderTable(_data = []) {
    if (_data.length === 0 && ref.current.value === "") {
      setRenderDataTable(<StickyHeadTable datas={stateDatas} />);
    } else {
      setRenderDataTable(<StickyHeadTable datas={_data} />);
    }
  }
  useEffect(() => {
    renderTable();
  }, [ref.current?.value]);

  return (
    <div className="employee_container">
      <div className="employee_container__header">
        <Header>Current Employees</Header>
        <nav className="employee_container__header__nav">
          <div role="search">
            <label htmlFor="search"></label>
            <input
              ref={ref}
              type="search"
              name="search"
              id="search"
              onChange={(evt) => getInputSearch(evt)}
              placeholder="search employee"
              autoFocus
            />
          </div>
          <div className="link_bloc">
            <Link to="/">Home</Link>
          </div>
        </nav>
      </div>
      <div className="employee_container__table">
        {ref.current?.value === "" ? (
          <StickyHeadTable datas={stateDatas} />
        ) : (
          renderDataTable
        )}
      </div>
    </div>
  );
}

export default Employee