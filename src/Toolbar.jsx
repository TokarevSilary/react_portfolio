function Toolbar (props) {
    const {filters, selected, onSelectFilter}= props;
    return(
        <>
        {filters.map((element, index) => (
              <li
                className={selected === element ? "filter selected" : "filter"}
                key={index}
                
                onClick={() => onSelectFilter(element)}>
                    {element}
            </li>
        ))}
        </>
    )
}

export default Toolbar;