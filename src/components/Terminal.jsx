import React from "react";
import { ReactTerminal } from "react-terminal";

export function Terminal() {
    // Define commands here
    const details = () => {
        return (
            <div style={{ margin: "8px 0px" }}>
                <p>Available Commands:</p>
                <p>
                    <span style={{ color: "#38CC77" }}>clear:</span> clears out
                    everything on screen!
                </p>
                <p>
                    <span style={{ color: "#38CC77" }}>npm_run_weather:</span> run weather API project
                    on new window
                </p>
                <p>
                    <span style={{ color: "#38CC77" }}>npm_run_todo:</span> run todo application project
                    on new window
                </p>
                <p>
                    <span style={{ color: "#38CC77" }}>cd:</span> change directory in nav (e.g cd project)
                </p>
            </div>
        )
    }

    const commands = {
        whoami: "jackharper",
        npm_run_weather: (function () { window.location.replace("https://rohandagale.com/")() }),
        npm_run_todo: (function () { window.location.replace("https://glittery-cucurucho-bd93f8.netlify.app/")() }),
        cdproject: (() => window.location.href = "/project"),
        help: details(),
        cd: (directory) => window.location.href = `/${directory}`
    };

    return (
        <div style={{ height: "24rem", width: "60vw", outline: "2px solid #69696969", borderRadius: "8px" }}>
            <ReactTerminal
                prompt={
                    "$user/rohan/dev >>"
                }
                welcomeMessage={
                    <p style={{ color: "#38CC77" }}>
                        Welcome to my website! Get started by typing `help` command below
                    </p>
                }
                commands={commands}
                themes={{
                    mycustomtheme: {
                        themeBGColor: "#",
                        themeToolbarColor: "#",
                        themeColor: "#38CC77",
                        themePromptColor: "#FFF",
                    }
                }}
                theme="mycustomtheme"
            />
        </div>
    );
}