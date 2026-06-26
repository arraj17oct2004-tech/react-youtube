// Local-Storage Notes :-
/*
==================== LOCAL STORAGE METHODS ====================

localStorage stores data as KEY-VALUE pairs.
✔ Data persists even after the browser is closed.
✔ Both keys and values are stored as strings.

Methods:

1. setItem(key, value)
   ➜ Store or update a value.
   Example:
   localStorage.setItem("name", "Rishav");

2. getItem(key)
   ➜ Retrieve a value using its key.
   Example:
   localStorage.getItem("name");

3. removeItem(key)
   ➜ Remove a specific key-value pair.
   Example:
   localStorage.removeItem("name");

4. clear()
   ➜ Remove all data from localStorage.
   Example:
   localStorage.clear();

5. key(index)
   ➜ Get the key at a particular index.
   Example:
   localStorage.key(0);

===============================================================
*/

const App = () => {
                      // KEY       Value 
  localStorage.setItem('Concept','React-Tutorial')// {Both key and vaue should be stored in string DataTypes}
  
  const myVariable = localStorage.getItem('Concept') // stores "React-Tutorial"

  // Storing Objectes in localStorage 
  const myObj = {
    Title : 'hello',
    Description : 'i am hello world'
  }

  localStorage.setItem('JAVA_Script',JSON.stringify(myObj)) 

  console.log(localStorage.getItem('JAVA_Script')) 
  console.log(typeof(localStorage.getItem('JAVA_Script'))) // string

  
  localStorage.removeItem('JAVA_Script')
  
  
  localStorage.clear()
  
  console.log(localStorage.length)

  return (
    <div>
      Hello World
    </div>
  )
}

export default App
