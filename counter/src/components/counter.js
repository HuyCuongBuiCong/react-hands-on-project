import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles((theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f4"
    },
    box: {
        height: "400px",
        width: "600px",
        background: "#fff",
        borderRadius: "5px",
        border: "5px solid black",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    button: {
        margin: "5px"
    },
    value: {
        fontSize: "36px",
        margin: "10px"
    }
}))

function Counter() {
    const classes = useStyle();
    const [value, setValue] = useState(0);

    const increase = () => setValue(value + 1);
    const decrease = () => setValue(value - 1);
    const reset = () => setValue(0)

    return (
        <div className={ classes.container }>
            <div className={classes.box}>
                <Typography color="secondary" variant="h4">
                    COUNTER APP
                </Typography>
                <Typography color="primary" className={ classes.value }>
                    { value }
                </Typography>
                <div>
                    <Button color="primary" className={ classes.button } variant="contained"
                            onClick={ increase }> + </Button>
                    <Button color="primary" className={ classes.button } variant="contained"
                            onClick={ decrease }> - </Button>
                    <Button className={ classes.button } onClick={ reset }> Reset </Button>
                </div>
            </div>
        </div>
    )
}

export default Counter;