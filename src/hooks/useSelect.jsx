import React, { useState } from 'react'

const useSelect = (stateInitial, options) => {

    const [state, setState] = useState(stateInitial)
    
    const SelectNoticias = () => (
        <select 
            className="browser-default"
            defaultValue={stateInitial}
            onChange={ e => setState(e.target.value) }
        >
            {
              options.map(option => (
                <option 
                    key={option.value} 
                    value={option.value}
                >{option.label}</option>
              ))  
            }
        </select>
    )

    return [state, SelectNoticias]
}
 
export default useSelect;