import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const Authcontext = createContext();

const Authprovider = ({children}) => {
    const allContexts = useFirebase()
    return (
        <Authcontext.Provider value={allContexts}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;