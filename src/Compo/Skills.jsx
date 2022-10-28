import { Box, Flex, Image, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GithubCalender";
import GitStats from "./Stacks";

export default function Skills ( ){
    return (
        <>
         <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Skills</Text>
        <Flex  m='auto' direction={{base : 'column', lg : 'row'}} justifyContent='space-around' rowGap={{base : '40px'}}>
            <Box w={{base : '90%', lg : '40%'}} m={{base : 'auto', lg : '0'}} >
                <Text textAlign='center' fontSize={{base : '16px',  md : '18px'}} mt='20px' letterSpacing='3px'>FRONT END</Text>
                
                <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between'  w='90%'>  
                    <Box  gap='10px' justifyContent='center'>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://cdn-icons-png.flaticon.com/512/732/732212.png' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>HTML5</Text>
                    </Box>

                    <Box >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>CSS3</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}} m='auto' src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-plain.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>JavaScript</Text>
                    </Box>
                </Flex>

              
                <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between' w='90%'>  
                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>ReactJs</Text>
                    </Box>

                    <Box gap='10px' justifyContent='center' >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/redux/redux-original.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Redux</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-plain.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>TypeScript</Text>
                    </Box>
                </Flex>
            </Box>



            <Box w={{base : '90%', lg : '35%'}} m={{base : 'auto', lg : '0'}}>
                <Text textAlign='center' fontSize={{base : '16px',  md : '18px'}} mt='20px' letterSpacing='3px'>BACK END</Text>
                <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between'  w='90%'>  
                    <Box >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Express</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-plain.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>NodeJs</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'   src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>MongoDB</Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>


        <Text textAlign='center' fontSize={{base : '16px',  md : '18px'}} mt={{base : '50px', md: '60px' }} letterSpacing='3px'>VERSION CONTROL</Text>
        <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between'  w={{base : '40%', md : '35%', lg : '20%'}}>  
                    <Box >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Git Hub</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Git</Text>
                    </Box>
         </Flex>

         <Box>
            <GitStats/>
         </Box>

         <Box>
            <GitCalenderOffical/>
         </Box>


        </>
    )
}