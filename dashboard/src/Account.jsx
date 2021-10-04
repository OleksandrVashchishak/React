import React from 'react'
import { Route } from 'react-router-dom';
import { Menu, WelcomeTab, DataTab, ControlTab, RealtyTab, AddRealty, EditRealty, Messages, Message, Users, User, Friends, Construct, Plan } from './components'
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import Prelouder from './components/Prelouder/Prelouder';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Account = () => {

    const [cookies] = useCookies();
    const users = useSelector((state) => state.users);
    const [currentUser] = users.filter((item) => item.id === cookies.currentUser.id && item.id)

    return (
        <>
            {currentUser &&
                <div className="personal personal__container ">
                    <div className="backgrount-opacity-all" ></div>
                    <div className="personal__panel" >
                        <Menu />
                    </div>
                    <div className="personal__frame ">
                        <Route path="/account" component={WelcomeTab} exact />
                        <Route path="/account/data" component={DataTab} exact />
                        <Route path="/account/control" component={ControlTab} exact />
                        <Route path="/account/realty" component={RealtyTab} exact />
                        <Route path="/account/add-realty" component={AddRealty} exact />
                        <Route path="/account/edit-realty" component={EditRealty} />
                        <Route path="/account/messages" component={Messages} exact />
                        <Route path="/account/message" component={Message} />
                        <Route path="/account/users" component={Users} exact />
                        <Route path="/account/user" component={User} />
                        <Route path="/account/friends" component={Friends} exact />
                        <DndProvider backend={HTML5Backend}>
                            <Route path="/account/construct" component={Construct} exact />
                        </DndProvider>
                        <Route path="/account/plan" component={Plan} exact />

                    </div>
                </div >
            }

            {!currentUser &&
                <Prelouder />
            }

        </>
    )
}

export default Account
