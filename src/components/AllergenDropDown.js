import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function AllergenDropDown(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

  const findUniqueAllergens = () => {
    let fullAllergenList = []
    props.items.forEach(item => {
     return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
   })
    return fullAllergenList.filter(onlyUnique)
  }

  return (
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select"></InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}

          onChange={props.showAllergenItems}
          inputProps={{
            name: 'allergen',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>Allergens</em>
          </MenuItem>
          {findUniqueAllergens().map(allergen => {
              return <MenuItem value={allergen}>{allergen}</MenuItem>
            })}
        </Select>
      </FormControl>
    </form>
  );
}

export default AllergenDropDown;
