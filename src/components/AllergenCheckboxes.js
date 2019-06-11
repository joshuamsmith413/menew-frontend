// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
//
// const useStyles = makeStyles(theme => ({
//   button: {
//     display: 'block',
//     marginTop: theme.spacing(2),
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));
//
// function AllergenDropDown(props) {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//
//
//   function handleClose() {
//     setOpen(false);
//   }
//
//   function handleOpen() {
//     setOpen(true);
//   }
//
//   function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
//
//   const findUniqueAllergens = () => {
//     let fullAllergenList = []
//     props.items.forEach(item => {
//      return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
//    })
//     return fullAllergenList.filter(onlyUnique)
//   }
//
//   return (
//     <form autoComplete="off">
//       <Button className={classes.button} onClick={handleOpen}>
//       </Button>
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="demo-controlled-open-select"></InputLabel>
//         <Select
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//
//           onChange={props.showAllergenItems}
//           inputProps={{
//             name: 'allergen',
//             id: 'demo-controlled-open-select',
//           }}
//         >
//           <MenuItem value="">
//             <em>Allergens</em>
//           </MenuItem>
//           {findUniqueAllergens().map(allergen => {
//               return <MenuItem value={allergen}>{allergen}</MenuItem>
//             })}
//         </Select>
//       </FormControl>
//     </form>
//   );
// }
//
// export default AllergenDropDown;


// import React from 'react'
// import { Checkbox } from 'semantic-ui-react'
//
// const AllergenCheckboxes = (props) => {
//
//   function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
//
//   const findUniqueAllergens = () => {
//     let fullAllergenList = []
//
//     props.items.forEach(item => {
//      return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
//    })
//     return fullAllergenList.filter(onlyUnique)
//   }
//
//   return (
//     <div>
//       {findUniqueAllergens().map(allergen => {
//         return <span><Checkbox value={allergen} radio label={allergen} onChange={props.handleCheckboxes}/></span>
//       })}
//     </div>
//   )
// }
// export default AllergenCheckboxes


// import React, { Component } from 'react'
// import { Button, Checkbox } from 'semantic-ui-react'
//
// export default class AllergenCheckboxes extends Component {
//   state = {
//     checked: []
//    }
//
//   toggle = () => this.setState(prevState => ({ checked: !prevState.checked }))
//
//   onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
//
//   findUniqueAllergens = () => {
//     let fullAllergenList = []
//     this.props.items.forEach(item => {
//      return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
//    })
//
//     return fullAllergenList.filter(this.onlyUnique)
//   }
//
//   addToState = () => {
//     const checked = this.findUniqueAllergens().map(allergen => ({
//       [allergen]: false
//     }))
//     this.setState({ checked })
//     // return this.findUniqueAllergens().map(allergen => {
//     //   this.state.checked.push({[allergen]: false})
//     // })
//   }
//
//   componentDidMount() {
//     this.addToState()
//   }
//
//   makeAllergenRadioButtons = () => {
//     return this.findUniqueAllergens().map(allergen => {
//
//       return <Checkbox key={`${allergen}id`} value={allergen} checkbox={true} label={allergen} onClick={this.toggle} checked={this.state.checked.value}/>
//     })
//   }
//
//   render() {
//     console.log("allergen checkboses",this.state)
//     // console.log("allergen props",this.props)
//     return (
//       <div>
//         {this.makeAllergenRadioButtons()}
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class AllergenCheckboxes extends Component {

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  findUniqueAllergens = () => {
    let fullAllergenList = []
    this.props.itemsOnMenu.forEach(item => {
     return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
   })
    return fullAllergenList.filter(this.onlyUnique)
  }


  makeAllergenCheckboxes = () => {
    return this.findUniqueAllergens().map(allergen => {
      return <Checkbox key={`${allergen}id`} value={allergen} label={allergen} onClick={this.props.handleAllergenCheckboxes} />
    })
  }

  render() {
    return (
      <div>
        {this.makeAllergenCheckboxes()}
      </div>
    )
  }
}
