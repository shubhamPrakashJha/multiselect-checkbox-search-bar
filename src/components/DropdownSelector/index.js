import React, {useState, useEffect} from 'react'
import styles from './dropdown.module.css'
import {FilterSelector,FiterButtons,SearchBox,SelectDropdown} from './components';

function DropdownSelector({list, name, onSubmit}) {
  const [listArr, setListArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [selected, setSelected] = useState([])

  /* Creates a duplicate array from Object/Array for supporting array  object data  */
  useEffect(() => {
    let newList = list.map(item => typeof(item) === "object" ? item.title: item)
    setListArr(newList)
  }, [list])

  /* Handle Searh */
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  /* Clear all selection & close the sidebar */
  const handleClear = () => {
    setSearchTerm('');
    setSelected([])
  }

  /* handle Select / unselect of individual checkbox based on current selection state */
  const handleFilterToggle = (checked) => {
    if(selected.indexOf(checked) === -1){
      setSelected(selected => [...selected, checked])
    }else{
      setSelected(selected => selected.filter(item => item !== checked));
    }
  }

  /* handle Submit button click - Retur selected values & close the Selection box*/
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(selected);
    setOpenFilter(false);
    setSearchTerm('')
  }

  /* handle Select ALL checkbox Toggle - Select All / Unselect All */
  const handleSelectAll = () => {
    if(listArr.length === selected.length){
      setSelected([])
    }else{
      setSelected([...listArr])
    }
  }

  let filteredList = listArr.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <form
      onFocus={() => setOpenFilter(true)}
      className={styles.filterWrapper}
      onSubmit={e => handleSubmit(e)}
    >
      {openFilter ? 
        <SearchBox searchTerm={searchTerm} handleSearch={handleSearch} /> : 
        <SelectDropdown setOpenFilter={setOpenFilter} name={name} selected={selected} />
      }

      {openFilter && (
        <div className={styles.checkboxSelector} >
          <FilterSelector selected={selected} list={list} handleSelectAll={handleSelectAll} filteredList={filteredList} handleFilterToggle={handleFilterToggle} />
          <FiterButtons handleClear={handleClear}/>
        </div>
      )}
    </form>
  );
}

export default DropdownSelector

