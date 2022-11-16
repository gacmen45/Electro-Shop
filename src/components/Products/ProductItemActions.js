import classes from './ProductItemActions.module.css'
import Input from '../UI/Input'

const ProductItemActions = () => {
 return (
    <form  className={classes.actions}>
      <Input
        label=''
        input={{
          id: 'amount' ,
          type: 'number',
          min: '1',
          max: '3',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
     
    </form>)
}

export default ProductItemActions