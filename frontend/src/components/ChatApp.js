import React from "react";
import { ChatEngine, PeopleSettings } from "react-chat-engine";

import Logout from "../Logout";

export default function ChatApp() {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");

    return (
        <ChatEngine
            height="100vh"
            projectID="48222ef5-1267-49cb-93e4-989f8aa5bc03"
            userName={username}
            userSecret={password}
            renderPeopleSettings={(cred, chat) => (
                <>
                    <Logout />
                    <PeopleSettings {...cred} {...chat} />
                </>
            )}
        />
    );
}