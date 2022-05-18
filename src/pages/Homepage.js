import React from "react";
import TextEditor
 from "../components/TextEditor";
function Homepage(props) {

    return (
        <div>
            <h1>
                Homepage
            </h1>
            <div>
            <TextEditor />
                {/* 
                body, including: 
                User posts feed
                Devs spotlight
                dev
                dev
                dev

                company spotlight
                company

                News articles
                 */}
            </div>

        </div>
    )
}

export default Homepage;