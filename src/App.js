import React from 'react';
import Main from './Components/Main';
import Wrapper from './Components/Wrapper';
import Header from './Components/Header';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header />
    <Main/>
    </Wrapper>
    </div>
  );
}

export default App;







// import React, {Component} from 'react'

// class App extends Component{
// constructor(props){
//   super(props)
//   this.state = {
//     items: [],
//     //we are not requesting now, so it is false
//     loading:false
//   }
// }
// //executes after render executes for the first time
// componentDidMount(){
// //  fetch ("https://randomuser.me/api/?results=100")
// //  .then((response) => response.json())
// //  .then((response) => { 
// //   this.setState({
// //   items:response.results,
// //   //now we have data from Api, so we will call loading true
// //   loading:true
// //  })
// // })
// // }

// // render(){

// //   var {items,loading} = this.state
// //   if(!loading){
// //     return (
// //       <div> Loading...</div>
// //     )

// //   }

// //   else {}
  
// //   return (
// //     <div className = "container">
// //         {items.map(item => (
// //           <img src = {item.picture.medium} alt={item.name.first}/>
// //         ))}
// //     </div>
// //   )}
// // }

// // export default App;


// import React, { Component } from "react";
// // // import Main from "./Components/Main/";
// // // import MemberWrapper from "./Components/MemberWrapper/";
// // import MemberCard from "./Components/MemberCard/";
// // npm start

// class App extends Component {
//   state = {
//     loading: true,
//     people: [],
//   };

//   async componentDidMount() {
//     const url = "https://randomuser.me/api/?results=200&nat=us";
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ loading: false, people: data.results });
//   }

//   render() {
//     const employees = this.state.people;
//     return (
//       <React.Fragment>
//         <Main>
//           {this.state.loading || !this.state.people ? (
//             <div>loading...</div>
//           ) : (
//             <div>results...</div>
//           )}
//           <MemberWrapper>
//             {employees.map((person) => (
//               <MemberCard
//                 key={person.id.value}
//                 name={person.name.first + " " + person.name.last}
//                 img={person.picture.large}
//                 location={person.location.city}
//                 phone={person.phone}
//                 email={person.email}
//               />
//             ))}
//           </MemberWrapper>
//         </Main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;