import React, {useState, useEffect} from 'react'
import styles from './dropdown.module.css'

const Checkbox = props => (
  <>
    <input type="checkbox" {...props} />
  </>
)


const Options = ({children, ...props}) => (
  <label className={styles.option}>
    <Checkbox {...props} />
    <span></span>
    <span className={props.checked ? styles.checkboxActiveLabel : styles.checkboxLabel}>{children || ' '}</span>
  </label>
);


function DropdownSelector({list, onSubmit}) {
  const [listArr, setListArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openFilter, setOpenFilter] = useState(false);
  const [selected, setSelected] = useState([])

  useEffect(() => {
    let newList = list.map(item => typeof(item) === "object" ? item.title: item)
    setListArr(newList)
  }, [list])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleClear = () => {
    setSearchTerm('');
    setSelected([])
  }

  const handleFilterToggle = (checked) => {
    if(selected.indexOf(checked) === -1){
      setSelected(selected => [...selected, checked])
    }else{
      setSelected(selected => selected.filter(item => item !== checked));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(selected);
    setOpenFilter(false);
    setSearchTerm('')
  }

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenFilter(false)
    }
  }

  const handleSelectAll = () => {
    if(list.length === selected.length){
      setSelected([])
    }else{
      setSelected([...list])
    }
  }

  // const handleFocus = () => {
  //   setOpenFilter(openFilter => !openFilter);
  //   console.log('')
  // }

  // useEffect(() => {
  //   setListArr(listArr => listArr.filter(list => list.toLowerCase().inc))
  // }, [searchTerm])


  let filteredList = listArr.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <form
      onFocus={() => setOpenFilter(true)}
      // onBlur={handleBlur}
      className={styles.filterWrapper}
      onSubmit={e => handleSubmit(e)}
    >
      {openFilter ? (
        <input
          className={styles.select}
          type="search"
          name="search"
          id="searchBox"
          placeholder="Search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
        />
      ) : (
        <div className="selectBox" onClick={() => setOpenFilter(true)}>
          <select className={styles.select}>
            <option>
              Colors {selected.length > 0 && `- ${selected.join(', ')}`}
            </option>
          </select>
        </div>
      )}

      {openFilter && (
        <div className={styles.checkboxSelector} >
          <div className={styles.checkbox}>
            <Options
              checked={selected.length === list.length}
              onChange={handleSelectAll}
            />
            <div className={styles.scrollable}>
              {filteredList.map((item) => (
                <Options
                  checked={selected.indexOf(item) !== -1}
                  onChange={() => handleFilterToggle(item)}
                >
                  <span className={styles.checkboxLabel}>{item}</span>
                </Options>
              ))}
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button} onClick={handleClear}>
              Clear
            </button>
            <button type="submit" className={styles.activeButton}>
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default DropdownSelector
