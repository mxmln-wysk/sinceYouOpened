import {createContext, createSignal, useContext} from "solid-js";

export const TimeContext = createContext();

export function TimeProvider(props:any) {
    const [time, setTime] = createSignal<number>(0 );
    const store = [
        time,
        {
            updateTime(newTime:number) {
                setTime( () => newTime);
            },
        },
    ];

    return (
        <TimeContext.Provider value={store}>
            {props.children}
        </TimeContext.Provider>
    );
}

export function useTime() { return useContext(TimeContext);}