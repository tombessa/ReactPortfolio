import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(false);
    const submitHandler = event => {
        event.preventDefault();
        const entenredAmount = amountInputRef.current.value;
        const entenredAmountNumber = +entenredAmount;
        if(entenredAmount.trim().length===0 ||
            entenredAmount<1 ||
            entenredAmount > 5){
            setAmountIsValid(false);
            return ;
        }
        props.onAddToCart(entenredAmountNumber);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount" input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
        {amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;