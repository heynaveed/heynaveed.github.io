import { Box, Flex, Image, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GithubCalender";
import GitStats from "./Stacks";
import OtherTools from "./OtherDevTools";
import FrontEndSkills from "./FrontEndSkills";

export default function Skills ( ){

   

    const BackendSkills = [
        {
            id: 1,
            image: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png',
            title: 'Node.Js'
        },
        {
            id: 2,
            image: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
            title: 'MongoDB'
        },
        {
            id: 3,
            image: 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png',
            title: 'Express.Js'
        }
    ]


    return (
        <>
         <Text textAlign='center' fontSize={{base : '22px', md  : '24px', lg : '35px'}} color='#4299E1'fontWeight={{base : '600', lg : '700'}}>Technical Skills</Text>
        <Flex  m='auto' direction={{base : 'column', lg : 'row'}} justifyContent='space-around' rowGap={{base : '40px'}}>
            <Box w={{base : '90%', lg : '40%'}} m={{base : 'auto', lg : '0'}} >
                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>FRONT END</Text>
                <FrontEndSkills/>
            </Box>
             


            <Box w={{base : '80%', lg : '35%'}} m={{base : 'auto', lg : '0'}}>
                <Text textAlign='center' fontSize={{ base: '12px', md: '18px', lg: '20px' }} fontWeight={{ base: '600', md: '600' }} mt={{ base: '50px', md: '80px', lg: '75px' }} letterSpacing={{ base: '3px' }}>BACK END</Text>
                <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} fontSize={{ base: '12px', md: '14px' }} fontWeight='600' justifyContent='space-between'  w='90%'>  
                    <Box >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' shadow='lg'/>
                    <Text textAlign='center' mt={{ base: '10px', lg:'20px'}}>Express</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png' shadow='lg'/>
                    <Text textAlign='center' mt={{ base: '10px', lg:'20px'}}>NodeJs</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'   src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' shadow='lg'/>
                    <Text textAlign='center' mt={{ base: '10px', lg:'20px'}}>MongoDB</Text>
                    </Box>
                </Flex>
                <OtherTools/>
            </Box>
        </Flex>


        <Text textAlign='center' fontSize={{base : '16px',  md : '18px'}} mt={{base : '50px', md: '60px' }} letterSpacing='3px'>VERSION CONTROL</Text>
        <Flex m='auto' mt={{base : '20px', md :'45px' , lg :'40px' }} justifyContent='space-between'  w={{base : '40%', md : '35%', lg : '20%'}}>  
                    <Box >
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png' shadow='lg'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Git Hub</Text>
                    </Box>

                    <Box>
                    <Image w={{base : '45px', md : '80px', lg :'60px'}}  m='auto'  src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' shadow='lg'/>
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