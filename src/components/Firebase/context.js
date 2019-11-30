/* Author: Patrick Conboy

 * Date Created: 11/29/2019

 * Description: This file creates the context components for Firebase to be
 * used at any level of our React project. This way we only need to create one Firebase object.
 * 
 * Uses: createContext() creates two components. The FirebaseContext.Provider component is used 
 * to provide a Firebase instance once at the top-level of your React component tree, which we 
 * will do in this section; and the FirebaseContext.Consumer component is used to retrieve the 
 * Firebase instance if it is needed in the React component.
 */

import React from 'react'

const FirebaseContext = React.createContext(null)

export default FirebaseContext