
import  "./index.css"

import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
   
} from "react-router-dom";
import LoginButton from './LoginButton7.js'
import Accounts from "./Accounts4.js";
import TransactionsData from "./pages/TransactionsData.js";

import  Atm from "./pages/Atm4.js"
import  Deposit from "./pages/Deposit.js"
import  Withdraw from "./pages/Withdraw.js"

import Posts from "./pages/Posts.js";
import PostLists from "./pages/PostLists.js";
import Post from "./pages/Post.js";

import CreateAccount from "./pages/CreateAccount.js";
import Usersdata from "./pages/Usersdata.js";
import About from "./pages/About.js";
import NoMatch from "./pages/NoMatch.js";

import Loginpage from  "./pages/Loginpage2.js"
import Code  from  "./pages/Code.js"
import Logindata  from  "./pages/Logindata.js"

import Transfers  from  "./pages/Transfers.js"
import Documents from  "./pages/Documents.js"



export const UserContext = React.createContext(null); 
 


function LoginApp() {
    return (
        <>
       

            <BrowserRouter>

                <UserContext.Provider value = {{User: ["satish"], users : [{
                                name : "Satish",
                                email: "abcdef@gmail.com",
                                password: "secret",
                                balance: 200


                                }]}}>
                        <Routes>
                            
                                <Route path ="/" element={<LoginButton />} />

                                <Route path="/Posts" element ={<Posts />} >
                                    <Route index  element ={<PostLists />} />
                                    <Route path=":slug" element ={<Post />} />
                                </Route>

                                <Route path ="/About" element={<About />}/>
                                <Route path ="/CreateAccount" element={<CreateAccount />}/>
                                <Route path="*" element ={<NoMatch />} />
                            
                                <Route
                                    exact
                                    path="/Usersdata"
                                    element={<Usersdata />}
                                />

                                <Route
                                    exact
                                    path="/Accounts4"
                                    element={<Accounts />}
                                />
                                <Route
                                    exact
                                    path="/Loginpage2"
                                    element={<Loginpage />}
                                />
                                <Route
                                    exact
                                    path="/Logindata"
                                    element={<Logindata />}
                                />
                                <Route
                                    exact
                                    path="/Transfers"
                                    element={<Transfers />}
                                />
                                <Route
                                    exact
                                    path="/Documents"
                                    element={<Documents />}
                                />
                            
                            <Route
                                    exact
                                    path="/Code"
                                    element={<Code />}
                                />

                                <Route
                                    exact
                                    path="/Atm4"
                                    element={<Atm />}
                                />

                                <Route
                                    exact
                                    path="/TransactionsData"
                                    element={<TransactionsData />}
                                />

                                <Route
                                    exact
                                    path="/Deposit"
                                    element={<Deposit />}
                                />

                                <Route
                                    exact
                                    path="/Withdraw"
                                    element={<Withdraw />} 
                                />

                                
                        </Routes>
                    
                    </UserContext.Provider>

        </BrowserRouter>

            

        </>
    );
}
 
export default LoginApp;