import { AppBar, Button, Checkbox, Divider,List, ListItem,Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function BodyComp() {
  return (
    <div>
        <Box sx={{width:'35%',margin:'auto',mt:7,maxHeight:'680px',overflowY:'scroll',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
            
            <Stack direction='row' sx={{display:'flex',justifyContent:'space-between',m:3,mt:2,position:'sticky'}}>
                <Typography variant='h4' sx={{fontWeight:'750'}}>Cappuccino</Typography>
                <CloseTwoToneIcon/>
            </Stack>
            <Box sx={{display:'flex',backgroundColor:'#f2f2f2',m:1,p:2,justifyContent:'space-between'}}>
                <Stack>
                    <Typography variant='h6' sx={{fontWeight:'600'}}>Capp/Flat Milk Options</Typography>
                    <Typography>Please choose 1</Typography>
                </Stack>
                <Box sx={{display:'fex',flexDirection:'row'}}>
                    <Button sx={{backgroundColor:'#e6ff99',mr:5,color:'#000',fontWeight:'600'}}>Required</Button>
                    <KeyboardArrowRightTwoToneIcon mt={8}/>
                </Box>
                
            </Box>
            <Box sx={{m:1,p:2,backgroundColor:'#f2f2f2'}}>
                <Stack direction='row' sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{fontWeight:'600'}}>Temp</Typography>
                    <KeyboardArrowRightTwoToneIcon/>
                </Stack>
            </Box>
            <Box sx={{m:1,p:2,backgroundColor:'#f2f2f2',display:'flex',justifyContent:'space-between'}}>
                <Stack direction='column'>
                <Stack direction='column' sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography sx={{fontWeight:'600'}}>Coffee Type</Typography>
                                    
                </Stack>
                <Stack direction="row">
                    <Typography>Please choose up to 1 </Typography>  
                    <Typography  sx={{fontWeight:'700',color:'#002db3'}}>(1 selected)</Typography> 
                </Stack>
                </Stack>               
                <KeyboardArrowRightTwoToneIcon/>
            </Box>
            <Box>    
                <List size="sm">
                    <ListItem>
                        <Checkbox label="Lettuce" defaultChecked />
                        <Typography sx={{fontWeight:'600'}}>House</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                    <ListItem>
                        <Checkbox label="Tomato" />
                        <Typography>Decaf</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                    <ListItem>
                        <Checkbox label="Mustard" />
                        <Typography>Half Caff</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                </List>
            </Box>
            <Box sx={{backgroundColor:'#f2f2f2',m:1,p:2}}>
                <Stack direction='row' sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography fontWeight='600'>Flavors</Typography>
                    <KeyboardArrowDownIcon/>
                </Stack>
            </Box>
            <Box>    
                <List size="sm">
                    <ListItem>
                        <Checkbox label="Lettuce" defaultChecked />
                        <Typography sx={{fontWeight:'600'}}>House</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                    <ListItem>
                        <Checkbox label="Tomato" />
                        <Typography>Decaf</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                    <ListItem>
                        <Checkbox label="Mustard" />
                        <Typography>Half Caff</Typography>
                    </ListItem>
                    <Divider sx={{width:'90%',ml:3}}/>
                </List>
            </Box>
            <Box sx={{backgroundColor:'#f2f2f2',m:1,p:2}}>
                <Stack direction='row' sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography fontWeight='600'>Flavors</Typography>
                    <KeyboardArrowDownIcon/>
                </Stack>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between',p:2,position:'sticky',bottom:'0',backgroundColor:'#fff',boxShadow:'0px -2px 2px rgba(0, 0, 0, 0.2)'}}>
                <Stack direction='row' spacing={1} ml={2} mt={1}>
                    <RemoveCircleIcon sx={{color:'#f2f2f2',fontSize:'35px'}}/>
                    <Typography sx={{fontSize:'25px'}}>1</Typography>
                    <AddCircleIcon sx={{color:'#0000e6',fontSize:'35px'}}/>
                </Stack>
                <Button variant='contained' size='large' sx={{height:'50px'}} >
                    <ShoppingCartIcon/>
                    <Typography sx={{textTransform:'none',mr:18}}>Update Cart</Typography> 
                    <Typography>$7.00</Typography>
                </Button>
            </Box>
            
            
        

            
        </Box>
    </div>
  )
}

export default BodyComp
