import { useState } from "react";
import "./App.css";
import Button from "./Button";
import StateDemo from "./1.State/StateDemo";
import CardComponent from "./2.ReusableCard/CardDemo";
import { typographyClasses } from "@mui/material";
import FetchUsersComponent from "./3.FetchDataFromOutside/FetchUsersComponent";

let name = "John Doe"; // This is a variable

const cardsList = [
  {
    name: 'Card 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquam'
  },
  {
    name: 'Card 2',
    description: 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dom'
  },
  {
    name: 'Card 3',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'
  }
]

function App() {
  // return <StateDemo />

  // return <>
  //   {
  //     cardsList.map(
  //       ({ name, description }, idx) =>
  //         <CardComponent
  //           name={name}
  //           description={description}
  //           cardStyles={{
  //             ...((idx === 0 || idx % 2 === 0) && {
  //               backgroundColor: 'black',
  //               [`& .${typographyClasses.root}`]: {
  //                 color: 'white'
  //               }
  //             })
  //           }}
  //         />
  //     )
  //   }

  return <FetchUsersComponent />
}
export default App;
